module.exports = app => {

    const router = require('express').Router();
    // const uploadMdlware = require('../middleware/upload');

    // router.post('/upload', uploadMdlware.single('avatar')), (req, res) => { // single -> отвечает за количество файлов которое можно загрузить
    //     try {
    //         if(req.file) {
    //             res.json(req.file)
    //         }
    //     }catch(err) {
    //         console.log(err.message)
    //     }
    // };

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





