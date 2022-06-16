import bugModel from "../../models/bugModel.js";

export let bugGet = (req, res) => {
    bugModel.find(req.query).then(r => {
        console.log(req.query);
        console.log(r);
        res.json(r);
    })
}

export let bugEditPut = (req, res) => {
    const {_id, ...updates} = req.body
    bugModel.findByIdAndUpdate(_id, updates).then(r => {
        if (!r) return res.json(false);
        res.json(true);
    })
}

export let bugCreatePost = (req, res) => {
    bugModel.create(req.body).then(r => {
        if (!r) return res.json(false);
        res.json(true);
    })
}

export let bugDeleteDelete = (req, res) => {
    const {_id} = req.body;
    bugModel.findByIdAndDelete(_id).then(r => {
        if (!r) return res.json(false);
        res.json(true);
    })

}
