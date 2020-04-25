window.alert("Hallo Welt");


const yourName=window.prompt("Bitte Ihren Namen eingeben");
const deinName=document.getElementById("deinName");
deinName.innerHTML+="<h1>" + yourName +"</h1>";

window.prompt("Bitte Ihren Namen eingeben", "Cancel");
window.confirm("Stimmen Sie meiner Meinung zu?");


var alter = prompt( "Gib mir bitte dein Alter:" );
console.log( alter );

var b = 5;
var a = b * 5 -3;
alert(a);

mann = "Robert Wadlow der größte Mann der Welt : ";
grosse = "2,72m";
alert(mann + grosse);

visiter_name = prompt("Schreibe dein Name : ");
if (visiter_name != null && visiter_name != "")
alert("Dain Name is : " + visiter_name);
else alert("Leerer Name...!");


message = "Drücken Sie Ok, um weiterzumachen.";
x = confirm(message);
if (x == true) {
  alert("Du hast auf den Ok-Button geklickt.");
} else {
  alert("Sie haben auf die Taste Cancel geklickt.");
}
