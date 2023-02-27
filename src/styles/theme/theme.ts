import type { DefaultTheme } from 'styled-components/native';

const color: DefaultTheme['color'] = {
  alto: '#D9D9D9',
  casal: '#326164',
  codGray: '#151515',
  gray: '#8A8A8A',
  outerSpace: '#303E3C',
  pampas: '#EFECE6',
  roman: '#DA5560',
  sisal: '#D9D2C5',
  sunsetOrange: '#FF4747',
  white: '#FFFFFF',
};

const theme: DefaultTheme = {
  color,
  variant: {
    button: {
      primary: {
        alignItems: 'center',
        backgroundColor: color.casal,
        borderRadius: '2px',
        justifyContent: 'center',
        paddingX: '20px',
        paddingY: '12px',
      },
      secondary: {
        alignItems: 'center',
        backgroundColor: color.sisal,
        borderRadius: '2px',
        justifyContent: 'center',
        paddingX: '20px',
        paddingY: '12px',
      },
    },
    typography: {
      'body-1': {
        fontFamily: 'ProximaNova-Regular',
        fontSize: '16px',
        lineHeight: '24px',
      },
      'body-2': {
        fontFamily: 'ProximaNova-Regular',
        fontSize: '14px',
        lineHeight: '21px',
      },
      'body-3': {
        fontFamily: 'ProximaNova-Regular',
        fontSize: '12px',
        lineHeight: '18px',
      },
      'headline-1': {
        fontFamily: 'EBGaramond-Medium',
        fontSize: '40px',
        lineHeight: '50px',
      },
      'headline-2': {
        fontFamily: 'EBGaramond-Medium',
        fontSize: '34px',
        lineHeight: '40px',
      },
      'headline-3': {
        fontFamily: 'EBGaramond-Medium',
        fontSize: '20px',
        lineHeight: '25px',
      },
      'title-1': {
        fontFamily: 'ProximaNova-SemiBold',
        fontSize: '20px',
        lineHeight: '24px',
      },
      'title-2': {
        fontFamily: 'ProximaNova-SemiBold',
        fontSize: '18px',
        lineHeight: '22px',
      },
      'title-3': {
        fontFamily: 'ProximaNova-SemiBold',
        fontSize: '16px',
        lineHeight: '24px',
      },
    },
  },
};

export default theme;
