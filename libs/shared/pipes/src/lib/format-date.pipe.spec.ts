import { async, TestBed } from '@angular/core/testing';
import { FormatDatePipe } from './format-date.pipe';

describe('should format a date like mm/dd/yyyy', () => {
    let pipe: FormatDatePipe;

    beforeEach(() => {
        pipe = new FormatDatePipe();
    })

    it('then it should return a valid string with the format', () => {
        const date = '2012-01-01T00:00:00.000Z';
        expect(pipe.transform(date)).toBe('12/31/2011');
    })

    it('then it should return an undefined value', () => {
        expect(pipe.transform()).toBe(undefined);
    })
})
