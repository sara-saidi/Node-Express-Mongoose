const express = require ('express')
const bodyParser=require("body-parser")
const app = express ();

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const Personne = require('./models/Person')

app.get('/Personnes',async(req,res)=>{
try{
await Personne.find({})
.then(result=>{
  res.send(result)
})}
catch(err){
  console.log(err)
}

})

const mongoose = require('mongoose');

// Define the MongoDB connection URL
const mongoDBUrl = 'mongodb+srv://sarra:sarra@cluster0.ewuaqrp.mongodb.net/?retryWrites=true&w=majority';

// Connect to the database using promises
mongoose
  .connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Your code here
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


app.post('/ajouter_personne',async(req,res)=>{
try{
let new_personne = new Personne({

cin: req.body.cin,
nom: req.body.nom,
prenom:req.body.prenom,
age:req.body.age

})

await new_personne.save()
res.send('sauvgarde effectué avec succès')
}
catch(err){
  console.log(err)
}


})

app.delete('/delete/:id',async(req,res)=>{

try{

await Personne.findOneAndDelete({_id:req.params.id})
res.send("supprimer avec succés")

}
catch(err){res.send(err)}




})




app.put('/msj/:id',async(req,res)=>{

  try{
  
  await Personne.findOneAndUpdate({_id:req.params.id},{
    age:req.body.age
  })
  res.send("mise a jours avec succés")
  
  }
  catch(err){res.send(err)}
  
  
  
  
  })







app.listen(5000,()=>{
    console.log("serveur en marche")
})