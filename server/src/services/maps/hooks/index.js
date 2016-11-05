import {setCreator} from "../../../hooks";
import hooks from "feathers-hooks";
import {setCreatedAt, validate} from "feathers-hooks-common";
import {hooks as auth} from "feathers-authentication";
import validator from "../validation";

export const before = {
    all: [],
    find: [],
    get: [],
    create: [
        auth.verifyToken(),
        auth.populateUser(),
        auth.restrictToAuthenticated(),
        validate(validator()),
        setCreator(),
        setCreatedAt()
    ],
    update: [
        hooks.disable(null)
    ],
    patch: [
        auth.verifyToken(),
        auth.populateUser(),
        auth.restrictToAuthenticated(),
        auth.restrictToOwner({ownerField: "creator"}),
        validate(validator({loose: true}))
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
