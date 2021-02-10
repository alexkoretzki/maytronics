import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TexteboxComponent } from './textebox/textebox.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './ui/card/card.component';
import { BackgroundColorDirective } from './directives/background-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    TexteboxComponent,
    CardComponent,
    BackgroundColorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
