async function signup(req, res, model, schema) {
    const schema_obj_keys = Object.keys(schema.obj); // schema is a parameter

    let obj = {};

    for (let key of schema_obj_keys) {
        if (req.body.hasOwnProperty(key)) {
            obj[key] = req.body[key];
        }
    }

    try {
        const newDoc = await model.create(obj);
        return res.json(newDoc);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }

}

export {signup}