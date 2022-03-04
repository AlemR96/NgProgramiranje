import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ApiService } from '../servisi/api.service';

@Component({
  selector: 'app-nova-komponenta',
  templateUrl: './nova-komponenta.component.html',
  styleUrls: ['./nova-komponenta.component.scss']
})
export class NovaKomponentaComponent implements OnInit {
  
  objave: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {

    

    this.api.getBlogPostovi().subscribe( (podaci: []) => {
      console.log(podaci);
      this.objave = podaci;

    let niz = podaci.map( (objava: any)=> { return objava.title.toUpperCase() } );
     console.log(niz);

    let filtrirniNiz = podaci.filter( (element: any) => element.title.includes('fugit') );
        console.log(filtrirniNiz);
    },
    (greska) => {
    console.log('Doslo je do greske u radu')
    },
    () => {console.log('Zavrseno')
    }
    );
  }



}
