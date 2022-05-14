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

  ["Meide","Dennis","Liebt Katzen, Pizza, und seine Freundin.","Ist Deutschland nicht in Berlin?",false],
  ["Fenn","Nathaniel","Ist gut in Geographie, weiss aber nicht wo Kaukasus liegt.","Kaukasus",false],
  ["Saijkoski","Tim Elias","Hasst Schule. Hasst jeden.","Ich hasse dich auch. ",false],
  ["Schwier","Ruven Lennart","txt","zitat",false],
  ["Wetter","Lucas","txt","zitat",false],
  ["Grabowsky","Leon","txt","zitat",false],
  ["Wiebe","Alexandra","txt","zitat",false],
  ["Gavrilova","Lea","txt","zitat",false],
  ["Paulsen","Melvin Jesper","Findet den Unterricht von Herrn Vogt zum Kotzen.","Kurze Werbeunterbrechung, jetzt gehts weiter.",false],
  ["Abruszat","Moritz Kilian","txt","zitat",false],
  ["Heuke","Leon","txt","zitat",false],
  ["Belus","Lil Solvei","txt","zitat",false],
  ["Semmo","Amar","txt","zitat",false],
  ["Rethmeier","Lana","txt","zitat",false],
  ["Gola","Hanna","txt","zitat",false],
  ["Post","Marlon Maurius","txt","zitat",false],
  ["Baysal","Tolga Mustafa","txt","zitat",false],
  ["Brodowski","Ben","txt","zitat",false],
  ["Struck","Colin","txt","zitat",true],
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
  ["Happel","Jonte Bjarne","txt","zitat",true],
  ["Hill","Marten","txt","zitat",false],
  ["L&ouml;wen","Mike","txt","zitat",false],
  ["Chaszczewski","Alicja Joanna","txt","zitat",false],
  ["Pfitzer","Sabrina Marie","txt","zitat",false],
  ["B&uuml;hner","Timo","txt","zitat",false],
  ["Lehzen","Emma","txt","zitat",false],
  ["Gateri","Lee","txt","zitat",false],
  ["Peschel","G&egrave;za","txt","zitat",false],
  ["Depner","Celine","txt","zitat",false],
  ["Klenke","Finn","txt","zitat",false],
  ["Huneke","Frans","Von allen gehasst.","Huh?",false],
  ["Isbrecht","Kateline","txt","zitat",false],
  ["Brandhorst","Katja","txt","zitat",false],
  ["Schmitz","Jana","txt","zitat",false],
  ["Fortuna","Marcel","txt","zitat",false],
  ["Papke","Nina","txt","zitat",false],
  ["Krümpelbeck","Lea","txt","zitat",false],
  ["Kruse","Kai Alexander","txt","zitat",false],
  ["Fischer","Mathilda","txt","zitat",false],
  ["Carstens","Franka","txt","zitat",false],
  ["Mogdanz","Max Frederik","txt","zitat",false],
  ["Zullo","Amy-Li","txt","zitat",false],
  ["Onumkpu","Chantal Onyinyechi","txt","zitat",false],
  ["Riechman","Ruven","txt","zitat",false],
  ["Beste","Til Jonas","txt","zitat",false],
  ["Bußmann","Ronja","txt","zitat",false],
  ["Meinhard","Rocco","Brachte Herrn Hoefermann Pommes in den Unterricht.","zitat",false],
  ["Janle","Evelyn","txt","zitat",false],
  ["Barth","Johanna","txt","zitat",false],
  ["Kroniger","Leif Timon","txt","zitat",false],
  ["Mytanz","Till Bjarne Niklas","txt","zitat",false],
  ["Teuteberg","Theodor","txt","zitat",false],
  ["Lemke","Theresa-Marie","txt","zitat",true],
  ["Schweitzer","Hannes","txt","zitat",false],
  ["Welle","Mattis","txt","zitat",false],
  ["Kaup","Marten","txt","zitat",false],
  ["Schlüß","Tom Ole","txt","zitat",false],
  ["Borcherding","Emma","txt","zitat",false],
  ["Harder","Lukas","txt","zitat",false],
  ["Orlov","Sophie Laura","txt","zitat",false],
  ["Kowalewski","Sara","txt","zitat",false],
  ["Siebert","Yannik","txt","zitat",false],
  ["Pallapies","Matthes","Hat einfach keinen Humor. Deshalb versteht er auch diesen Scherz nicht.","zitat",false],
  ["Klassen","Miriam","txt","zitat",false],
  ["Eichner","Melvin","txt","zitat",false],
  ["Körtner","Max Luis","txt","zitat",false],
  ["Ullrich","Lasse","txt","zitat",false],
  ["Olfert","Arik","txt","zitat",false],
  ["Kracht","Jonathan","txt","zitat",false],
  ["Krebs","Maja","txt","zitat",false],
  ["Walke","Marek Torben Jonathan","txt","zitat",false],
  ["Altewolf","Justin","txt","zitat",false],
  ["Müller","Finn-Elias","txt","zitat",false],
  ["Nottmeier","Silas-Marcel","txt","zitat",false],
  ["Seele","Maurice","txt","zitat",false],
  ["Boese","Henri","txt","zitat",false],
  ["Leininger","Julian","txt","zitat",false],
  ["Kuhlmann","Kevin","txt","zitat",false],
  ["Harder","Nicole","txt","zitat",false],
  ["Lacour","Amelie","txt","zitat",false],
  ["Mauritz","Tim","txt","zitat",false],
  ["Hubricht","Lene Sophie","txt","zitat",true],
  ["Ceven","Berzan","txt","zitat",false],
  ["Reshöft","Jorit","txt","zitat",false],
  ["Niessing","Martina","txt","zitat",false],
  ["Sturhahn","Tjorven Till","txt","zitat",false],
  ["Rathert","Danica","txt","zitat",false],
  ["Schulz-Wübbenhorst","Gabriel Noah","txt","zitat",false],
  ["Wiens","Jannick","txt","zitat",false],
  ["Brinkmann","Emil","txt","zitat",false],
  ["Suwalski","Julina-Sophie","txt","zitat",false],
  ["Horst","Zoe Melina","txt","zitat",false],
  ["Tschassanti","Lea","txt","zitat",false],
  ["Brandt","Hendrik","txt","zitat",false],
  ["Wingender","Jannis","txt","zitat",false],
  ["Husemeier","Finja","txt","zitat",false],
  ["Sieker","Susanna","txt","zitat",false]
  
];

studentList.sort();

for (let i = 0 ; i < studentList.length ; i++ ) {
  addCode(studentList[i][0],studentList[i][1],studentList[i][2], studentList[i][3], studentList[i][4]);
};
