import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Score } from './score';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [Score],
  bootstrap: [AppComponent]
})
export class AppModule { }
