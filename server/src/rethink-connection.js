import rethink from "rethinkdbdash";

const r = rethink({
    db: "penultima"
});

export default r;
