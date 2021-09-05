import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
​
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { ServicesService } from './services.service';
​
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [ ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
