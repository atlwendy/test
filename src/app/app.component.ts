import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { TsValidatorsService } from '@terminus/ui-validators';
import {
  endOfDay,
  startOfDay,
  startOfMonth,
  subDays,
  subMonths,
} from 'date-fns';

import {
  TsCohortDateRangeChanged,
  TsDateCohort,
} from '@terminus/ui-cohort-date-range';

const currentDate: Date = new Date();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';

  public cohorts: TsDateCohort[] = [
    {
      display: 'Last 90 days',
      range: {
        start: startOfDay(subDays(new Date(), 90)),
        end: currentDate,
      },
    },
    {
      display: 'Last full month',
      range: {
        start: startOfDay(subMonths(startOfMonth(currentDate), 1)),
        end: endOfDay(subDays(startOfMonth(currentDate), 1)),
      },
      active: true,
    },
  ];
}
