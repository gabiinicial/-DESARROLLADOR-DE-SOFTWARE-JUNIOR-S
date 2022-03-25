import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InstitutionsMunicipalyComponent} from './page/institutions-municipaly/institutions-municipaly.component'

const routes: Routes = [
{path : '', component: InstitutionsMunicipalyComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
