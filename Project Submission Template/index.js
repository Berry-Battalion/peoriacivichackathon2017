//NodeJS Express server

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname))

//sends route file
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
})

//api for getting arterial json data
app.get('/data/arterial', (req, res) => {
    res.sendFile(path.resolve( __dirname, '../Data/Arterial Reconstruction/ArterialRecon.geojson'));
});

// api to get pavement project data based on year
app.get('/data/pavement/:year', (req, res) => {
    res.sendFile(path.resolve( __dirname, '../Data/Pavement Projects '+req.params.year+'/Pavement'+req.params.year+'.geojson'));
});

// gets the scripts files
app.get('/scripts/:filename', (req, res) => {
    res.sendFile(path.resolve( __dirname, './scripts/'+req.params.filename));
});


// listen on 8080
app.listen(8080, ()=> {
    console.log('listening on 8080')
});