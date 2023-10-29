//ini while//
// var ps = 1;
// var jmlhPs = 10;
// var psKosong = 6;

// while(ps<=psKosong){
//     console.log('Ps no. ' + ps + ' Sedang Kosong')
//     ps++
// }

//Ini For//
// for(ps = psKosong +1; ps <= jmlhPs; ps++){
//     console.log('Ps no. ' + ps + ' Sedang Penuh')
// }

// //ini if else//
// var jmlPs = 10;
// var jmlPsKosong = 6;

// for(var ps = 1; ps <= jmlPs; ps++){

//     if(ps <= jmlPsKosong && ps !== 5){
//         console.log('Ps no. ' + ps + ' Sedang Kosong')
//     }else if(ps === 8 || ps === 10 || ps === 5){
//     console.log('Ps no. ' + ps + ' Sedang Rusak')
//     }else{
//         console.log('Ps no. ' + ps + ' Sedang Penuh')
//     }
// }

// //Ini else if //
// var angka = prompt('Masukan Angka')

// if(angka % 2 == 0){
//     alert(angka + ' Adalah GANJIL')
// }else if(angka % 2 == 1){
//     alert(angka + ' Adalah GENAP')
// }else{
//     alert('Yang anda masukan bukan ANGKA')
// }

// var angka =parseInt(prompt('masukan angka'));

// if(angka == 1){
//     alert('anda memasukan angka 1')
// }else if(angka === 2){
//     alert('anda memasukkan angka 2')
// }else if(angka === 3){
//     alert('anda memasukan angka 3')
// }else if(angka === 4){
//     alert('anda memasukan angka 4')
// }else{
//     alert('yang anda masukan salah')
// }

//Ini dengan switch//
var test = prompt('Masukan Nama')

switch(test){
    case 'Nama':
        console.log('ikram')
        break;
    case 'Umur':
        console.log('20')
        break;
    case 'Alamat':
        console.log('Jakarta Pusat')
        break;
    case 'Status':
        console.log('Laki Laki')
        break;
    }

//PENGULANGAN & PENGKONDISIAN BERSARANG //
// var string = '';

// for(var i = 0; i<5; i++){
//     for(var j = 0; j<=i; j++){
//         string += '*'
//     }
//     string += '\n';
// }
// console.log(string);