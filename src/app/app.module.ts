import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { TimeFormatPipe } from './pipes/time-format.pipe';
import { ScrollingModule } from '@angular/cdk/scrolling';
@NgModule({
  declarations: [
    AppComponent,
    FilterPipePipe,
    TimeFormatPipe
  ],
    imports: [
      BrowserModule,
      ReactiveFormsModule,
      ScrollingModule
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}
