import rethink from "rethinkdbdash";

const r = rethink({
    db: "zeek"
});

export default r;
