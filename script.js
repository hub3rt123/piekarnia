function formularz(){
    let name=document.getElementById('name').value;
    let surname=document.getElementById('surname').value;
    let email=document.getElementById('mail').value;
    let phone=document.getElementById('phone').value;

    document.getElementById('row').innerHTML="<p>Wprowadzone dane: Imie: "+name+", Nazwisko: "+surname+", E-mail: "+email+", Telefon: "+phone+"</p>";
   
}
function oblicz(){
    let grahamka=document.getElementById('grahamka').value;
    let kajzerka=document.getElementById('kajzerka').value;
    let ciabatta=document.getElementById('ciabatta').value;
    let zytnia=document.getElementById('zytnia').value;
    let ser=document.getElementById('ser').value;

    let cena=0;
    
    let cenagra=grahamka*20;
    let cenakaj=kajzerka*8;
    let cenacia=ciabatta*15;
    let cenazyt=zytnia*12;
    let cenaser=ser*11.50;

    cena=cenagra+cenakaj+cenacia+cenazyt+cenaser;

    document.getElementById('cena').innerHTML=cena+" zł";
}