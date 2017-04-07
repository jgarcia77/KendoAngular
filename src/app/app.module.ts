import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { DetailsComponent } from './details/details.component'; 

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GridModule,
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
