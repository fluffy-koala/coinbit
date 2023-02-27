import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    color: {
      alto: '#D9D9D9';
      casal: '#326164';
      codGray: '#151515';
      gray: '#8A8A8A';
      outerSpace: '#303E3C';
      pampas: '#EFECE6';
      roman: '#DA5560';
      sisal: '#D9D2C5';
      sunsetOrange: '#FF4747';
      white: '#FFFFFF';
    };
    variant: {
      button: {
        primary: StylesProps;
        secondary: StylesProps;
      };
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
