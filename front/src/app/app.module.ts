import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { AboutComponent } from './about/about.component';
import { SliderComponent } from './slider/slider.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { GetComponent } from './get/get.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavigationbarComponent,
    AboutComponent,
    SliderComponent,
    ServicesComponent,
    TeamComponent,
    GetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
