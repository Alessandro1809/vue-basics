import { describe, expect, it } from 'vitest';
import ChatBubble from '@/components/chat/ChatBubble.vue';
import { mount } from '@vue/test-utils';

describe('ChatBubble', () => {
  it('should render the message correctly', () => {
    // Test implementation
    const message = 'Hello, World!';
    const wrapper = mount(ChatBubble, {
      props: { message, itsMine: true },
    });

    expect(wrapper.find('.bg-green-200').exists()).toBe(true);
    expect(wrapper.find('.bg-green-200').exists()).toBeTruthy();
    expect(wrapper.find('.bg-green-200').text()).contain('Hello, World!');
    expect(wrapper.find('.bg-gray-300').exists()).toBeFalsy();
  });

  it('renders recived message correctly', () => {
    const message = 'Hola?';
    const wrapper = mount(ChatBubble, {
      props: { message, itsMine: false },
    });

    expect(wrapper.find('.bg-gray-300').exists()).toBeTruthy();
    expect(wrapper.find('.bg-gray-300').text()).toContain('Hola?');
    expect(wrapper.find('img').exists()).toBeFalsy();
    expect(wrapper.find('.bg-green-200').exists()).toBeFalsy();
  });

  it('renders recived message correctly with image', () => {
    const message = 'Hola?';
    const image = 'example.jpg';
    const wrapper = mount(ChatBubble, {
      props: { message, itsMine: false, image },
    });

    expect(wrapper.find('.bg-gray-300').exists()).toBeTruthy();
    expect(wrapper.find('.bg-gray-300').text()).toContain('Hola?');
    expect(wrapper.find('img').exists()).toBeTruthy();
    expect(wrapper.find('img').attributes('src')).toContain('example.jpg');
    expect(wrapper.find('.bg-green-200').exists()).toBeFalsy();
  });
});
