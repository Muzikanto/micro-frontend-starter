import Example from './Example';
import { ComponentMeta } from '@storybook/react';

const DefaultExample: ComponentMeta<typeof Example> = {
  title: 'Example',
  component: Example,
  parameters: {},
  argTypes: {},
};

export const Basic = Example.bind({});
Basic.args = {};

export default DefaultExample;
