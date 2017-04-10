import { Component } from '@angular/core';
import { TranslateService } from '../shared/translation/translate.service';

@Component({
  selector: 'usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent {


    constructor(private _translate: TranslateService) {
    }

}
