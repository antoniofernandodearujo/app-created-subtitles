import { StyleSheet } from 'react-native';

import colors from '../../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: colors.purple.medio,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    color: colors.light,
  }
});