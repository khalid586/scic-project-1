const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


const app = express();
const port = process.env.PORT || 5007;

const corsOptions = {
    origin: [ 
        'http://localhost:5173',
        'http://localhost:5174',
        'https://hotels-buy1.web.app'
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
        app.get('/hotels',async (req,res)=>{
            const hotels = await hotelsCollection.find().toArray();
            res.send(hotels);
        })
        app.get('/added_hotels/:email',async (req,res)=>{
            const email = req.params.email;
            const hotels = await hotelsCollection.find({uploaderEmail:email}).toArray();
            res.send(hotels);
        })
        app.get('/details/:id',async (req,res)=>{
            const id = req.params.id;
            const hotel = await hotelsCollection.findOne({_id: new ObjectId(id)});
            res.send(hotel);
        })
        app.get('/available',async (req,res)=>{
            const hotels = await hotelsCollection.find({copies : {$gt:0}}).toArray();
            res.send(hotels);
        })
        app.get('/rented/:email',async(req,res)=>{
            const email = req.params.email;
            const result = await hotelsCollection.find({
                rentedBy: email
            }).toArray();
            res.send(result);
        })

        

        app.patch('/update/:id',async (req,res)=>{
            const hotelId = req.params.id;
            const Info = req.body;

            const result =  await hotelsCollection.updateOne(
                { _id: new ObjectId(hotelId) },
                { $set: Info }
            )

            res.send(result);
        })

        app.patch('/return/:id',async(req,res)=>{
            const id = req.params.id;
            const {email} = req.body;
            const result = await hotelsCollection.updateOne(
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
            const result = await hotelsCollection.updateOne(
                {_id: new ObjectId(id)},
                {
                    $push:{rentedBy:email},
                    $inc:{copies:-1}

                }
            )
            res.send(result);
        })

        app.delete('/delete/:id',async (req,res) =>{
            const hotelId = req.params.id;
            const result = await hotelsCollection.deleteOne({_id: new ObjectId(hotelId)});
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