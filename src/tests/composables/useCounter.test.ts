import { useCounter } from '@/composables/useCounter';

import { expect, describe, it } from 'vitest';

describe('useCounter', () => {
  it('initializes copunter with provide initial value', () => {
    // Test implementation

    const initialValue = 10;
    const { counter } = useCounter(initialValue);

    expect(counter.value).toBe(initialValue);
  });
});
