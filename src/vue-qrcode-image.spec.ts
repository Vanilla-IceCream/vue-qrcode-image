import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import Basic from './fixtures/Basic.vue';
import Size from './fixtures/Size.vue';
import Margin from './fixtures/Margin.vue';

test('Basic', async () => {
  const wrapper = mount(Basic, {});
  expect(wrapper.html()).toMatchSnapshot();
});

test('Size', () => {
  const wrapper = mount(Size, {});
  expect(wrapper.html()).toMatchSnapshot();
});

test('Margin', () => {
  const wrapper = mount(Margin, {});
  expect(wrapper.html()).toMatchSnapshot();
});
