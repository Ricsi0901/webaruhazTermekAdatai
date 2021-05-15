var termekek='[{"id": "1", "nev": "fülhallgató","ár": "5000","db": "10"},{"id": "2","nev": "pendrive 128 gb","ár": "10000","db": "20"}]';
var adatObjektum=JSON.parse(termekek);
$(function(){
    kiir();
    
});
var termekek='[{"id": "1", "nev": "fülhallgató","ár": "5000","db": "10"},{"id": "2","nev": "pendrive 128 gb","ár": "10000","db": "20"}]';
function kiir(){
    var i =1;
    for (var index in adatObjektum) {
        $("table ").append("<tr>");
        console.log(adatObjektum[index]);
        for (var item in adatObjektum[index]) {
            $("table tr").eq(i).append("<td>"+adatObjektum[index][item]+"</td>");
           
        }
        $("table tr").eq(i).append('<td><input type="button" id="torol" name="torol" value="töröl"></td>');
        $("table tr").eq(i).append('<td><input type="button" id="modosit" name="modosit" value="modosit"></td>');
        i++;
    }
}


