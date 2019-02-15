import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-hexmap',
    templateUrl: './hexmap.component.html',
    styleUrls: ['./hexmap.component.scss']
})
export class HexmapComponent implements OnInit {

    states = [
        'AL', 'AR', 'CA', 'CT', 'DE',
        'FL', 'HI', 'ID', 'IA', 'MA',
        'MS', 'NV', 'NH', 'NJ', 'OK',
        'PA', 'RI', 'SC', 'VA', 'WA',
        'WV', 'WI'
    ];

    constructor() {
    }

    ngOnInit() {
    }

    hasStandards(stateId) {
        if (this.states.indexOf(stateId) >= 0) {
            return true;
        }
        return false;
    }
}
