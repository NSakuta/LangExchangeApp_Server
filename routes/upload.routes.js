const {profileImage} = require('../middleware/upload')

module.exports = app => {

    const router = require('express').Router();

    router.post('/upload', profileImage.single('image'), (req, res) => {
        try {
            if(req.file) {
                console.log('req.file: ', req.file)
                res.send(req.file)
            }
        }catch(err) {
            res.status(400).send({ error: err.message })
        } 
    })

    router.get('/upload/image')
    app.use('/api', router);
}





