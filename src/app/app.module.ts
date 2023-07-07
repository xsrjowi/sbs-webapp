import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './dashboard/pages/mainpage/mainpage.component';
import { CalendarComponent } from './dashboard/components/calendar/calendar.component';
import { EventCardComponent } from './dashboard/components/event-card/event-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    CalendarComponent,
    EventCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
