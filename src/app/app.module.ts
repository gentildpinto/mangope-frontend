import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapComponent } from './pages/map/map.component';
import { LandTooltipDirective } from './directives/land-tooltip.directive';
import { CountyHoverDirective } from './directives/county-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    CountyHoverDirective,
    // LandTooltipDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
