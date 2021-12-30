const express = require('express');
const cors = require('cors');
const db = require('./models');
const router = require('./routes/routes');
const authJwt = require('./middleware/authJwt');
const authRoutes = require('./routes/auth.routes');
const path = require('path');
const uploadRouter = require('./routes/upload.routes')



const PORT = 8080;

const app = express();

let corsOption = {
    origin: 'http://localhost:3000'
}

app.use(cors(corsOption));

app.use(express.json()); // awaiting of data from server, all data in json format
app.use(express.urlencoded({extended: true}));
app.use('/images', express.static(path.join(__dirname, 'images'))) // путь к папке в которой храняться файлы
app.set("images", path.join(__dirname, "images"));

console.log('dirname: ', __dirname)


db.mongoose.connect(db.url, { // Promise
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('you are connected to database')
}).catch(err => {
    console.log('Unable to connect to database', err)
    process.exit()
})

//app.use(express.static(path.join(__dirname, '../../LangExchange_WEB_App/my-app/build'))) 

app.get('/', (req, res) => {
    res.json({"message":"Hello from server"})
});

app.get('/test', [authJwt], (req, res) =>{
    res.send({message: "it works!"})
})
app.get('/api/upload', (req, res) =>{
    res.send({message: "upload!"})
})
/////////////////////////////////

// app.use(express.static('client/build'))
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// });

////////////////////////////////

router(app);
authRoutes(app);
uploadRouter(app);

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../../LangExchange_WEB_App/my-app/build/index.html'));
// });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});




