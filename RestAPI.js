//import modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');// import body-parser

app.use(bodyParser.urlencoded({extended: false}))
// mehod get 
app.get('/Coba', (req, res)=>{
    res.end("ini get XI RPL ");
});

//method post
app.post('/Coba', (req, res)=>{
    res.end("ini post XI RPL");
});


//endpoint get degan menggunakan parameter
app.get('/siswa/:name', (request, response)=>{// :nama merupakan parameter
    let namaSiswa = request.params.name; //deklarasi variabel namaSiswa
    response.end("menampilkan nama siswa "+ namaSiswa);
});
//endpoint post, dengan menggunakan body-parse untuk mengirim data
app.post('/siswa', (request, response)=>{
    let namaSiswa = request.body.name;
    let alamat = request.body.adress;
    response.end('menampilkan siswa baru ' + namaSiswa +',yang berlamat di' +alamat);
});
//endpoint delete, data yg diakses secara spesifik dengan menggunkan parameter
app.delete('/siswa/:id', (request, response)=>{
    let id = request.params.id;
    let namaSiswa = request.body.name;
    response.end('id'+ id + 'telah dihapus, dengan nama: '+namaSiswa);
});
//endpoint update
app.put('/siswa/:id', (request, response)=>{
    let id = request.params.id;
    let namaSiswa = request.body.name;  
    let alamat = request.body.alamat;
    response.end('siswa dengan id: '+id+ 'telah diupfate')
});

//inisialisasi port
app.listen('8080', (e)=>{
    console.log(e);
})