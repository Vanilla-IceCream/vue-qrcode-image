import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import Basic from './fixtures/Basic.vue';
import Size from './fixtures/Size.vue';

test('Basic', async () => {
  const wrapper = mount(Basic, {});
  expect(wrapper.html()).toMatchSnapshot();
});

test('Size', () => {
  const wrapper = mount(Size, {});
  expect(wrapper.html()).toMatchSnapshot();
});
