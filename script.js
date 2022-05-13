function addCode(pName, pVorname, ownText, quote, specialMark) {
  if(!specialMark) {
    document.getElementById("students").innerHTML += '<div class="student"><p class="name">' + pName + ', ' + pVorname + '</p><p>' + ownText + '</p><p class="zitat">"' + quote + '"</p></div>';
  } else {
    document.getElementById("students").innerHTML += '<div class="student pointOut"><p class="name">' + pName + ', ' + pVorname + ' - SV</p><p>' + ownText + '</p><p class="zitat">"' + quote + '"</p></div>';
  }
}

addCode("Meide","Dennis","Ist nicht aufmerksam.", "Liegt Deutschland nicht in Berlin?", true);
addCode("Person","Test","Lernt noch aus", "Ich hasse es, zitiert zu werden!", false);