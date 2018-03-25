import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, CheckBox } from 'react-native';
import { Constants } from 'expo';

export default class Inputs extends Component {
  state = {
    explodes: true
  }

  clean = () => {
    this.setState({
      roll: '',
      keep: ''
    })
  }
  
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Roll"
            onChangeText={(text) => this.setState({roll: text})}
            value={this.state.roll}
          />
          <Text style={styles.paragraph}>
            K
          </Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Keep"
            onChangeText={(text) => this.setState({keep: text})}
            value={this.state.keep}
          />
          <CheckBox
            placeholder="Keep"
            onValueChange={(text) => this.setState({explodes: text})}
            value={this.state.explodes}
          />
          <Text style={styles.paragraph}>
            Explodes
          </Text>
        </View>
        <Button
          onPress={() => this.props.rollDices(this.state.roll, this.state.keep, this.state.explodes, this.clean)}
          title="Roll"
          color="#841584"
          accessibilityLabel="Roll dices"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
  input: {
    height: 40,
    padding: 5,
    width: 60,
    fontSize: 20,
    textAlign: 'center'
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  wrapper: {
    marginBottom: 15
  }
});
