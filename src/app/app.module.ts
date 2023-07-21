import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BasicHighLightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHightlightDirective } from './better-hightlight/better-hightlight.directive';


import { AppComponent } from './app.component';
import { StructuralDirectiveDirective } from './structural-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighLightDirective,
    BetterHightlightDirective,
    StructuralDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
