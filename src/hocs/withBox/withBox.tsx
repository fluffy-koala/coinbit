import { Box } from '@components';
import type { ComponentType } from 'react';
import React from 'react';

import type { ComponentProps } from './withBox.types';

const withBox = <T extends unknown>(Component: ComponentType<T>) => {
  return (props: ComponentProps<T>) => {
    return (
      <Box {...props.box}>
        <Component {...props} />
      </Box>
    );
  };
};

export default withBox;
