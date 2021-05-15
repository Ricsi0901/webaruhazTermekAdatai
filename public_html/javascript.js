var termekek='[{"id": "1", "nev": "fülhallgató","ár": "5000","db": "10"},{"id": "2","nev": "pendrive 128 gb","ár": "10000","db": "20"}]';
var adatObjektum=JSON.parse(termekek);
$(function(){
    
    kiir();
    $("#ok").click(adatokElment);
});
var termekek='[{"id": "1", "nev": "fülhallgató","ár": "5000","db": "10"},{"id": "2","nev": "pendrive 128 gb","ár": "10000","db": "20"}]';
function kiir(){
    $("section").append("<table>");
    $("section table").append('<tr><th>id</th><th>nev</th><th>ár</th><th>db</th><th>töröl</th><th>módosit</th></tr><');
    
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
function adatokElment(){
    var ujAdatok={};
    ujAdatok.id=$("#id").val();
    ujAdatok.nev=$("#nev").val();
    ujAdatok.ar=$("#ar").val();
    ujAdatok.db=$("#db").val();
    $("table").remove("table");
    adatObjektum.push(ujAdatok);
    kiir();
    
    
}


