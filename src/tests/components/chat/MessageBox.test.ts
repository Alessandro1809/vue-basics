import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import MessageBox from '@/components/chat/MessageBox.vue';

describe('MessageBox', () => {
  const wrapper = mount(MessageBox);
  it('should render the input and button correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();

    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button svg').exists()).toBe(true);
  });

  it('emmits sendMessage event when the button is clicked', async () => {
    const message = 'Hello world!';
    await wrapper.find('input[type="text"]').setValue(message);

    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('sendMessage')).toBeTruthy();
    expect((wrapper.vm as any).message).toBe('');
  });

  it('emmits sendMessage event when the button enter is pressed', async () => {
    const message = 'Hello world!';
    const input = wrapper.find('input');

    input.setValue(message);

    await input.trigger('Keypress.enter');
    expect(wrapper.emitted('sendMessage')).toBeTruthy();
  });

  it('does not emmit sendMessage event when the button is clicked and the input is empty', async () => {
    const wrapper = mount(MessageBox);
    const input = wrapper.find('input');

    await input.trigger('Keypress.enter');
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('sendMessage')).toBeFalsy();
  });
});
