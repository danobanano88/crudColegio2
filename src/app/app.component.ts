import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  id: number;
  lastname: string;
  genre: string;
  //add short date type
  dob: Date

}

let ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Daniel', lastname: "Prieto Huguenin", genre: 'H', dob: new Date('1998-11-18')}, 
  {id: 2, name: 'Juan', lastname: "Perez", genre: 'H', dob: new Date('1998-11-18')},
  {id: 3, name: 'Maria', lastname: "Perez", genre: 'M', dob: new Date('1998-11-18')},
  {id: 4, name: 'Pedro', lastname: "Perez", genre: 'H', dob: new Date('1998-11-18')},
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudColegio';
  displayedColumns: string[] = ['id', 'name', 'lastname', 'genre' , 'dob', 'delete'];
  dataSource = ELEMENT_DATA;

  delete(id: number) {
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != id;
    });
  }
}
