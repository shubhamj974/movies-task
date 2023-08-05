import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieposterComponent } from './shared/components/movieposter/movieposter.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieposterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
