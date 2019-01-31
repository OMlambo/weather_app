import React from 'react';
import { View, Text, Image } from 'react-native';

import { colors } from './colors';

const WeekForecastSection = ({ todaysForeCast, day1ForeCast, day2ForeCast, day3ForeCast, day4ForeCast, day5ForeCast }) => {
    return(
        <View style={styles.textContainer}>
            <View style={[styles.rowStyle, styles.rowPaddingStyle]}>
                <View style={styles.columnStyle}>
                    <Text style={styles.textStyle}>{todaysForeCast.minTemp}°</Text>
                </View>
                <View style={[styles.columnStyle, styles.middleColumnStyle]}>
                    <Text style={styles.textStyle}>{todaysForeCast.currentTemp}°</Text>
                </View>
                <View style={[styles.columnStyle, styles.rightColumnStyle]}>
                    <Text style={styles.textStyle}>{todaysForeCast.maxTemp}°</Text>
                </View>
            </View>

            <View style={[styles.dividerStyle,styles.rowStyle]}>
                <View style={styles.columnStyle}>
                    <Text style={[styles.textStyle, styles.gridSubtitleStyle]}>min</Text>
                </View>
                <View style={[styles.columnStyle, styles.middleColumnStyle]}>
                    <Text style={[styles.textStyle, styles.gridSubtitleStyle]}>Current</Text>
                </View>
                <View style={[styles.columnStyle, styles.rightColumnStyle]}>
                    <Text style={[styles.textStyle, styles.gridSubtitleStyle]}>max</Text>
                </View>
            </View>

            <View style={[styles.rowStyle, styles.rowPaddingStyle]}>
                <View style={styles.columnStyle}>
                    <Text style={styles.textStyle}>{day1ForeCast.name}</Text>
                </View>
                <View style={[styles.columnStyle, styles.middleColumnStyle]}>
                    <Image source={day1ForeCast.icon} />
                </View>
                <View style={[styles.columnStyle, styles.rightColumnStyle]}>
                    <Text style={styles.textStyle}>{day1ForeCast.temp}°</Text>
                </View>
            </View>

            <View style={[styles.rowStyle, styles.rowPaddingStyle]}>
                <View style={styles.columnStyle}>
                    <Text style={styles.textStyle}>{day2ForeCast.name}</Text>
                </View>
                <View style={[styles.columnStyle, styles.middleColumnStyle]}>
                    <Image source={day2ForeCast.icon} />
                </View>
                <View style={[styles.columnStyle, styles.rightColumnStyle]}>
                    <Text style={styles.textStyle}>{day2ForeCast.temp}°</Text>
                </View>
            </View>

            <View style={[styles.rowStyle, styles.rowPaddingStyle]}>
                <View style={styles.columnStyle}>
                    <Text style={styles.textStyle}>{day3ForeCast.name}</Text>
                </View>
                <View style={[styles.columnStyle, styles.middleColumnStyle]}>
                    <Image source={day3ForeCast.icon} />
                </View>
                <View style={[styles.columnStyle, styles.rightColumnStyle]}>
                    <Text style={styles.textStyle}>{day3ForeCast.temp}°</Text>
                </View>
            </View>

            <View style={[styles.rowStyle, styles.rowPaddingStyle]}>
                <View style={styles.columnStyle}>
                    <Text style={styles.textStyle}>{day4ForeCast.name}</Text>
                </View>
                <View style={[styles.columnStyle, styles.middleColumnStyle]}>
                    <Image source={day4ForeCast.icon} />
                </View>
                <View style={[styles.columnStyle, styles.rightColumnStyle]}>
                    <Text style={styles.textStyle}>{day4ForeCast.temp}°</Text>
                </View>
            </View>

            <View style={[styles.rowStyle, styles.rowPaddingStyle]}>
                <View style={styles.columnStyle}>
                    <Text style={styles.textStyle}>{day5ForeCast.name}</Text>
                </View>
                <View style={[styles.columnStyle, styles.middleColumnStyle]}>
                    <Image source={day5ForeCast.icon} />
                </View>
                <View style={[styles.columnStyle, styles.rightColumnStyle]}>
                    <Text style={styles.textStyle}>{day5ForeCast.temp}°</Text>
                </View>
            </View>
        </View>
    );
};

const styles = {
    textContainer: {
        flex: 1
    },
    rowStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    rowPaddingStyle: {
        paddingTop: '4%'
    },
    columnStyle: {
        width: '30%',
        marginLeft: '2%'
    },
    middleColumnStyle: {
        alignItems: 'center'
    },
    rightColumnStyle: {
        alignItems: 'flex-end'
    },
    dividerStyle: {
        borderBottomWidth: 1,
        borderBottomColor: colors.white
    },
    textStyle: {
        color: colors.white,
        fontSize: 18
    },
    gridSubtitleStyle: {
        fontSize: 15
    }
};

export {WeekForecastSection};