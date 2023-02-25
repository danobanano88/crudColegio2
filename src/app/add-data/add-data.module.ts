import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAlumnoComponent } from './add-alumno/add-alumno.component';
import { AppModule } from '../app.module';


@NgModule({
  declarations: [
    AddAlumnoComponent
  ],
  imports: [
    CommonModule,
    AppModule
  ],
  exports: [
    AddAlumnoComponent,
  ],

})
export class AddDataModule { }
