import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { InputTypeTextComponent } from './input-type-text/input-type-text.component';
import { InputTypeEmailComponent } from './input-type-email/input-type-email.component';
import { InputTypePasswordComponent } from './input-type-password/input-type-password.component';
import { InputTypeCheckComponent } from './input-type-check/input-type-check.component';
import { InputTypeButtonComponent } from './input-type-button/input-type-button.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    InputTypeTextComponent,
    InputTypeEmailComponent,
    InputTypePasswordComponent,
    InputTypeCheckComponent,
    InputTypeButtonComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
