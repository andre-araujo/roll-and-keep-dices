import React from 'react';
import { StyleSheet, Text, View, ToastAndroid } from 'react-native';
import History from './components/History';
import Inputs from './components/Inputs';
import { Constants } from 'expo';
import rollAndKeep from './lib/rollAndKeep';

export default class App extends React.Component {
  state = {
    history: []
  }

  rollDices = (roll, keep, explodes, callback) => {
    if(!roll || !keep) {
      ToastAndroid.show('Missing dice values', ToastAndroid.SHORT);
      return;
    }

    callback && callback();

    const result = rollAndKeep(roll, keep <= roll ? keep : roll, explodes);
    const history = [...this.state.history];
    history.unshift({ key: new Date().toString(), result })

    this.setState({
      history
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Inputs rollDices={this.rollDices} />
        <History data={this.state.history} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
