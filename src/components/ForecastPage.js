import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import { LocationProvider } from '../providers/LocationProvider';
import { ConnectionProvider } from '../providers/ConnectionProvider';
import { HeaderSection, WeekForecastSection, Loader, colors } from './common';

class ForecastPage extends Component{
  constructor() {
    super();

    this.state ={
      showLoader: true,
      backgroundImage: require('./../assets/forest_sunny.png'),
      forecastBackgroundColor: colors.sunny,
      forecastToday:  {
        minTemp: '',
        currentTemp: '',
        maxTemp: '',
        description: ''
      },
      forecastDay1: {
        name: '',
        temp: '',
        icon: ''
      },
      forecastDay2:  {
        name: '',
        temp: '',
        icon: ''
      },
      forecastDay3:  {
        name: '',
        temp: '',
        icon: ''
      },
      forecastDay4:  {
        name: '',
        temp: '',
        icon: ''
      },
      forecastDay5:  {
        name: '',
        temp: '',
        icon: ''
      }
    };

    this.getLocation();
  }

  getLocation(){
    LocationProvider.getLocation((location => {
      if(location != undefined){
        let long = location.coords.longitude;
        let lat = location.coords.latitude;
        this.getCurrentForecast(lat, long);
      }
    }));
  }

  getCurrentForecast(lat, long){
    ConnectionProvider.getCurrentWeatherForecast(lat, long, (res) => {
      this.setCurrentForecast(res.currentForecast, () => {
        this.setWeekForecast(res.weekForeCast, () => {
          this.setForecastIcons(res.weekForeCast, () => {
            if(this.state.forecastToday.description == 'SUNNY') {
              this.setState({
                backgroundImage: require('./../assets/forest_sunny.png'),
                forecastBackgroundColor: colors.sunny
              });
            } else if(this.state.forecastToday.description == 'RAINY') {
              this.setState({
                backgroundImage: require('./../assets/forest_rainy.png'),
                forecastBackgroundColor: colors.rainy
              });
            } else if(this.state.forecastToday.description == 'CLOUDY') {
              this.setState({
                backgroundImage: require('./../assets/forest_cloudy.png'),
                forecastBackgroundColor: colors.cloudy
              });
            }
            console.log('done!');
            this.setState({ showLoader: false });
          });
        });
      });
    });
  }

  setCurrentForecast(currentForecast, callback) {
    this.state.forecastToday.description = this.setWeatherDescription(currentForecast.id);
    this.state.forecastToday.minTemp = currentForecast.min;
    this.state.forecastToday.currentTemp = currentForecast.current;
    this.state.forecastToday.maxTemp = currentForecast.max;
    callback();
  }

  setWeekForecast(weekForecast, callback) {
    this.state.forecastDay1 = {
      name: this.setDayOfWeek(weekForecast.res[0].date),
      temp: weekForecast.res[0].temp,
      icon: ''
    };
    this.state.forecastDay2 = {
      name: this.setDayOfWeek(weekForecast.res[1].date),
      temp: weekForecast.res[1].temp,
      icon: ''
    };
    this.state.forecastDay3 = {
      name: this.setDayOfWeek(weekForecast.res[2].date),
      temp: weekForecast.res[2].temp,
      icon: ''
    };
    this.state.forecastDay4 = {
      name: this.setDayOfWeek(weekForecast.res[3].date),
      temp: weekForecast.res[3].temp,
      icon: ''
    };
    this.state.forecastDay5 = {
      name: this.setDayOfWeek(weekForecast.res[4].date),
      temp: weekForecast.res[4].temp,
      icon: ''
    };
    callback();
  }

  setWeatherDescription(id) {
    if(id >= 200 || id<=531) {
      return 'RAINY';
    } else if(id >= 600 && id != 800 || id<=804 && id != 800) {
      return 'CLOUDY';
    } else {
      return 'SUNNY';
    }
  }

  setDayOfWeek(forecastDate) {
    var date = new Date(forecastDate);
    var day = date.getDay();

    console.log(date);

    if( day == 0){
      return 'Sunday'
    } else if( day == 1){
      return 'Monday'
    } else if( day == 2){
      return 'Tuesday'
    } else if( day == 3){
      return 'Wednesday'
    } else if( day == 4){
      return 'Thursday'
    } else if( day == 5){
      return 'Friday'
    } else if( day == 6){
      return 'Saturday'
    }
  }

  setForecastIcons(weekForecast, callback) {
    var tempDescription = '';
    for(var i=0; i<weekForecast.res.length; i++) {
      tempDescription = this.setWeatherDescription(weekForecast.res[i].id);

      if(i==0){
        if(tempDescription == 'SUNNY') {
          this.state.forecastDay1.icon = require('./../assets/clear_icon.png');
        } else if(tempDescription == 'RAINY') {
          this.state.forecastDay1.icon = require('./../assets/rain_icon.png');
        } else {
          this.state.forecastDay1.icon = require('./../assets/partlysunny_icon.png');
        }
      } else if(i==1){
        if(tempDescription == 'SUNNY') {
          this.state.forecastDay2.icon = require('./../assets/clear_icon.png');
        } else if(tempDescription == 'RAINY') {
          this.state.forecastDay2.icon = require('./../assets/rain_icon.png');
        } else {
          this.state.forecastDay2.icon = require('./../assets/partlysunny_icon.png');
        }
      } else if(i==2){
        if(tempDescription == 'SUNNY') {
          this.state.forecastDay3.icon = require('./../assets/clear_icon.png');
        } else if(tempDescription == 'RAINY') {
          this.state.forecastDay3.icon = require('./../assets/rain_icon.png');
        } else {
          this.state.forecastDay3.icon = require('./../assets/partlysunny_icon.png');
        }
      } else if(i==3){
        if(tempDescription == 'SUNNY') {
          this.state.forecastDay4.icon = require('./../assets/clear_icon.png');
        } else if(tempDescription == 'RAINY') {
          this.state.forecastDay4.icon = require('./../assets/rain_icon.png');
        } else {
          this.state.forecastDay4.icon = require('./../assets/partlysunny_icon.png');
        }
      } else if(i==4){
        if(tempDescription == 'SUNNY') {
          this.state.forecastDay5.icon = require('./../assets/clear_icon.png');
        } else if(tempDescription == 'RAINY') {
          this.state.forecastDay5.icon = require('./../assets/rain_icon.png');
        } else {
          this.state.forecastDay5.icon = require('./../assets/partlysunny_icon.png');
        }
      }
    }

    this.state.forecastDay1.icon={};
    this.state.forecastDay2.icon={};
    this.state.forecastDay3.icon={};
    this.state.forecastDay4.icon={};
    this.state.forecastDay5.icon={};

    callback();
  }

  render() {
      return (
      <View style={[styles.container, {backgroundColor: this.state.forecastBackgroundColor}]}>
        { this.state.showLoader && <Loader />}
        { !this.state.showLoader && <View>
          <HeaderSection 
            image = {this.state.backgroundImage}
            description = {this.state.forecastToday.description}
            temperature = {this.state.forecastToday.currentTemp}
          />

          <WeekForecastSection
            todaysForeCast={this.state.forecastToday}
            day1ForeCast={this.state.forecastDay1}
            day2ForeCast={this.state.forecastDay2}
            day3ForeCast={this.state.forecastDay3}
            day4ForeCast={this.state.forecastDay4}
            day5ForeCast={this.state.forecastDay5}
          />
        </View>}
      </View>
      );
  }
}

const styles = StyleSheet.create({
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

export default ForecastPage;
