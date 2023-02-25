import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { AddAlumnoComponent } from './add-data/add-alumno/add-alumno.component';
import { DataSource } from '@angular/cdk/collections';

export interface Alumno {
  name: string;
  id: number;
  lastname: string;
  genre: string;
  dob: Date
}

export interface Profesor {
  name: string;
  id: number;
  lastname: string;
  genre: string;
}

export interface grado{
  name: string;
  id: number;
  idProfesor: number;
}

export interface AlumnoGrado{
  id: number;
  idAlumno: number;
  idGrado: number;
  seccion: string;
}



let ELEMENT_DATA: Alumno[] = [
  {id: 1, name: 'Daniel', lastname: "Prieto Huguenin", genre: 'H', dob: new Date('1998-11-18')}, 
  {id: 2, name: 'Juan', lastname: "Perez", genre: 'H', dob: new Date('1998-11-18')},
  {id: 3, name: 'Maria', lastname: "Perez", genre: 'M', dob: new Date('1998-11-18')},
  {id: 4, name: 'Pedro', lastname: "Perez", genre: 'H', dob: new Date('1998-11-18')},
];

let ELEMENT_DATA_PROFESOR: Profesor[] = [
  {id: 1, name: 'Norberto', lastname: "Prieto Huguenin", genre: 'H'}, 
  {id: 2, name: 'Andres', lastname: "Diaz", genre: 'H'},
  {id: 3, name: 'Sandra', lastname: "Gomez", genre: 'M'},
  {id: 4, name: 'Manuel', lastname: "Perez", genre: 'H'},
];

let ELEMENT_DATA_GRADO: grado[] = [
  {id: 1, name: '1ro', idProfesor: 1}, 
  {id: 2, name: '2do', idProfesor: 2},
  {id: 3, name: '3ro', idProfesor: 3},
  {id: 4, name: '4to', idProfesor: 4},
];

let ELEMENT_DATA_ALUMNO_GRADO: AlumnoGrado[] = [
  {id: 1, idAlumno: 1, idGrado: 1, seccion: "A"}, 
  {id: 2, idAlumno: 2, idGrado: 2, seccion: "B"},
  {id: 3, idAlumno: 3, idGrado: 3, seccion: "C"},
  {id: 4, idAlumno: 4, idGrado: 4, seccion: "D"},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  idCounter = 4;

  ngOnInit(): void {
    
  }
 
  title = 'crudColegio';
  displayedColumns: string[] = ['id', 'name', 'lastname', 'genre' , 'dob', 'delete'];
  displayedColumnsProfesor: string[] = ['id', 'name', 'lastname', 'genre', 'delete'];
  dataSource = ELEMENT_DATA;
  dataSourceProfesor = ELEMENT_DATA_PROFESOR;

  constructor(public dialog: MatDialog) {}

 
 

  openDialog(id?:number): void {
    if (id) {
      let name = this.dataSource[id-1].name;
      let lastname = this.dataSource[id-1].lastname;
      let genre = this.dataSource[id-1].genre;
      let dob = this.dataSource[id-1].dob;

      const dialogRef = this.dialog.open(AddAlumnoComponent, {
        width: '250px',
        data: {id: id , name: name ,lastname: lastname, genre: genre, dob: dob}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        this.updateValue(result);
        this.delete(result.id+11);
      });
    } else {
    const dialogRef = this.dialog.open(AddAlumnoComponent, {
      width: '250px',
      data: {id: this.idCounter+1 , name: "" ,lastname: "", genre: "", dob: new Date()}
    });

    dialogRef.afterClosed().subscribe(result => {
    
      this.addValue(result);
      this.idCounter++;
      this.delete(result.id+1);
    });
  }
  }

  delete(id: number) {
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != id;
    });
    
  }
  
  addValue(value: Alumno) {
    this.dataSource.push(value);
    console.log(this.dataSource);
    
  }

  updateValue(value: Alumno) {
    this.dataSource[value.id-1] = value;
  }


  openDialog2(id?:number): void {
    if (id) {
      let name = this.dataSourceProfesor[id-1].name;
      let lastname = this.dataSourceProfesor[id-1].lastname;
      let genre = this.dataSourceProfesor[id-1].genre;

      const dialogRef = this.dialog.open(AddAlumnoComponent, {
        width: '250px',
        data: {id: id , name: name ,lastname: lastname, genre: genre}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        this.updateValue2(result);
        this.delete2(result.id+11);
      });
    } else {
    const dialogRef = this.dialog.open(AddAlumnoComponent, {
      width: '250px',
      data: {id: this.idCounter+1 , name: "" ,lastname: "", genre: ""}
    });

    dialogRef.afterClosed().subscribe(result => {
    
      this.addValue2(result);
      this.idCounter++;
      this.delete2(result.id+1);
    });
  }
  }

  delete2(id: number) {
    this.dataSourceProfesor = this.dataSourceProfesor.filter((value,key)=>{
      return value.id != id;
    });
    
  }
  
  addValue2(value: Alumno) {
    this.dataSourceProfesor.push(value);
    console.log(this.dataSourceProfesor);
    
  }

  updateValue2(value: Alumno) {
    this.dataSourceProfesor[value.id-1] = value;
  }




}
