import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquarecomponentComponent } from './squarecomponent/squarecomponent.component';
import { BoardcomponentComponent } from './boardcomponent/boardcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    SquarecomponentComponent,
    BoardcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
