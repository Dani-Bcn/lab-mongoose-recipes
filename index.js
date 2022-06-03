const mongoose = require('mongoose');
// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');
const { collection } = require('./models/Recipe.model');
const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';
// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`)
    // Before adding any recipes to the database, let's remove all existing ones
  })
  //  .then(() => {
  //      return Recipe.create({
  //      title:"fish and chips",
  //      value:"Easy Peasy",
  //      Ingredienst:["Fish","Chips"],
  //      cuisine:"Coco",
  //      thisType:"breekfast",
  //      image:"https://images.media-allrecipes.com/images/75131.jpg",
  //      duration:15,
  //      creator:"Jordi cruz",
  //      created:"today",
  //      })
  //  })
  
  //  .then(()=>{
  //    return Recipe.insertMany(data)
  //  })

  .then(()=>{
     return Recipe.findOneAndUpdate({title:"Rigatoni alla Genovese"},{duration:100})
  })
  .then(()=>{
      return Recipe.findOneAndDelete({title:"Carrot Cake"})
  })
  .then((value)=>{
    console.log(value)
  })
  
  .catch(error => {
    console.error('Error connecting to the database', error);
  })
  .finally(()=>{
    mongoose.connection.close()
  });
