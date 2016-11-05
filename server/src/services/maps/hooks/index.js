import {setCreator} from "../../../hooks";
import hooks from "feathers-hooks";
import {hooks as auth} from "feathers-authentication";

export const before = {
    all: [],
    find: [],
    get: [],
    create: [
        auth.verifyToken(),
        auth.populateUser(),
        auth.restrictToAuthenticated(),
        setCreator(),
        hooks.setCreatedAt()
    ],
    update: [
        hooks.disable(null)
    ],
    patch: [
        auth.verifyToken(),
        auth.populateUser(),
        auth.restrictToAuthenticated(),
        auth.restrictToOwner({ownerField: "creator"})
    ],
    remove: [
        auth.verifyToken(),
        auth.populateUser(),
        auth.restrictToAuthenticated(),
        auth.restrictToOwner({ownerField: "creator"})
    ]
};

export const after = {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
};
