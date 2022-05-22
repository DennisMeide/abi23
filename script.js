  function addPict(pNr, pHide) {
    document.getElementById("pictureframe").innerHTML += '<div class="pict"><img class="img" src="./img_src/' + pNr + '.jpeg"></div>';
  }

  function addStudent(pName, pFirstName, pText, pQuote, pMark, pHide) {
    document.getElementById("studentListInHTML").innerHTML += '<div class="single_person_card"><h3>' + pName + ', ' + pFirstName + '</h3><p>' + pText + '</p><p class="person_qoute">"' + pQuote + '"</p></div>';
  }
  
  function addTeacher(pName, pFirstName, pText, pQuote, pMark, pHide) {
    document.getElementById("teacherListInHTML").innerHTML += '<div class="single_person_card"><h3>' + pName + ', ' + pFirstName + '</h3><p>' + pText + '</p><p class="person_qoute">"' + pQuote + '"</p></div>';
  }
  
  // --------------DELETE LATER------------------------------------------------------------------------------
  
  //alert("Wenn du Vorschläge für einen Text oder eine Änderung (z.B. Tippfehler) hast, kontaktiere Dennis Meide oder die SV!");
  
  // --------------DELETE LATER------------------------------------------------------------------------------
  
  const x = 18; //anzahl der bilder

  try {
    for (let i = 1 ; i <= x ; i++ ) {  
      addPict(i.toString());
    };
  
  } catch (e) {
    
    try {
      const studentList = [
        ["Meide","Dennis","Ist sehr beschäftigt damit, diese Seite hübsch aussehen zu lassen. Ist nicht sehr erfolgreich.","Deutschland liegt doch in Berlin?",false,false],
        ["Name","FirstName","Text","Quote",false,false],
        ["Name","FirstName","Text","Quote",false,false],
        ["Name","FirstName","Text","Quote",false,false],
        ["Name","FirstName","Text","Quote",false,false]
      ];
      
      studentList.sort();

      for (let i = 0 ; i < studentList.length ; i++ ) {
        addStudent(studentList[i][0],studentList[i][1],studentList[i][2], studentList[i][3], studentList[i][4], studentList[i][5]);
      };
    } catch (a) {
      const teacherList = [
        ["Meide","Dennis","Ist kein Lehrer. Oder etwa doch?","Deutschland liegt doch in Berlin?",false,false],
        ["Name","FirstName","Text","Quote",false,false],
        ["Name","FirstName","Text","Quote",false,false],
        ["Name","FirstName","Text","Quote",false,false],
        ["Name","FirstName","Text","Quote",false,false]
      ];

      teacherList.sort();

      for (let i = 0 ; i < teacherList.length ; i++ ) {
        addTeacher(teacherList[i][0],teacherList[i][1],teacherList[i][2], teacherList[i][3], teacherList[i][4], teacherList[i][5]);
      };
    }

  } 
  

