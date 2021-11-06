import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";
import { FilterPipePipe } from "./pipes/filter-pipe.pipe";
import { TimeFormatPipe } from "./pipes/time-format.pipe";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { DataInterface} from "./interfaces/data.interface";
import { milliSecondsInMinute} from "./constants/app.constants";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, FilterPipePipe, TimeFormatPipe],
      imports: [ReactiveFormsModule, ScrollingModule]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
    expect(fixture).toMatchSnapshot();
  });

  it(`should invoke initGridData on init'`, () => {
    const initGridDataMock = jest.fn();
    (component as any).initGridData = initGridDataMock;
    component.ngOnInit();
    expect(initGridDataMock).toHaveBeenCalledTimes(1);
  });

  it('should create a grid data', () => {
    const gridData = (component as any).initGridData();
    expect(gridData).toBeInstanceOf(Array);
    expect(gridData.length).toBeGreaterThanOrEqual(8064); // min count of items, for shorter month - February
    gridData.forEach((item: DataInterface, index: number) => {
      expect(item).toHaveProperty('time');
      expect(item).toHaveProperty('value');
      expect(item.time).toEqual(index * milliSecondsInMinute * 5);
    })
  });
});
