import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MatSlideToggleModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatDatepickerModule,
    MatInputModule,
    MatDialogModule,
    MatNativeDateModule,
    MatButtonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatSlideToggleModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
