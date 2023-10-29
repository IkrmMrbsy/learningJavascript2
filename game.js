var tanya = true;
while (tanya){

//MENANGKAP PILIHAN PLAYER//
var p = prompt('pilih : gajah, semut, orang');

//MENANGKAP PILIHAN KOMPUTER//
var comp = Math.random();

if (comp < 0.34){
    comp = 'gajah';
}else if ( comp >= 0.34 && comp < 0.67){
    comp = 'orang';
}else{
    comp = 'semut';
}

var hasil = '';
//MENENTUKAN RULES//
if(p == comp){
    hasil = 'seri';
}else if (p == 'gajah'){
   hasil = (comp == 'orang') ? 'menang' : 'kalah';
}else if(p == 'orang'){
    hasil = (comp == 'gajah') ? 'kalah' : 'menang';
}else if(p == 'semut'){
    hasil = (comp == 'orang') ? 'kalah' : 'menang';
}else{
    hasil ='Memasukan pilihan yang salah';
}

//MENAMPILKAN HASIL NYA//
alert('kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\nMaka hasilnya : kamu ' + hasil);

tanya = confirm('lagi');
}

alert('terimakasi sudah bermain');