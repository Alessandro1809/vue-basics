import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import MessageBox from '@/components/chat/MessageBox.vue';

describe('MessageBox', () => {
  it('should render the input and button correctly', () => {
    const wrapper = mount(MessageBox);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
