let express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    app = express(),
    port = process.env.PORT || 3000;


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.listen(port, () => {
    console.log('Server up on port:', port);
});//end of port listen

app.get('/', (req, res) => {
    console.log('Main url hit');
    res.sendFile(path.resolve('public/views/index.html'));
});//end of get
