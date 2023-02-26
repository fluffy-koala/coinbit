import { Paragraph } from '@components';
import { withBox } from '@hocs';
import { theme } from '@styles';
import type { FC } from 'react';
import React from 'react';

import type { GreetingProps } from './Greeting.types';

const Greeting: FC<GreetingProps> = ({ subtitle, title }) => {
  return (
    <>
      <Paragraph
        color={theme.color.codGray}
        marginBottom="8px"
        textAlign="center"
        variant="headline-1"
      >
        {title}
      </Paragraph>
      <Paragraph
        color={theme.color.codGray}
        textAlign="center"
        variant="body-2"
      >
        {subtitle}
      </Paragraph>
    </>
  );
};

export default withBox(Greeting);
