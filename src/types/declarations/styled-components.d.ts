import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    color: {
      casal: '#326164';
      codGray: '#151515';
      outerSpace: '#303E3C';
      pampas: '#EFECE6';
      sisal: '#D9D2C5';
      white: '#FFFFFF';
      alto: '#D9D9D9';
      sunsetOrange: '#FF4747';
      gray: '#8A8A8A';
    };
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
      button: {
        primary: StylesProps;
        secondary: StylesProps;
      };
    };
  }
}
