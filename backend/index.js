const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


const app = express();
const port = process.env.PORT || 5007;

const corsOptions = {
    origin: [ 
        'http://localhost:5173',
        'http://localhost:5174',
        'https://books-buy1.web.app'
    ],
    optionsSuccessStatus: 200 
  };
  
app.use(cors(corsOptions));

app.use(express.json());


require('dotenv').config(); 
const uri = process.env.MONGO_URL


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  
  async function run() {
    try {
      // await client.connect();
      //   const database = client.db("PlacesDatabase");
      //   const placesData = database.collection('places');
      //   const countriesCollection = database.collection('countries');
      
      
      const hotelsCollection = client.db('HotelsCollection').collection('hotels');
      
      app.post('/add_hotel',async (req,res)=>{
          const data = req.body;
          const result = await hotelsCollection.insertOne(data);
          // res.status(200).json({ message: 'Hotel added' });
          res.send(result);
      })
        app.get('/books',async (req,res)=>{
            const books = await booksCollection.find().toArray();
            res.send(books);
        })
        app.get('/added_books/:email',async (req,res)=>{
            const email = req.params.email;
            const books = await booksCollection.find({uploaderEmail:email}).toArray();
            res.send(books);
        })
        app.get('/details/:id',async (req,res)=>{
            const id = req.params.id;
            const book = await booksCollection.findOne({_id: new ObjectId(id)});
            res.send(book);
        })
        app.get('/available',async (req,res)=>{
            const books = await booksCollection.find({copies : {$gt:0}}).toArray();
            res.send(books);
        })
        app.get('/rented/:email',async(req,res)=>{
            const email = req.params.email;
            const result = await booksCollection.find({
                rentedBy: email
            }).toArray();
            res.send(result);
        })

        

        app.patch('/update/:id',async (req,res)=>{
            const bookId = req.params.id;
            const Info = req.body;

            const result =  await booksCollection.updateOne(
                { _id: new ObjectId(bookId) },
                { $set: Info }
            )

            res.send(result);
        })

        app.patch('/return/:id',async(req,res)=>{
            const id = req.params.id;
            const {email} = req.body;
            const result = await booksCollection.updateOne(
                {_id: new ObjectId(id)},
                {
                    $pull:{rentedBy:email},
                    $inc:{copies:1}

                }
            )
            res.send(result);
        })
        app.patch('/rent/:id',async(req,res)=>{
            const id = req.params.id;
            const {email} = req.body;
            const result = await booksCollection.updateOne(
                {_id: new ObjectId(id)},
                {
                    $push:{rentedBy:email},
                    $inc:{copies:-1}

                }
            )
            res.send(result);
        })

        app.delete('/delete/:id',async (req,res) =>{
            const bookId = req.params.id;
            const result = await booksCollection.deleteOne({_id: new ObjectId(bookId)});
            res.send(result);
        })

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch(error){
      console.error(error)
    }
  }
  run().catch(console.dir);


app.get('/',(req,res)=>{
    res.send('Version 1.0!!')
})

app.listen(port,() =>{
    console.log(`server is running at ${port}`)
})