const express = require('express');
const cors = require('cors');
const db = require('./models');
const router = require('./api_for_ExchangeApp/routes/routes')

const PORT = 8080;

const app = express();

let corsOption = {
    origin: 'http://localhost:3000'
}

app.use(cors(corsOption));

app.use(express.json()); // awaiting of data from server
app.use(express.urlencoded({extended: true}));

db.mongoose.connect(db.url, { // Promise
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('you are connected to database')
}).catch(err => {
    console.log('Unable to connect to database', err)
    process.exit()
})

app.get('/', (req, res) => {
    res.json({"message":"Hello from server"})
});

router(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});