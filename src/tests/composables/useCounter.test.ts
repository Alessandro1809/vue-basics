import { useCounter } from '@/composables/useCounter';

import { expect, describe, it } from 'vitest';

describe('useCounter', () => {
  it('initializes copunter with default value', () => {
    // Test implementation

    const { counter, squareCounter } = useCounter();

    expect(counter.value).toBe(5);
    expect(squareCounter.value).toBe(25);
  });

  it('initializes copunter with provide initial value', () => {
    // Test implementation

    const initialValue = 10;
    const { counter, squareCounter } = useCounter(initialValue);

    expect(counter.value).toBe(initialValue);
    expect(squareCounter.value).toBe(initialValue * initialValue);
  });

  it('increment counter correctly', () => {
    //use the subject of testing by default
    const { counter, squareCounter } = useCounter();
    counter.value++;

    expect(counter.value).toBe(6);
    expect(squareCounter.value).toBe(36);
  });
});
