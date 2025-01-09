import { describe, test } from 'vitest';
import { MyCounter } from '../../components/MyCounter.vue';
import { mount } from '@vue/test-utils';
describe('MyCounter', () => {
  test('should increment the counter', () => {});

  test('should match the snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 5,
      },
    });
    // expect(wrapper.html()).toMatchSnapshot();
  });
});
