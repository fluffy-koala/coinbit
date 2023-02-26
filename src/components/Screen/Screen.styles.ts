import { theme } from '@styles';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  keyboardAvoidingViewContainer: {
    flex: 1,
  },
  scrollViewContainer: {
    backgroundColor: theme.color.white,
    flex: 1,
  },
  scrollViewContentContainer: {
    flexGrow: 1,
    paddingBottom: 16,
    paddingHorizontal: 24,
    paddingTop: 52,
  },
});
