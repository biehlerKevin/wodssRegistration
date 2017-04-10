import { Component } from '@angular/core';
import { TranslateService } from '../../shared/translation/translate.service';
import { Seminar } from '../../core/models/seminar.model';

@Component({
  selector: 'seminar-create',
  templateUrl: './seminar-create.component.html',
  styleUrls: ['./seminar-create.component.css']
})
export class SeminarCreateComponent {


    constructor(private _translate: TranslateService) {
    }

}
