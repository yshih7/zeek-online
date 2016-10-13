export default function(r, tableName, primaryKey)
{
    return r.tableList().contains(tableName)
      .do(tableExists => r.branch( tableExists, {created: 0}, r.tableCreate(tableName, {primaryKey}))).run();
}
