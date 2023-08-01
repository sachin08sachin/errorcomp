// import { Component } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { ErrorComponent } from '../error/error.component'; // Update the path to the popup-message component

// @Component({
//   selector: 'app-popupbtn',
//   templateUrl: './popupbtn.component.html',
//   styleUrls: ['./popupbtn.component.css']
// })
// export class PopupbtnComponent {
//   constructor(public dialog: MatDialog) {

//   }

//   openPopup(): void {
//     this.dialog.open( ErrorComponent, {
//       data: {
//         errorTitle:  'Something went wrong',
//         errorMessage:  'Sorry, something went wrong'
//       },
//       width: '400px', // Adjust the width as needed
//       panelClass: 'custom-dialog-container' // Add a custom class for the blurred background
//     });
//   }
// }
import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

import { ErrorComponent } from '../error/error.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports:[ErrorComponent,CommonModule, MatDialogModule, MatCardModule],
  selector: 'app-popupbtn',
  templateUrl: './popupbtn.component.html',
  styleUrls: ['./popupbtn.component.css']
})
export class PopupbtnComponent {
  constructor(private dialog: MatDialog) {}

  openError() {
    const dialogRef = this.dialog.open(ErrorComponent, {
      data: {
        errorTitle: 'Something went wrong', // Dynamic error title
        errorMessage: 'Sorry, something went wrong. Please try again.', // Dynamic error message
      },
    });
    
    dialogRef.afterClosed().subscribe((_result: any) => {
      console.log('The dialog was closed');
      
    });
  }
}

