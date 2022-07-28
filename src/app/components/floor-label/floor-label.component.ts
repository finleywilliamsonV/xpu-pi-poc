import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-floor-label',
    templateUrl: './floor-label.component.html',
    styleUrls: ['./floor-label.component.scss']
})
export class FloorLabelComponent implements OnInit {

    @Input() label: string = '0'

    constructor() { }

    ngOnInit(): void {
    }

}
