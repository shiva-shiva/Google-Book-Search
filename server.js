require( 'dotenv' ).config() // looks for .env ; process.env gets it's values

const path = require('path')
const express = require('express')
const apiRouter = require('./app/router')
const app = express()

const PORT = process.env.PORT || 8080

if( !process.env.MONGODB_URI ){
   console.log( '*ERROR* You need a .env file (with MONGODB_URI,...)' )
   process.exit()
}

// for parsing incoming POST data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
   // for serving REACT production-build content
   console.log( '> production: static from client/build' )
   app.use( express.static(path.join('client','build')) )
} else {
   // for serving all the normal html
   app.use( express.static('public') )
}

// for routes
apiRouter(app)

// **OPTIONAL** If your REACT routing allows non-standard paths (ex. fake paths for React-Router)
// THEN you need to enable this for server-side serving to work
if (process.env.NODE_ENV === 'production') {
   app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, './client/build/index.html'))
   })
}

app.listen(PORT, function() {
   console.log( `Serving app on: http://localhost:${PORT}` )
})