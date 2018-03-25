import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList } from 'react-native';

export default class History extends Component {  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>History</Text>
        </View>
        <FlatList
          data={this.props.data}
          extraData={this.state}
          keyExtractor={item => item.key}
          renderItem={({item, index}) => (
            <Text style={[styles.paragraph, index === 0 && { fontSize: 30, margin: 5, fontWeight: 'bold' }]}>
              {item.result}
            </Text>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 80,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%'
  },
  titleContainer: {
    borderTopWidth: 1,
    borderTopColor: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    width: '100%',
    padding: 15
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
    color: '#34495e',
  },
  contentContainer: {
    flex: 1,
    width: '100%'
  }
});
