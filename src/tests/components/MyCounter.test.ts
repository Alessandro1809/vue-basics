import { describe, expect, test, it } from 'vitest';
import MyCounter from '../../components/MyCounter.vue';
import { mount } from '@vue/test-utils';

describe('MyCounter', () => {
  test('should increment the counter', () => {});

  test('should match the snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 5,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Render the counter value correctly', () => {
    //preparar la prueba
    const value = 5;
    //estimular el componente
    const wrapper = mount(MyCounter, {
      props: {
        value: value,
      },
    });
    const [counterLabel, squareLabel] = wrapper.findAll('h3');
    //comprobar el resultado
    expect(wrapper.find('h3').text()).toContain(`Counter : ${value}`);
    expect(wrapper.find('[data-test-id="square-test-label"]').text()).toContain(
      `Square : ${value * value}`,
    );

    expect(counterLabel.text()).toContain(`Counter : ${value}`);
    expect(squareLabel.text()).toContain(`Square : ${value * value}`);
  });

  test('increments the counter value when the buttonn is clicked', async () => {
    //preparar la prueba
    const value = 5;
    //estimular el componente
    const wrapper = mount(MyCounter, {
      props: {
        value: value,
      },
    });
    const [counterLabel, squareLabel] = wrapper.findAll('h3');

    const btnIncremment = wrapper.find('button');
    await btnIncremment.trigger('click');

    expect(counterLabel.text()).toContain(`Counter : ${value + 1}`);
    expect(squareLabel.text()).toContain(`Square : ${(value + 1) * (value + 1)}`);
  });

  test('decrements the counter value when the buttonn is clicked', async () => {
    //preparar la prueba
    const value = 5;
    //estimular el componente
    const wrapper = mount(MyCounter, {
      props: {
        value: value,
      },
    });
    const [counterLabel, squareLabel] = wrapper.findAll('h3');

    const btnDecrement = wrapper.findAll('button')[1];

    await btnDecrement.trigger('click');
    await btnDecrement.trigger('click');
    expect(counterLabel.text()).toContain(`Counter : ${value - 2}`);
    expect(squareLabel.text()).toContain(`Square : ${(value - 2) * (value - 2)}`);
  });
});
