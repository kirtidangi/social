import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputcomponentComponent } from './inputcomponent/inputcomponent.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtoncomponentComponent } from './buttoncomponent/buttoncomponent.component';


@NgModule({
  declarations: [
    InputcomponentComponent,
    ButtoncomponentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    InputcomponentComponent,
    ButtoncomponentComponent,
  ]
})
export class UiModuleModule { }
