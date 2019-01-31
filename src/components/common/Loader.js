import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { colors } from './colors';

const Loader = ({ image, description, temperature }) => {
    return(
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color={colors.sunny} hidesWhenStopped />
        </View>
    );
};

const styles = {
    container: {
        width: '90%',
        height: '50%',
        alignSelf: 'center',
        backgroundColor: colors.white,
        opacity: 0.8
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10
    }
};

export {Loader};