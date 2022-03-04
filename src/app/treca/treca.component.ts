import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servisi/api.service';

@Component({
  selector: 'app-treca',
  templateUrl: './treca.component.html',
  styleUrls: ['./treca.component.scss']
})
export class TrecaComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.testFunkcija();
  }

}
