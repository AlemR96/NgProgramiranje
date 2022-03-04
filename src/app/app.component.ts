import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NgProgramiranje';

  constructor() {
    console.log("Pozdrav iz konstruktora");
  }

  ngOnInit() {
    console.log("Pozdrav iz metode ngOninit");
  }


}

























  // VARIJABLE
  // JS Varijable:
  // Zastarjele varijable: kljucna rijec: var
  // 1. let imeVarijable = 5;
  // 2. const PI = 3.14

  // TIPOVI PODATAKA

  // 8 vrsta tipova podataka: number, string, boolean, bigint, null, undefined, objekti

 //Arrays - Nizovi - Liste []

 
    // alert('Kliknute ste na button')
    // let godinaRodjenja: number = 1975;
    // let drugaVarijabla: number = 5;
    // let ime = 'Sergej';

    //let rezultat = godinaRodjenja + drugaVarijabla;
    //console.log(rezultat);
    //console.log(ime);

    //let treciBroj = 10 + 4;
    //console.log('Zbir je:' + treciBroj)
    //let prviString: string = 'Kurs angular programiranje';
    //let drugiString: string = 'Februar 2022. godine';
    // Concatenation stringova - nadovezivanja stringova
    //console.log(prviString + ' ' + drugiString + ' ' + 'Predavac Sergej'); /







