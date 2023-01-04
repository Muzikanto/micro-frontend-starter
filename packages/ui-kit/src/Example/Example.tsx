import * as React from 'react';
import styled from '@emotion/styled';

export type ExampleProps = React.HtmlHTMLAttributes<HTMLParagraphElement>;

const PREFIX = 'Example';
const classes = { root: `${PREFIX}-root` };

const Root = styled('p')({
  [`&.${classes.root}`]: {
    color: 'red',
  },
});

const Example: React.FC = (props: ExampleProps) => {
  return <Root {...props}>example component</Root>;
};

export default Example;
