import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Drzave } from '../interfaces/drzave';
import { ApiService } from '../servisi/api.service';

@Component({
  selector: 'app-drzave',
  templateUrl: './drzave.component.html',
  styleUrls: ['./drzave.component.scss']
})
export class DrzaveComponent implements OnInit {

  listaDrzava: Drzave[];
  listaDrzavaZaDisplay: Drzave[];
  kontinenti: string[] ;
  ukupanBrojStanovnika: number;
  ukupnaPovrsina: number;

  pretragaForm = this.formBuilder.group({
    terminPretrage: ['', Validators.required]
  })

  constructor(private api: ApiService, private formBuilder: FormBuilder) { }

  FilterRegija(kontinent: string) {
    this.listaDrzavaZaDisplay = this.listaDrzava.filter( (drzava) => drzava.region.toLowerCase().includes(kontinent.toLowerCase() ) )
  }

  Pretrazi(){
    let filtriraneDrzave = this.listaDrzava.filter( (drzava) => drzava.name.common.toLowerCase().includes(this.pretragaForm.value.terminPretrage.toLowerCase() ));
    
    this.listaDrzavaZaDisplay = filtriraneDrzave;
  }


 


  ngOnInit(): void {

    this.api.getDrzave().subscribe( (drzave: Drzave[]) => {

      this.listaDrzava = drzave;
      this.listaDrzavaZaDisplay = drzave;
      this.kontinenti = [... new Set(this.listaDrzava.map( (drzava) => {return drzava.region} ))] 

      
      this.ukupnaPovrsina = this.listaDrzava.reduce( (ukupno, drzava) => {

        ukupno = ukupno + drzava.area;
        return ukupno;

      }, 0);




      this.ukupanBrojStanovnika = this.listaDrzava.reduce( (total, trenutnaVrijednost) => {

        total = total + trenutnaVrijednost.population;
        return total;

      }, 0 );

      

      let sortiraneDrzave = this.listaDrzava.sort( (a, b) => {
        if(a.name.common > b.name.common) {
          return 1;
        }
        if(a.name.common < b.name.common) {
          return -1;
        }
        return 0;
      } );
      console.log(sortiraneDrzave);
      this.listaDrzava = sortiraneDrzave;



      let drzavePoBrojuStanovnika = this.listaDrzava.sort ( (a, b) => a.population - b.population);
      this.listaDrzava = drzavePoBrojuStanovnika;




      let drzavePoPovrsini = this.listaDrzava.sort ( (a, b) => a.area - b.area );
      this.listaDrzava = drzavePoPovrsini;




      // let prvaDrzava = drzave[0];
      //  console.log(prvaDrzava.unMember);
      let prvaDrzava = drzave[0];
      console.log(prvaDrzava.name.common);

    } )




    let gradovi = ["Sarajevo", "Mostar", "Banja Luka", "Tuzla", "Cazin"]
    console.log(gradovi);
    let sortiraniGradovi = gradovi.sort( (a, b) => {

      if(a < b) {
        return -1;
      }
      if(a > b) {
        return 1;
      }
        return 0

    } );
    console.log(sortiraniGradovi);

    let brojevi = [213, 1, 56, 1123, 79, 10000];
    console.log(brojevi);

    let sortiraniBrojevi = brojevi.sort( (a, b) => a - b );
    console.log(sortiraniBrojevi);



    this.pretragaForm.valueChanges.subscribe( (forma) => {
      let filtriraneDrzave = this.listaDrzava.filter( (drzava) => drzava.name.common.toLowerCase().includes(this.pretragaForm.value.terminPretrage.toLowerCase() ));
    
    this.listaDrzavaZaDisplay = filtriraneDrzave;
    } )

  }

  SortirajPoImenu() {
    this.listaDrzava.sort( (a, b) => {

      if(a.name.common > b.name.common) {return 1; };

      if(a.name.common < b.name.common) {return -1; };
      
      return 0;

    } )
  }
  SortirajPoBrojuStanovnika2() {
    this.listaDrzava.sort ( (a, b) => b.population - a.population )
  }
}
