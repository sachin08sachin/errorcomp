// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-error',
//   templateUrl: './error.component.html',
//   styleUrls: ['./error.component.css']
// })
// export class ErrorComponent {
//   // Implement any logic you need for Try Again and Cancel buttons
//   tryAgain() {
//     // Add your "try again" logic here
//   }

//   cancel() {
//     // Add your "cancel" logic here
//   }
// }
import { Component, Inject } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports:[ MatDialogModule, MatCardModule,CommonModule],
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  errorTitle: string; // Dynamic property for error title
  errorMessage: string; // Dynamic property for error message

  constructor(@Inject(MatDialogModule) public data: {errorTitle:string,errorMessage:string}) {
    this.errorTitle = data.errorTitle;
    this.errorMessage = data.errorMessage;
    console.log(this.errorTitle);
    
  }

  tryAgain() {
    // Add your "try again" logic here
  }

  cancel() {
    // Add your "cancel" logic here
  }
}

