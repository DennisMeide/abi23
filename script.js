function addCode(pName, pVorname, ownText, quote, specialMark) {
  if(!specialMark) {
    document.getElementById("students").innerHTML += '<div class="student"><p class="name">' + pName + ', ' + pVorname + '</p><p>' + ownText + '</p><p class="zitat">"' + quote + '"</p></div>';
  } else {
    document.getElementById("students").innerHTML += '<div class="student pointOut"><p class="name">' + pName + ', ' + pVorname + ' - SV</p><p>' + ownText + '</p><p class="zitat">"' + quote + '"</p></div>';
  }
}

const studentList = [

  ["Meide","Dennis","Liebt Katzen und Pizza. Aber nicht Katzen auf Pizza.","Ist Deutschland nicht in Berlin?",true],
  ["Fenn","Nate","Ist gut in Geographie, weiss aber nicht wo Kaukasus liegt.","Kaukaasus",false],
  ["Saijkosky","Tim Elias","Hasst Schule. Hasst jeden.","Ich hasse dich auch. ",false],
  ["Kolisch","Garret","Hat interessante politische Ansichten.","Hallo!",false]

];

studentList.sort();

for (let i = 0 ; i < studentList.length ; i++ ) {
  addCode(studentList[i][0],studentList[i][1],studentList[i][2], studentList[i][3], studentList[i][4]);
};
