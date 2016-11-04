import globalHooks from "../../../hooks";
import hooks from "feathers-hooks";
import {hooks as auth} from "feathers-authentication";

export const before = {
    all: [],
    find: [
        auth.verifyToken(),
        auth.populateUser(),
        auth.restrictToAuthenticated()
    ],
    get: [
        /*
        auth.verifyToken(),
        auth.populateUser(),
        auth.restrictToAuthenticated(),
        auth.restrictToOwner({ownerField: "loginName"})
        */
    ],
    create: [
        auth.hashPassword()
    ],
    update: [
        auth.verifyToken(),
        auth.populateUser(),
        auth.restrictToAuthenticated(),
        auth.restrictToOwner({ownerField: "loginName"}),
        auth.hashPassword()
    ],
    patch: [
        auth.verifyToken(),
        auth.populateUser(),
        auth.restrictToAuthenticated(),
        auth.restrictToOwner({ownerField: "loginName"}),
        auth.hashPassword()
    ],
    remove: [
        auth.verifyToken(),
        auth.populateUser(),
        auth.restrictToAuthenticated(),
        auth.restrictToOwner({ownerField: "loginName"})
    ]
};

export const after = {
    all: [hooks.remove("password")],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
};
