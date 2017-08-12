const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
})

app.get('/data/arterial', (req, res) => {
    res.sendFile(path.resolve( __dirname, '../Data/Arterial Reconstruction/ArterialRecon.json'));
});

app.get('/data/pavement/:year', (req, res) => {
    res.sendFile(path.resolve( __dirname, '../Data/Pavement Projects '+req.params.year+'/Pavement'+req.params.year+'.geojson'));
});

app.get('/scripts/:filename', (req, res) => {
    res.sendFile(path.resolve( __dirname, './scripts/'+req.params.filename));
});



app.listen(8080, ()=> {
    console.log('listening on 8080')
});