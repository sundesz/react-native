import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#868687',
    primary: '#0366d6',
    mainBackground: '#e1e4e8',
    appBarBackground: '#24292e',
    error: '#d73a4a',
  },
  fontSizes: {
    body: 14,
    subheading: 20,
    heading: 26,
    heading1: 22,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;
