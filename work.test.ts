// import { expect, it } from 'vitest';
import { expect, it } from '@jest/globals';
import { work } from './work';

it('should work', () => {
  expect(work()).toBe('work');
});
