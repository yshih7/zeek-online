export class ParseIntValueConverter
{
    fromView(val)
    {
        if (typeof val === "string") return parseInt(val);
        return val;
    }
}
