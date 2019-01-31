import { Alert } from 'react-native';
import axios from 'axios';

export const ConnectionProvider = {
    baseURL: "https://api.openweathermap.org/data/2.5",
    apiKey: "638ca38325558d027e9899667efcad11",
    getCurrentWeatherForecast(lat, long, callback) {
        fetch(this.baseURL + "/weather?lat="+lat+"&lon="+long+"&units=metric&appid="+this.apiKey)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.cod == 200) {
              this.getWeekWeatherForecast(lat, long, (res) => {
                var responseData = {
                    currentForecast: {
                        current: data.main.temp.toFixed(0),
                        min: data.main.temp_min.toFixed(0),
                        max: data.main.temp_max.toFixed(0),
                        id: data.weather[0].id
                    },
                    weekForeCast: {res}
                };

                callback(responseData);
                });  
            } else {
                this.displayErrorMessage(data.message);
            }
            
        })
        .catch(error => {
            this.displayErrorMessage(error.message);
        });
    },
    getWeekWeatherForecast(lat, long, callback) {
        fetch(this.baseURL + "/forecast?lat="+lat+"&lon="+long+"&units=metric&appid="+this.apiKey)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            if(data.cod == 200) {
                var dayForecast = {
                    temp: '',
                    id: '',
                    date: ''
                };
    
                var sortedWeekForecast = [];
                var index = 0;
                var counter = 0;
    
                while(counter<data.list.length) {
                    dayForecast = {
                        temp: '',
                        id: '',
                        date: ''
                    };
                    dayForecast.temp = data.list[counter].main.temp_max.toFixed(0);
                    dayForecast.id = data.list[counter].weather[0].id;
                    dayForecast.date = data.list[counter].dt_txt;
    
                    sortedWeekForecast[index] = dayForecast;
                    counter = counter + 8;
                    index++;
                }
    
                callback(sortedWeekForecast);
            } else {
                this.displayErrorMessage(data.message);
            }
        })
        .catch(error => {
            this.displayErrorMessage(error.message);
        });
    },
    displayErrorMessage(message) {
        //display an error pop-up
        Alert.alert(
            'Error',
            message,
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
    }
};