import { FilterPipePipe } from './filter-pipe.pipe';
import {DataInterface} from "../interfaces/data.interface";

describe('FilterPipePipe', () => {
  let pipe: FilterPipePipe;
  const mockTime = 30;
  const mockData: DataInterface[]  = [
    {
      time: 10,
      value: 'Mock data 1'
    },
    {
      time: 20,
      value: 'Mock data 2'
    },
    {
      time: 30,
      value: 'Mock data 3'
    }
  ];
  beforeEach(() => {
    pipe = new FilterPipePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('create correctly transform date', () => {
    const transformedDate = pipe.transform(mockData, mockTime);
    expect(transformedDate).toEqual([{time: 30, value: 'Mock data 3'}]);
  });
});
