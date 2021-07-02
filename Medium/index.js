
function chuoi(chuoicantim,chuoinguon){
	var a = chuoicantim.length;
	var b = chuoinguon.length;
	for (var i = 0 ; i <= b-a; i++){
		var j ;
		for ( j = 0; j < a; j++)
			if(chuoinguon[i + j] != chuoicantim[j])
				break;
			if(j == a)
				return i;
		}
	return -1;
}
var chuoicantim = "abc";
var chuoinguon = "phanvanduong";
var dem = chuoi(chuoicantim, chuoinguon);
if (dem == -1 )
	document.write("khong co gia tri trong chuoi can tim");
else 
	 document.write("chuoi can tim o vi tri thu : " + dem);