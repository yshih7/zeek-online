export class ParseIntValueConverter
{
    fromView(val)
    {
        if (typeof val === "string") return val === "" ? 0 : parseInt(val, 10);
        return val;
    }
}
