import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TsInputModule } from '@terminus/ui-input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TsCohortDateRangeModule } from '@terminus/ui-cohort-date-range';
import { TsDateRangeModule } from '@terminus/ui-date-range';
import { TsSelectionListModule } from '@terminus/ui-selection-list';
import { TsOptionModule } from '@terminus/ui-option';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    TsInputModule,
    TsCohortDateRangeModule,
    TsDateRangeModule,
    TsSelectionListModule,
    TsOptionModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
