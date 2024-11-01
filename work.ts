import { afterAll, afterEach, assert, beforeAll, beforeEach, describe, expect, it, suite, test, vi, vitest } from './module';

export function runAll() {
  afterAll();
  afterEach();
  assert();
  beforeAll();
  beforeEach();
  describe();
  expect();
  it();
  suite();
  test();
  vi();
  vitest();
}

export function work() {
 runAll();
  return 'work';
}
