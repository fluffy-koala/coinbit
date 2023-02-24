import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    variant: {
      typography: {
        'body-1': StylesProps;
        'body-2': StylesProps;
        'body-3': StylesProps;
        'headline-1': StylesProps;
        'headline-2': StylesProps;
        'headline-3': StylesProps;
        'title-1': StylesProps;
        'title-2': StylesProps;
        'title-3': StylesProps;
      };
    };
  }
}
