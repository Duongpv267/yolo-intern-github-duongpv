function xaoTron(mang){
    var bien = mang.length, ngauNhien;
    while(0 != bien){
        ngauNhien = Math.floor(Math.random() * bien);
        bien --;
        [mang[xaoTron], mang[ngauNhien]] 
        = [ mang[ngauNhien], mang[xaoTron]];
    }
    return mang;
}
var mang =[23,64,32,36,07,02,34,55,11];
xaoTron(mang);
alert('Cac so bi xao tron: '+ mang)