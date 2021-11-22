module.exports = app => {

    const router = require('express').Router();

    const imageUpload = require('../middleware/upload')

    router.post('/upload', imageUpload.single('image'), (req, res) => {
        try {
            if(req.file) {
                res.send(req.file)
            }
        }catch(err) {
            res.status(400).send({ error: err.message })
        } 
    })


    router.get('/upload/image')
    app.use('/api', router);
}





