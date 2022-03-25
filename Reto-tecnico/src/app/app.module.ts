import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstitutionsMunicipalyComponent } from './page/institutions-municipaly/institutions-municipaly.component';
import {UseApiMunicipalyService} from './use-api-municipaly.service';
@NgModule({
  declarations: [
    AppComponent,
    InstitutionsMunicipalyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [UseApiMunicipalyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
