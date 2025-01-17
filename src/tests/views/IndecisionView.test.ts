import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import IndecisionView from '@/views/IndecisionView.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

const mockChatMessages = {
  template: '<div data-test-id="mock-messages">Mock of chatMessages<div/>',
};

describe('<IndecisionView/>', () => {
  const wrapper = mount(IndecisionView);

  it('Should render the component ChatMessages', () => {
    expect(wrapper.html()).toMatchSnapshot();

    expect(wrapper.findComponent(ChatMessages).exists()).toBeTruthy();
    expect(wrapper.findComponent(MessageBox).exists()).toBeTruthy();
  });

  it('Calls on Message whrn sending a message', async () => {
    const wrapper = mount(IndecisionView, {
      global: {
        //manera de usar stubs, que son basicamente templates ficticios para pruebas de componentes
        stubs: {
          ChatMessages: mockChatMessages,
        },
      },
    });

    const messageBoxComponent = wrapper.findComponent(MessageBox);

    messageBoxComponent.vm.$emit('sendMessage', 'Hola mundo');

    await new Promise((r) => setTimeout(r, 200));

    expect(wrapper.html()).toMatchSnapshot();
  });
});
