/*        Kartojimas
  sąlygos
  ciklai (while - plačiau ++) 
  funkcijos (arrow, lambda) ++
  masyvai (metodai)

  GIT ir GitHub ++
*/

// kintamieji
{
  console.groupCollapsed("Kintamieji");
  let amzius = 18;
  let commas = 'Man "yra" ' + amzius +
  'metų.';
  let backtick = `Man
    'yra'
    ${amzius}
    "metų."
  `;
  console.groupEnd();
}

// sąlygos
{
  console.groupCollapsed("Sąlygos");
  let amzius = 18;
  let zodis = "Apelsinas";
  // if elseIf else
  if(amzius >= 18){
    //darome
    console.log("Esi pilnametis");
  } else if(amzius < 18){
    // daro tik jei ankščiau buve if'ai ir else if'ai buvo false
    console.log("Nesi pilanemtis");
  } else {
    // daro jei viskas aukščiau grąžino false
    console.log("Neteisingi amžiaus duomenys");
  }

  // ternary sąlyga
  amzius >= 18 ? console.log("Esi pilnametis") : console.log("Nesi pilanemtis");

  // switch
  switch(zodis){
    case 'Mandarinas':
      console.log("Kalėdų vaisius.");
    case 'Apelsinas':
      console.log('Citrusinis vaisius.');
      break;
    case "Bananas":
      console.log("Auga taip aukštai, pasiekt negalim jų lengvai...");
      break;
    default:
      console.log("Neturim tokių vaisių.");
  }
  console.groupEnd();
}

// ciklai
{
  console.groupCollapsed("Ciklai");
  // let skaitliukas = 1;
  // console.log(skaitliukas);
  // skaitliukas++;
  // console.log(skaitliukas);
  // skaitliukas++;
  // console.log(skaitliukas);
  // skaitliukas++;
  // console.log(skaitliukas);
  // skaitliukas++;

  // for
  for(let skaitliukas = 56; skaitliukas >= 8; skaitliukas-=8){ // skaitliukas = skaitliukas + 5
    // skaitliukas /= 2;
    console.log(skaitliukas);
  }
  console.log("------------------------------------------------");

  // while
  let skaitliukas = 13;
  while(skaitliukas >= 8){
    skaitliukas-=2;
    console.log(skaitliukas);
  }
  console.log("------------------------------------------------");

  // do while
  let haha = 2;
  do {
    console.log(haha);
    ++haha;
  } while(haha < 1);
  // do while nuo while skirasi tik tuo, kad jisai VISADA atliks bent vieną iteraciją
  console.log("------------------------------------------------");

  // while su masyvu
  let masyvasNr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
  while(masyvasNr1.length){
    console.log(masyvasNr1);
    console.log(masyvasNr1.shift());
  }
  console.log(masyvasNr1);
  console.log("------------------------------------------------");

  // for su masyvu
  let masyvasNr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
  for(let i = 0; i < masyvasNr2.length; i++){
    console.log(masyvasNr2[i]);
  }
  console.log("------------------------------------------------");

  // forEach
  masyvasNr2.forEach(masyvoReiksme => console.log(masyvoReiksme));

  console.groupEnd();
}

// funkcijos
{
  console.group("Funkcijos");

  // funkcija, kuri gauna parametrą ir grąžina atsakymą
  function funkcijosVardas(parametras1){
    let atsakymas = ++parametras1;
    return atsakymas;
  }
  let pirmosFunkcijosAtsakymas = funkcijosVardas(10);
  console.log(pirmosFunkcijosAtsakymas);

  // funkcija, kuri gauna parametrą ir nieko negrąžina
  function niekoNeduosiu(par1){
    console.log(par1 + " suraitytas.");
  }
  let antrosFunkcijosAtsakymas = niekoNeduosiu("Labas rytas");
  console.log(antrosFunkcijosAtsakymas);

  // funkcija, kuri negauna parametrų ir kažką grąžina
  function getCurrentDate(){
    // let atsakymas = new Date().toLocaleDateString("LT", {timeZone: "UK"});
    // return atsakymas;

    // let date = new Date().toISOString().split("T");
    // let ats = date[0] + ' ' + date[1].split(".")[0];
    // return ats;

    let atsakymas = new Date();
    return atsakymas;
  }
  let treciosFunkcijosAtsakymas = getCurrentDate();
  console.log(treciosFunkcijosAtsakymas);

  // funkcija, kuri negauna parametrų ir nieko negrąžina
  function niekasNiekamNieko(){
    alert("Hey hey ho, esate 1 000 000 svetainės lankytojas ir laimite iPhone+999. Prašome suveskite savo kortelės duomenis :)");
  }
  let ketvirtosFunkcijosAtsakymas = niekasNiekamNieko();
  console.log(ketvirtosFunkcijosAtsakymas);

  console.groupEnd();
}