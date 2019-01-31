/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { View } from 'react-native';
import ForecastPage from './src/components/ForecastPage';

class App extends Component {
  render() {
    return(
      <ForecastPage />
    )
  }
}

export default App;