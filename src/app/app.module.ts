import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PiContainerComponent } from './components/pi-container/pi-container.component';
import { PositionIndicatorComponent } from './components/position-indicator/position-indicator.component';
import { FloorLabelComponent } from './components/floor-label/floor-label.component';
import { ArrowPlaceholderComponent } from './components/arrow-placeholder/arrow-placeholder.component';
import { GradientOverlayComponent } from './components/gradient-overlay/gradient-overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    PiContainerComponent,
    PositionIndicatorComponent,
    FloorLabelComponent,
    ArrowPlaceholderComponent,
    GradientOverlayComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
