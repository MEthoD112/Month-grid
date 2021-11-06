import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from "@angular/forms";
import { milliSecondsInMinute, timeIntervalValues } from "./constants/app.constants";
import { DataInterface} from "./interfaces/data.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  public gridData: DataInterface[] = [];
  public timeIntervalValues = timeIntervalValues;
  public form = this.formBuilder.group({
    timeInterval: [this.timeIntervalValues[0].time, [Validators.required]],
  });

  public get timeInterval(): AbstractControl {
    return <AbstractControl>this.form.get('timeInterval');
  }

  constructor(private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.gridData = this.initGridData();
  }

  private initGridData(): DataInterface[] {
    const date = new Date()
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getTime();
    const lastDay = new Date(year, month + 1, 1).getTime();
    const elementsInArray = (lastDay - firstDay) / (milliSecondsInMinute * 5);
    return Array.from({ length: elementsInArray }).map((res, index) => {
      const time = index * milliSecondsInMinute * 5;
      return {
        time,
        value: 'Detail ' + (index + 1)
      }
    })
  }
}

