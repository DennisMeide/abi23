function addCode(pName, pVorname, ownText, quote) {
    document.getElementById("teachers").innerHTML += '<div class="teacher"><p class="name">' + pName + ', ' + pVorname + '</p><p>' + ownText + '</p><p class="zitat">"' + quote + '"</p></div>';
  }
  
  
  // --------------DELETE LATER------------------------------------------------------------------------------
  
  alert("Wenn du Vorschläge für einen Text oder eine Änderung (z.B. Tippfehler) hast, kontaktiere Dennis Meide oder die SV!");
  
  // --------------DELETE LATER------------------------------------------------------------------------------
  
  
  
  const teacherList = [
  
    ["Richter","Christoph","Kommt selten pünklich zu Physik. Hat die anständigsten Kurse überhaupt. ","Ihr seht: Ich habe mein bestes getan, das zu unterbinden. "],
    ["Bylebyl","Nadine","Liebt ihre Informatik Schüler/-innen!","Placeholder"]
    
  ];
  
  teacherList.sort();
  
  for (let i = 0 ; i < teacherList.length ; i++ ) {
    addCode(teacherList[i][0],teacherList[i][1],teacherList[i][2], teacherList[i][3], teacherList[i][4]);
  };