function addCode(pNr) {
    document.getElementById("pictures").innerHTML += '<div class="pict"><img class="img" src="../images/' + pNr + '.jpeg"></div>';
  }
  
  
  // --------------DELETE LATER------------------------------------------------------------------------------
  
  //alert("Wenn du Vorschläge für einen Text oder eine Änderung (z.B. Tippfehler) hast, kontaktiere Dennis Meide oder die SV!");
  
  // --------------DELETE LATER------------------------------------------------------------------------------
  
  const x = 18; //anzahl der bilder
  
  for (let i = 1 ; i <= x ; i++ ) {  
    addCode(i.toString());
  };