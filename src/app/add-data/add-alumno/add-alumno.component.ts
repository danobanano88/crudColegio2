import { Component, OnInit } from '@angular/core';
import { AddDataModule } from '../add-data.module';
import { Alumno, AlumnoGrado, grado } from 'src/app/app.component';
import {Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.css']
})
export class AddAlumnoComponent implements OnInit {

  isGrado = false;
  isProfesor = false;
  isGradoAlumno = false;

  ngOnInit(): void {
    console.log(this.data);
      
  }
  constructor(
    public dialogRef: MatDialogRef<AddAlumnoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alumno | grado | AlumnoGrado | any,
    
  ) {
    if (data.idProfesor != undefined) {
      console.log("isGrado");
      this.isGrado = true;
    }
    if(data.lastname != undefined) {
      this.isProfesor = true;
    }
    if(data.seccion != undefined) {
      this.isGradoAlumno = true;
    }
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
}
