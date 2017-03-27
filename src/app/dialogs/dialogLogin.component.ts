import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
    selector: 'dialogLogin',
    template: `
      <h2>Blabla</h2>
      <button md-raised-button (click)="dialogRef.close()">Cancel</button>`
})
export class DialogLoginComponent {


    constructor(public dialogRef: MdDialogRef<any>) {
    }
}