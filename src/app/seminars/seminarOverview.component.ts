import { Component } from '@angular/core';
import { TranslateService } from '../shared/translation/translate.service';
import { SeminarComponent } from './seminar.component';
import { Seminar } from '../core/models/seminar.model';

@Component({
  selector: 'seminars',
  templateUrl: './seminarOverview.component.html',
  styleUrls: ['./seminarOverview.component.css']
})
export class SeminarOverviewComponent {

    seminars: Seminar[] = [{
        date: new Date(),
        duration: 45,
        room: "6.2H07",
        speaker: "Max Musermann",
        title: "Seminar Nr.1",
        abstractSummary: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        slides: null,
    },
    {
    date: new Date(),
    duration: 30,
    room: "6.1H05",
    speaker: "Franz Musermann",
    title: "Seminar Nr.2",
    abstractSummary: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    slides: null,
}];


    //Subscribe service to get all seminars
    constructor(private _translate: TranslateService) {
    }

}
