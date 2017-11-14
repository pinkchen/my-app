import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRouting} from "./app.routing";
import { AppComponent } from './app.component';
import { PagesModule} from "./pages/pages.module";
// FormsModule为了能够使用ngModel属性,在这里可以不导入
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    PagesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
