import { Component, Input } from '@angular/core';
import { Seminar } from '../core/models/seminar.model';
import { TranslateService } from '../translation/translate.service';


@Component({
  selector: 'seminarComponent',
  templateUrl: './seminar.component.html',
  styleUrls: ['./seminar.component.css']
})
export class SeminarComponent {

    @Input()
    private seminar: Seminar;
	private details: boolean;

    constructor(private _translate: TranslateService) {

    }

	showDetails(){
		this.details = true;
	}
	
	hideDetails(){
		this.details = false;
	}
	
	delete(){
	
	}
	
	modify(){
	
	}

}
