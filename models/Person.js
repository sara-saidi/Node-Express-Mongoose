const mongoose=require('mongoose')

const PersonneSchema=mongoose.Schema({
    cin:{
type:String,
required:true

    },
    nom:{
        type:String,
        required:true
        
            },
   prenom:{
                type:String,
                required:true
                
                    },
    age:{
                        type:Number,
                        required:false
                        
                            },                
})
const Personne =mongoose.model('personne',PersonneSchema)
module.exports = Personne