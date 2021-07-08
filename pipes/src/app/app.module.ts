import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core'; // import para o Locale
import { registerLocaleData } from '@angular/common'; // import para o Locale
import localePt from '@angular/common/locales/pt'; // import para o Locale
registerLocaleData(localePt, 'pt'); //  settings para o Locale

import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }], // provider para o locale
  bootstrap: [AppComponent]
})
export class AppModule { }
