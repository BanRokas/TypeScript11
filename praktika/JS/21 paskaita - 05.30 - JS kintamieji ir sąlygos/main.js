// one liner
/* multi
line
komentavimas */

/*              Kintamieji            */
{
  /*
    var / let / const 
    kintamojo vardas
    =
    informacija
  
    Kintamųjų tipai:
      Number - Skaičius - 5, -6, 1.89, 5*7, 5e6
      String - Žodžiai  - 'labas', "ate", `backtick`
      Boolean - Loginis - true, false
      Array - Masyvas   - [], [5, 4], ['string', false], [1, [21, 22]]
      Object - Objektas - {}, {raktinisZodis : reiksme}
  */

  let vardas = "Rokas";
  let pavarde = "Banaitis";
  let amzius = 25;
  let gimimoMetai = 1996;
  let turiVaiku = false;
  let pomegiai = ['sportas', 'žaidimai', 'serialai', 'gamta', 'mokslas'];

  const asmenys = [
    {
      id: 1,
      pavarde: "Banaitis",
      gimimoMetai: 1996,
      vardas: "Rokas",
      amzius: 25,
      turiVaiku: false,
      pomegiai: ['sportas', 'žaidimai', 'serialai', 'gamta'],
      gyvenamojiVieta: {
        planeta: "Žemė",
        zemynas: "Europa",
        salis: "Lietuva",
        miestas: "Kaunas",
        gatve: "Mindaugo",
        namoNumeris: 54
      }
    }, {
      id: 2,
      pavarde: "Petrauskas",
      gimimoMetai: 1999,
      vardas: "Petras",
      amzius: 23,
      turiVaiku: true,
      pomegiai: ['serialai', 'gamta', 'mokslas'],
      gyvenamojiVieta: {
        planeta: "Žemė",
        zemynas: "Europa",
        salis: "Lietuva",
        miestas: "Vilnius",
        gatve: "Kauno",
        namoNumeris: 10
      }
    }
  ]

  /*    Apibendrinimas   */
  console.groupCollapsed("Kintamieji");
  {
    // String
    let stringKintamasis = "645987";
    console.log('stringKintamasis', stringKintamasis);
    // Number
    let numberKintamasis = 1996;
    console.log('numberKintamasis', numberKintamasis);
    // Boolean
    let booleanKintamasis = true;
    console.log('booleanKintamasis', booleanKintamasis);
    // Array
    let arrayKintamasis = [1, 2, 3, "Labas", false];
    console.log('arrayKintamasis', arrayKintamasis); // visas masyvas
    console.log('arrayKintamasis[0]', arrayKintamasis[0]); // masyvo 0'tasis elementas
    // Object
    let objectKintamasis = { raktinisZodis: "Reiškmė", raktas2: 654 };
    console.log('objectKintamasis', objectKintamasis); // visas objektas
    console.log('objectKintamasis.raktas2', objectKintamasis.raktas2); // objekto elementas pavadinimu 'raktas2'
  }
  console.groupEnd();
}
/*              Aritmetika            */
{
  /*
    Matematiniai veiksmai:
      x+y - sudėtis: 5+5=10
      x-y - atimtis: 3-8=-5
      x*y - daugyba: 6*7=42
      x/y - dalyba:  12/3=4
      x%y - liekana: 24%5=4 (24-(5*4)=4)
      x**y - laipsnis: 2**4=2*2*2*2=16
      x**(1/y) - šaknis: 16**(1/4)=2
  */
  console.groupCollapsed('Skaičių aritmetika');
  {
    console.log('5 + 5 =', 5 + 5);
    console.log('3 - 8 =', 3 - 8);
    console.log('6 * 7 =', 6 * 7);
    console.log('12 / 3 =', 12 / 3);
    console.log('24 % 5 =', 24 % 5);
    console.log('2 ** 4 =', 2 ** 4);
    console.log('16 ** (1/4) =', 16 ** (1 / 4));
  }
  console.groupEnd();
  /*
    Matematiniai veiksmai su mišriais duomenimis:
      'zodis'+' '+'kitas zodis' = 'zodis kitas zodis';
      'zodis'+10 = 'zodis10';
      '25'+50 = '2550';
      '25'+50 = 75; fix it  <=  +'25'+50 | Number('25')+50 | '25'*1+50
  */
  console.groupCollapsed('Žodžių aritmetika');
  {
    console.log("'zodis' + ' ' + 'kitas zodis' =", 'zodis' + ' ' + 'kitas zodis');
    console.log("'zodis' + 10 =", 'zodis' + 10);
    console.log("'25' + 50 =", '25' + 50);
    console.log("'25' - 50 =", '25' - 50);
    console.log("50 * '25' =", 50 * '25');
    console.log("50 / '25' =", 50 / '25');
    console.log("24 % '25' =", 24 % '25');
    console.log("'25'** 2 =", '25' ** 2);
    console.log("16**(1/'25') =", 16 ** (1 / '25'));
    console.log("Number('25') + 50 =", Number('25') + 50);
  }
  console.groupEnd();
}
/*              Operatoriai           */
{
  /*
    Palyginimo:
      == - tikriname ar abejose pusėse yra vienodos reikšmės
      ===	- tikriname ar abojose pusėse yra vienodos reikšmės ir tipai
      != - tikriname ar abejose pusėse yra nevienodos reikšmės
      !== - tikriname ar abejose pusėse yra nevienodos reikšmės ir tipai
      >	- tikriname ar kairėje pusėje reikšmė yra didesnė nei dešinėje
      <	- tikriname ar dešinėje pusėje reikšmė yra didesnė nei kairėje
      >= - tikriname ar kairėje pusėje reikšmė yra didesnė nei arba lygi dešinėje
      <= - tikriname ar dešinėje pusėje reikšmė yra didesnė nei arba lygi kairėje
    Loginiai:
      && - AND - tikrina ar ABEJOSE pusėse yra tiesa
      || - OR  - tikrina ar BENT VIENOJE pusėje yra tiesa
      !  - NOT - apverčia reikšmę
  */
  console.groupCollapsed('Operatoriai');
  {
    console.log("5==5 =>", 5 == 5); // true
    console.log("5===5 =>", 5 === 5); // true
    console.log("5=='5' =>", 5 == '5'); // true
    console.log("5==='5' =>", 5 === '5'); // false
    console.log("5 != 5 =>", 5 != 5); // false
    console.log("5 !== 5 =>", 5 !== 5); // false
    console.log("5 != '5' =>", 5 != '5'); // false
    console.log("5 !== '5' =>", 5 !== '5'); // true
    console.log("5 < 5 =>", 5 < 5); // false
    console.log("5 > 5 =>", 5 > 5); // false
    console.log("5 <= 5 =>", 5 <= 5); // true
    console.log("5 >= 5 =>", 5 >= 5); // true
    console.log("5 < 10 =>", 5 < 10); // true
    console.log("5 > 10 =>", 5 > 10); // false
    console.log("5 <= 10 =>", 5 <= 10); // true
    console.log("5 >= 10 =>", 5 >= 10); // false
    console.log("50 < 10 =>", 50 < 10); // false
    console.log("50 > 10 =>", 50 > 10); // true
    console.log("50 <= 10 =>", 50 <= 10); // false
    console.log("50 >= 10 =>", 50 >= 10); // true
    console.log("--------------------");
    console.log("10 > 5 && 5 < 8 =>", 10 > 5 && 5 < 8); // true && true => true
    console.log("10 > 5 && 5 < 3 =>", 10 > 5 && 5 < 3); // true && false => false
    console.log("10 < 5 && console.log('melas???') =>", 10 < 5 && console.log('melas???')); // false && => false
    console.log("10 < 5 || 5 < 3 =>", 10 < 5 || 5 < 3); // false || false => false
    console.log("10 < 5 || 5 > 3 =>", 10 < 5 || 5 > 3); // false || true => true
    console.log("10 > 5 || console.log('tiesa???') =>", 10 > 5 || console.log('tiesa???')); // true || => true
  }
  console.groupEnd();
}
/*                Sąlygos             */
{
  /*
    If:
      if(sąlyga){
        vykdomi veiksmai jeigu sąlyga tiesa
      }
    If + Else:
      if(sąlyga){
        vykdomi veiksmai jeigu sąlyga tiesa
      } else {
        vykdomi veiksmai jeigu sąlyga melas
      }
    If + Else if + Else if + ... + Else
      if(sąlyga1){
        vykdomi veiksmai jeigu sąlyga1 tiesa
      } else if(sąlyga2){
        vykdomi veiksmai jeigu sąlyga1 melas ir sąlyga2 tiesa
      } else if(sąlyga3){
        vykdomi veiksmai jeigu sąlyga1 ir sąlyga2 melas, o salygą3 tiesa
      } else {
        vykdomi veiksmai jeigu visos aukščiau esančios sąlygos melas
      }
  */
  console.group("Sąlygos");
  {
    let amzius = Number(prompt("Koks tavo amžius?"));
    console.log(typeof(amzius));
    if(amzius < 7){
      console.log("Esi iki mokyklinio amžiaus.");
    } else if(amzius < 18){
      console.log("Esi mokyklinio amžiaus.");
    } else if(amzius < 65){
      if(amzius < 25){
        console.log("Esi dar decently jaunas.");
      } else {
        console.log("Pensijos varpai skamba :)");
      }
    } else {
      console.log("Kažkoks neaprašytas amžius.");
    }
    console.log("Po 5 metų būsi " + (amzius+5) + " metų.");
  }
  console.groupEnd();
}