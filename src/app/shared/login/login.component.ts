import { Component, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { DialogLoginComponent } from '../../dialogs/dialogLogin.component';
import { TranslateService } from '../../shared/translation/translate.service';

@Component({
    selector: 'sd-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {

    email: string;
    password: string;

    showError: boolean = false;

    dialogRef: MdDialogRef<any>;

    constructor(/**private authService: AuthenticationService, **/
        public dialog: MdDialog,
        public viewContainerRef: ViewContainerRef,
        private _translate: TranslateService) {
    }


    login(): void {
    }

    openDialog() {
        let config = new MdDialogConfig();
        config.viewContainerRef = this.viewContainerRef;
        this.dialogRef = this.dialog.open(DialogLoginComponent, config);

        this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
        });
    }

}