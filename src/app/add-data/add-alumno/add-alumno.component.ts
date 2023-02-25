import { Component, OnInit } from '@angular/core';
import { AddDataModule } from '../add-data.module';
import { Alumno } from 'src/app/app.component';
import {Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.css']
})
export class AddAlumnoComponent implements OnInit {

  ngOnInit(): void {
      
  }
  constructor(
    public dialogRef: MatDialogRef<AddAlumnoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alumno,
    
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
