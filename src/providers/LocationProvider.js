import { Alert } from 'react-native';

export const LocationProvider = {
    getLocation(callback){
        // Get the current location of the user
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                callback(position);
            },
            (error) => {
                this.displayErrorMessage(error.message);
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
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