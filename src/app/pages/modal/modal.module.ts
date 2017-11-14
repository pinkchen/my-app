import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalRoutingModule } from './modal-routing.module';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ModalRoutingModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  declarations: [ModalComponent]
})
export class Modal1Module { }
