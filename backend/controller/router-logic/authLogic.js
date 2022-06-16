import {authModel} from "../../models/authModel.js";

export let authUserPost = (req, res) => {
    console.log(req.body.mail);
    let m = req.body.mail;
    authModel.find({mail: m}).then(r => {
        if (r.length !== 0) return res.json(-1)
        authModel.create(req.body).then(r => {
            res.json(1)
        })
    })

}

export let authUserPut = (req, res) => {
    const {_id, name, password, role} = req.body;
    authModel.findByIdAndUpdate(_id, {name: name, password: password, role: role}).then(r => {
        if (!r) return res.status(400).send(`no-user`)
        res.send('updated');
    })
        .catch(e => {
            console.log(e);
        })
}

export let authPost = (req, res) => {

}

export let authGet = (req, res) => {
    console.log(req.query);
    authModel.find(req.query).then(r => {
        if (r.length === 0) return res.json(false)
        res.json(true);
    })
}
