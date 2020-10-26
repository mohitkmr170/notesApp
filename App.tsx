import React from 'react';
import {StyleSheet, View, StatusBar, Text} from 'react-native';
import {Provider} from 'react-redux';
import {store, persistor} from './src/store/configStore';
import {PersistGate} from 'redux-persist/integration/react';
import SafeAreaView from 'react-native-safe-area-view';
import AppNavigator from './src/navigations/appFlow';

interface IProps {}

interface IState {}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{flex: 1}}>
              <View style={styles.appContainer}>
                <View style={styles.mainContainer}>
                  <AppNavigator />
                </View>
              </View>
            </SafeAreaView>
          </PersistGate>
        </Provider>
      </>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
  },
});

export default App;
