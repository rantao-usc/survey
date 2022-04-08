const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

const {MongoClient} = require('mongodb');
const connectionString = "mongodb+srv://csci571hw3:Tr551203@cluster0.xwmt8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

let db;

MongoClient.connect(connectionString, { useUnifiedTopology: true }, async (err, client) => {
  if (err) throw err

  db = client.db('survey');

})

app.get('/', (req, res) => {
    res.json('Yes, this did work!!!!');
})

app.get('/survey', async (req, res) => {
    const survey = await db.collection('survey').find().toArray();
    res.json(survey);
})

app.post('/results', async (req, res) => {
    await db.collection('results').insertOne(req.body);
    res.json('plz work');
})

app.get('/results', async (req, res) => {
    const results = await db.collection('results').find().toArray();
    res.json(results);
})

app.listen(3001, () => {
    console.log('plz work');
})