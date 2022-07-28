import { FloorLabelComponent } from './../floor-label/floor-label.component';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, interval, take, tap, timer } from 'rxjs';

const outTopCSS = 'out-top'
const inBottomCSS = 'in-bottom'
const emptyCSS = ''
type PIClass = typeof emptyCSS | typeof outTopCSS | typeof inBottomCSS

@Component({
    selector: 'app-position-indicator',
    templateUrl: './position-indicator.component.html',
    styleUrls: ['./position-indicator.component.scss']
})
export class PositionIndicatorComponent implements OnInit, AfterViewInit {

    @ViewChild('upperLabel') upperLabel!: FloorLabelComponent
    @ViewChild('lowerLabel') lowerLabel!: FloorLabelComponent

    public currentFloor: string = '10'
    public nextFloor: string = '9'

    public upperLabelClass: PIClass = emptyCSS
    public lowerLabelClass: PIClass = emptyCSS

    constructor() { }

    ngOnInit(): void {
        from(interval(2500))
            .pipe(
                tap(() => this.moveDownOneFloor()),
                take(9)
            ).subscribe()
    }

    ngAfterViewInit(): void {
        console.log('this.upperLabel:', this.upperLabel)
        console.log('this.lowerLabel:', this.lowerLabel)
    }

    public moveDownOneFloor() {

        // apply the CSS to move the containers
        this.upperLabelClass = 'out-top'
        this.lowerLabelClass = 'in-bottom'

        // after two seconds
        from(timer(2000))
            .pipe(
                tap(() => {

                    // swap the values
                    this.upperLabel.label = this.decrementString(this.upperLabel.label)
                    this.lowerLabel.label = this.decrementString(this.lowerLabel.label)

                    // clear the classes
                    this.upperLabelClass = ''
                    this.lowerLabelClass = ''

                }),
                take(1)
            )
            .subscribe()
    }

    private incrementString = (label: string): string =>
        (parseInt(label) + 1).toString()

    private decrementString = (label: string): string =>
        (parseInt(label) - 1).toString()

}
