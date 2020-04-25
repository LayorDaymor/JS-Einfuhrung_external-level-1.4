function erste(){
  window.alert("Hallo Welt");
}

function zweite(){
  const yourName=window.prompt("Bitte Ihren Namen eingeben");
  const deinName=document.getElementById("deinName");
  deinName.innerHTML+="<h1>" + yourName +"</h1>";
}
function dritte(){

  window.prompt("Bitte Ihren Namen eingeben", "Cancel");
}

function vierte(){

  window.confirm("Stimmen Sie meiner Meinung zu?");
}

function fünfte(){

  var alter = prompt( "Gib mir bitte dein Alter:" );
  console.log( alter );
}


function sechste(){

  var b = 5;
  var a = b * 5 -3;
  alert(a);
}



function sebte(){

  mann = "Robert Wadlow der größte Mann der Welt : ";
  grosse = "2,72m";
  alert(mann + grosse);
}

function achte(){

  visiter_name = prompt("Schreibe dein Name : ");
  if (visiter_name != null && visiter_name != "")
  alert("Dain Name is : " + visiter_name);
  else alert("Leerer Name...!");
}

function neunte(){

  message = "Drücken Sie Ok, um weiterzumachen.";
  x = confirm(message);
  if (x == true) {
    alert("Du hast auf den Ok-Button geklickt.");
  } else {
    alert("Sie haben auf die Taste Cancel geklickt.");
  }
}






