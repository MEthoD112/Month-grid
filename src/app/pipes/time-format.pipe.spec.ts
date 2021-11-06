import { TimeFormatPipe } from './time-format.pipe';

describe('TimeFormatPipe', () => {
  let pipe: TimeFormatPipe;
  const mockValue_1 = 1636202451414;
  const mockValue_2 = 1636164502000;
  beforeEach(() => {
    pipe = new TimeFormatPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('create correctly transform date', () => {
    const transformedDate_1 = pipe.transform(mockValue_1);
    const transformedDate_2 = pipe.transform(mockValue_2);
    expect(transformedDate_1).toEqual("12:40");
    expect(transformedDate_2).toEqual("02:08");
  });
});
