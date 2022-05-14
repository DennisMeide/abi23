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

  ["Meide","Dennis","Liebt Katzen und Pizza. Aber nicht Katzen auf Pizza.","Ist Deutschland nicht in Berlin?",false],
  ["Fenn","Nate","Ist gut in Geographie, weiss aber nicht wo Kaukasus liegt.","Kaukaasus",false],
  ["Saijkosky","Tim Elias","Hasst Schule. Hasst jeden.","Ich hasse dich auch. ",false],
  ["name","vorname","txt","zitat",false],
  ["Schwier","Ruven Lennart","txt","zitat",false],
  ["Wetter","Lucas","txt","zitat",false],
  ["Grabowsky","Leon","txt","zitat",false],
  ["Wiebe","Alexandra","txt","zitat",false],
  ["Gavrilova","Lea","txt","zitat",false],
  ["Paulsen","Melvin Jesper","txt","zitat",false],
  ["Abruszat","Moritz Kilian","txt","zitat",false],
  ["Heuke","Leon","txt","zitat",false],
  ["Belus","Lil Solvei","txt","zitat",false],
  ["Semmo","Amar","txt","zitat",false],
  ["Rethmeier","Lana","txt","zitat",false],
  ["Gola","Hanna","txt","zitat",false],
  ["Post","Marlon Maurius","txt","zitat",false],
  ["Baysal","Tolga Mustafa","txt","zitat",false],
  ["Brodowski","Ben","txt","zitat",false],
  ["Struck","Colin","txt","zitat",false],
  ["P&ouml;tker","Linda","txt","zitat",false],
  ["Kage","Sophie-Marie","txt","zitat",false],
  ["Kardinal","Leon","txt","zitat",false],
  ["Grimmel","Valerie Phoebe","txt","zitat",false],
  ["Mnasri","Donja","txt","zitat",false],
  ["Hannen","Nils","W&uuml;rde niemals Drogen nehmen!","zitat",false],
  ["McGregor","Jordan","txt","zitat",false],
  ["Saidani","Jamil Salah","txt","zitat",false],
  ["Fehr","Nico","Toller kerl. Hilft beim Abibuch.","zitat",false],
  ["Nolting","Ida","txt","zitat",false],
  ["Lerche Maria","","txt","zitat",false],
  ["Traue","Jill","txt","zitat",false],
  ["Groos","Leander","txt","zitat",false],
  ["Hilenberg","David","Matheman!","zitat",false],
  ["Reding Anna-Maria","","txt","zitat",false],
  ["Kolisch","Garret Jason","txt","zitat",false],
  ["Cigdem","Alara","txt","zitat",false],
  ["S&uuml;dmeier","Lilly","txt","zitat",true],
  ["van der Meyden","Fynn","txt","zitat",false],
  ["Richter","Aaron Caleb","txt","zitat",true],
  ["Happel","Jonte Bjarne","txt","zitat",false],
  ["Hill","Marten","txt","zitat",false],
  ["L&ouml;wen","Mike","txt","zitat",false],
  ["Chaszczewski","Alicja Joanna","txt","zitat",false],
  ["Pfitzer","Sabrina Marie","txt","zitat",false],
  ["B&uuml;hner","Timo","txt","zitat",false],
  ["Lehzen","Emma","txt","zitat",false],
  ["Gateri","Lee","txt","zitat",false],
  ["Peschel","G&egrave;za","txt","zitat",false]
  
];

studentList.sort();

for (let i = 0 ; i < studentList.length ; i++ ) {
  addCode(studentList[i][0],studentList[i][1],studentList[i][2], studentList[i][3], studentList[i][4]);
};
