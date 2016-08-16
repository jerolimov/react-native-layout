/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} = React;

import BorderLayoutExample1 from './BorderLayoutExample1';
import BorderLayoutExample2 from './BorderLayoutExample2';
import BorderLayoutExample3 from './BorderLayoutExample3';

var examples = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <ScrollView>
            <BorderLayoutExample1/>
            <BorderLayoutExample2/>
            <BorderLayoutExample3/>
        </ScrollView>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('examples', () => examples);
