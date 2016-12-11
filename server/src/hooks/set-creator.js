export const setCreator = ({fieldName = "creator", userIdField = "loginName"} = {}) => hook =>
{
    const {data, params: {user}} = hook;
    data[fieldName] = user[userIdField];
		console.log(`Set creator: ${data}`);
    return hook;
};
