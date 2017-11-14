import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { DemoRoutingModule } from './demo.routing';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule,
    ButtonsModule.forRoot(),
    FormsModule
  ],
  declarations: [DemoComponent]
})
export class DemoModule { }
