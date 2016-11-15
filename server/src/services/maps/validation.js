const validate = ({loose = false} = {}) => async map =>
{
		console.log("Validating map");

    //Simple hand-written validation because we have such a simple service
    const errors = [];

    if (map.name)
    {
        if (typeof map.name !== "string") errors.push("map.name must be a string");
    }
    else if (!loose) errors.push("A map must have a name");

    if (map.tags)
    {
        if (!Array.isArray(map.tags)) errors.push("map.tags must be an array");
        if (map.tags.some(tag => typeof tag !== "string")) errors.push("map.tags must be an array of strings");
    }
    else if (!loose) map.tags = [];

    if (map.length)
    {
        if (typeof map.length !== "number") errors.push("map.length must be a number");
    }
    else if (!loose) errors.push("A map must have a length");

    if (map.width)
    {
        if (typeof map.width !== "number") errors.push("map.width must be a number");
    }
    else if (!loose) errors.push("A map must have a width");

    if (map.tileMap)
    {
        if (!Array.isArray(map.tileMap)) errors.push("map.tileMap must be an array");
        if (map.tileMap.some(tag => typeof tag !== "string")) errors.push("map.tileMap must be an array of strings");
        if (map.tileMap.length !== map.length * map.width)
            errors.push("The map's stated dimensions do not match the entered map data");
    }
    else if (!loose) errors.push("A map must have map data");

		console.log(`Errors: ${errors}`);
    if (errors.length !== 0) throw errors;
    return map;
};

export default validate;
