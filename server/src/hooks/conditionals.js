async function runHooks(service, hookObj, hooksToRun)
{
    for (const hk of hooksToRun)
    {
        if (hk.length === 2)
        {
            hookObj = await new Promise((resolve, reject) =>
                hk.call(service, hookObj, (err, result) =>
                    err ? reject(err) : resolve(result)
                )
            );
        }
        else
        {
            hookObj = await Promise.resolve(hk.call(service, hookObj));
        }
    }

    return hookObj;
}

export const runIf = (condFn, ...hooksToRun) => async hook =>
{
    if (await Promise.resolve(condFn.call(this, hook)))
    {
        hook = await runHooks(this, hook, hooksToRun);
    }
    else
    {
        hook.params.__failedCondition__ = true;
    }

    return hook;
};

export const elseRunIf = (condFn, ...hooksToRun) => async hook =>
{
    if (hook.params.__failedCondition__)
    {
        hook = await runIf(condFn, ...hooksToRun).call(this, hook);
        hook.params.__failedCondition__ = false;
    }

    return hook;
};

export const elseRun = (...hooksToRun) => async hook =>
{
    if (hook.params.__failedCondition__)
    {
        hook = await runHooks(this, hook, hooksToRun);
    }

    hook.params.__failedCondition__ = false;
    return hook;
};
