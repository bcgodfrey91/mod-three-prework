var express = require('express')
var app = express()

// 1) Hello World

// app.get('/home', function(req, ret) {
//   res.end('Hello World!')
// })
// app.listen(process.argv[2] || 3000)

// 2) Static

// var path = require('path')
// app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
//
// app.listen(process.argv[2])

// 3) Jade
// app.set('view engine', 'jade')
// app.set('views', process.argv[3])
// app.get('/home', function(req, res) {
//   res.render('index', {date: new Date().toDateString()})
// })
// app.listen(process.argv[2])

// 4) Good Old Form
// var bodyParser = require('body-parser')
//
// app.use(bodyParser.urlencoded({extended: false}))
//
// app.post('/form', function(req, res) {
//   res.send(req.body.str.split('').reverse().join(''))
// })
//
// app.listen(process.argv[2])

// 5) Sylish Css

// app.use(require('stylus').middleware(process.argv[3]));
// app.use(express.static(process.argv[3]));
//
//
// app.listen(process.argv[2])

// 6) Param pam pam

// app.put('/message/:id', function(req, res){
//   var id = req.params.id
//   var str = require('crypto')
//     .createHash('sha1')
//     .update(new Date().toDateString() + id)
//     .digest('hex')
//   res.send(str)
// })
//
// app.listen(process.argv[2])

// 7) What's In Query

// app.get('/search', function(req, res){
//   var query = req.query
//   res.send(query)
// })
//
// app.listen(process.argv[2])

// 8) JSON me

// var fs = require('fs')
//
// app.get('/books', function(req, res){
//   var filename = process.argv[3]
//   fs.readFile(filename, function(e, data) {
//     if (e) return res.sendStatus(500)
//     try {
//       books = JSON.parse(data)
//     } catch (e) {
//       res.sendStatus(500)
//     }
//     res.json(books)
//   })
// })
//
// app.listen(process.argv[2])
