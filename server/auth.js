require("dotenv").config();
const express = require("express");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const auth = express()

const mongoURI = process.env.MONGO_URI
// initialize express-session 
  auth.use(
    session({
      key: "connect_sid",
      secret:"somerandonstuffs",
      resave:false,
      saveUninitialized:true,    
      store: MongoStore.create({
        mongoUrl :mongoURI,
        collectionName:'sessions',
        cookie: { 
          maxAge : 1000 * 10
        }
      })
    })
  )

// // This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// // This usually happens when you stop your express server after login, your cookie still remains saved in the browser.

auth.use((req,res,next)=> {
   if(req.cookies.connect_sid && ! req.session.user){
     res.clearCookie('connect_sid')
   }
  next()
})




module.exports = auth