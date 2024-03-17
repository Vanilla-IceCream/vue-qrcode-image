import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import Page from '../../examples/basic/src/routes/(home)/+page.vue';

test('Page', async () => {
  const wrapper = mount(Page, {});
  expect(wrapper.html()).toMatchSnapshot();
});
