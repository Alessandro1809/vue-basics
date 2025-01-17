import ChatMessages from '@/components/chat/ChatMessages.vue';
import type { ChatMessage } from '@/interfaces/chatMessageInterface';
import { mount } from '@vue/test-utils';
import { describe, expect, test, vi } from 'vitest';

const messages: ChatMessage[] = [
  {
    id: 1,
    message: 'Hola',
    itsMine: true,
  },
  {
    id: 2,
    message: 'Mundo',
    itsMine: false,
    image: 'http://hola-mundo.jpg',
  },
];

describe('chatMessages', () => {
  const wrapper = mount(ChatMessages, {
    props: { messages },
  });
  test('renders chat messages correctly', () => {
    const chatBubbles = wrapper.findAllComponents({ name: 'ChatBubble' });
    expect(chatBubbles.length).toBe(messages.length);
  });

  test('Should scrolls down after new message', async () => {
    //estimulo
    //se debe detectar cuando se envia n nuevo mensaje
    const scrolltoMock = vi.fn();

    const chatRef = wrapper.vm.$refs.chatRef as HTMLDivElement;

    chatRef.scrollTo = scrolltoMock;

    await wrapper.setProps({
      messages: [...messages, { id: 3, message: 'Hey', itsMine: true }],
    });

    await new Promise((r) => setTimeout(r, 400));

    expect(scrolltoMock).toHaveBeenCalledTimes(1);
    expect(scrolltoMock).toHaveBeenCalledWith({
      behavior: 'smooth',
      top: expect.any(Number),
    });
  });
});
