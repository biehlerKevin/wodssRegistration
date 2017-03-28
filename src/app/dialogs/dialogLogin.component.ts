import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
    selector: 'dialogLogin',
    templateUrl: './dialogLogin.component.html',
    styleUrls: ['./dialogLogin.component.css']
})
export class DialogLoginComponent {


    constructor(public dialogRef: MdDialogRef<any>) {
    }
}