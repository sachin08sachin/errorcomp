import { Component } from '@angular/core';
import { PopupbtnComponent } from './popupbtn/popupbtn.component';
import { ErrorComponent } from './error/error.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  imports: [PopupbtnComponent,CommonModule,MatDialogModule,MatCardModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taas';
}
