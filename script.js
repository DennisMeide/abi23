function addCode(pName, pVorname, ownText, quote, specialMark) {
  if(!specialMark) {
    document.getElementById("students").innerHTML += '<div class="student"><p class="name">' + pName + ', ' + pVorname + '</p><p>' + ownText + '</p><p class="zitat">"' + quote + '"</p></div>';
  } else {
    document.getElementById("students").innerHTML += '<div class="student pointOut"><p class="name">' + pName + ', ' + pVorname + ' - SV</p><p>' + ownText + '</p><p class="zitat">"' + quote + '"</p></div>';
  }
}


// --------------DELETE LATER------------------------------------------------------------------------------

alert("Wenn du Vorschläge für einen Text, Bilder, oder eine Änderung (z.B. Tippfehler) hast, kontaktiere Dennis Meide oder die SV!");

// --------------DELETE LATER------------------------------------------------------------------------------



const studentList = [

  ["Meide","Dennis","Liebt Katzen, Pizza, und seine Freundin.","Ist Deutschland nicht in Berlin?",false]
  
];

studentList.sort();

for (let i = 0 ; i < studentList.length ; i++ ) {
  addCode(studentList[i][0],studentList[i][1],studentList[i][2], studentList[i][3], studentList[i][4]);
};
