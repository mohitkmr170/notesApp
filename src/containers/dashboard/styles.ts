import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 20,
  },
  innerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 12,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
  },
  inputText: {
    borderColor: 'red',
    borderWidth: 1,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  input: {
    width: '80%',
    fontSize: 24,
    lineHeight: 28,
  },
});
