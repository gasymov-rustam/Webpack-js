// eslint-disable-next-line import/no-anonymous-default-export
// import { StoreDecorator } from '../../shared/utils';
import { Decrement } from './Decrement';

export default {
  title: 'shared/Decrement',
  component: Decrement,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = {
  // example props
  title: 'Title lorem ipsun',
  // text: 'Description Description Description Description',
};

// Primary.decorators = [StoreDecorator()];
