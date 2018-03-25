const express = require('express');
const app = express();
//два адреса  на один файл
app.get((/([/]$|[/]form$)/), function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
//наше Vue приложение (собранное)
app.get('/bundle.js', function (req, res) {
    res.sendFile(__dirname + '/bundle.js');
});
//статика
app.use('/css', express.static('css'));
app.use('/fonts', express.static('fonts'));
//редиректим все на главную, что не /, не form  и не статика
app.use((req,res,next)=>{
    "use strict";
   if(req.url!=='/'||req.url!=='/form'){
        return res.redirect(301, '/');
    }
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});