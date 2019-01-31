import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { colors } from './colors';

const HeaderSection = ({ image, description, temperature }) => {
    return(
        <View style={{ width: '100%', height: '47%'}}>
            <ImageBackground
                source={image} 
                style={{ width: '100%', height: '100%'}}
            >
                <View style={style.textContainer}>
                    <Text style={style.tempText}>{temperature}°</Text>
                    <Text style={style.descriptionText}>{description}</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

const style = {
    textContainer: {
        flex: 1,
        alignItems: 'center',
        marginLeft: '40%',
        marginTop: '20%',
    },
    tempText: {
        color: colors.white,
        fontSize: 50
    },
    descriptionText: {
        color: colors.white,
        fontSize: 35
    }
};

export {HeaderSection};