// const path = require('path')
const http = require('http')

http.createServer(function(req,res){
    res.write('高文军，我是你爸爸')
    res.end()
}).listen(8080)