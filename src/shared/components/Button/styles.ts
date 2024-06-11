import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';

export default StyleSheet.create({

  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 50,
  },

  buttonAdd: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: colors.purple.dark,
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    marginTop: 30
  },

  text: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.light,
  },

  buttonGenerateCaption: {
    width: 130,
    backgroundColor: colors.purple.dark,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },

  divider: {
    height: 1,
    width: '100%',
    backgroundColor: colors.light,
  },

  containerButtonsGeneration: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },

  textGeneration: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },

  buttonActivatedGeneration: {
    width: 100,
    padding: 5,
    borderRadius: 5,
    backgroundColor: colors.purple.light,
  },

  buttonDisabledGeneration: {
    width: 100,
    padding: 5,
    borderRadius: 5,
    backgroundColor: colors.gray,
  }
});