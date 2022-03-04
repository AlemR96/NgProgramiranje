import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetaljiComponent } from './detalji/detalji.component';
import { DrzaveComponent } from './drzave/drzave.component';
import { NovaKomponentaComponent } from './nova-komponenta/nova-komponenta.component';
import { TrecaComponent } from './treca/treca.component';

const routes: Routes = [
  { path: '', component: NovaKomponentaComponent },
  { path: 'treca', component: TrecaComponent },
  { path: 'drzave', component: DrzaveComponent },
  { path: 'drzava-detalji/:id' , component: DetaljiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
