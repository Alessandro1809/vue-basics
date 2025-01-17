import { useChat } from '@/composables/useChat';
import { json } from 'stream/consumers';
import { describe, test, expect, vi } from 'vitest';

describe('useChat composable', () => {
  test('add message correctly when onMessage is called', async () => {
    const text = 'Hola mundo';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    expect(messages.value.length).toBe(1);
    expect(messages.value[0].itsMine).toBeTruthy();
    expect(messages.value[0].message).toBe(text);
  });

  test('do nothing if text is empty', async () => {
    const text = '';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    expect(messages.value.length).toBe(0);
  });

  test('gets response correctly when message ends with ?', async () => {
    const text = 'Quieres tomar Cafe?';
    const { messages, onMessage } = useChat();

    await onMessage(text);
    await new Promise((r) => setTimeout(r, 2000));

    const [myMessage, herMessage] = messages.value;

    expect(messages.value.length).toBe(2);
    expect(herMessage).toEqual({
      id: expect.any(Number),
      image: expect.any(String),
      itsMine: false,
      message: expect.any(String),
    });
    expect(myMessage).toEqual({
      id: expect.any(Number),
      itsMine: true,
      message: text,
    });
  });

  test('mock response - fetch API', async () => {
    const mockResponse = { answer: 'yes', image: 'http://Hola-mundo.jpg' };

    (window.fetch as any) = vi.fn(async () => ({
      json: async () => mockResponse,
    }));

    const text = 'Quieres tomar Cafe?';
    const { messages, onMessage } = useChat();

    await onMessage(text);
    await new Promise((r) => setTimeout(r, 1600));

    const [, herMessage] = messages.value;

    expect(herMessage).toEqual({
      id: expect.any(Number),
      image: mockResponse.image,
      itsMine: false,
      message: mockResponse.answer,
    });
  });
});
