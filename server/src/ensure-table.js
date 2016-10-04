export default function(r, tableName)
{
    return r.tableList().contains(tableName)
      .do(tableExists => r.branch( tableExists, {created: 0}, r.dbCreate(tableName))).run();
}
