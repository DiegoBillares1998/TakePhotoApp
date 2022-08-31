import React, { useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';

export default function Splash({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Main');
        }, 2000);
    }, []);

    return (
        <View style={[
            GlobalStyle.Body,
            styles.body
        ]} >
            <Text
                style={[
                    GlobalStyle.CustomFontHW,
                    styles.text
                ]}
            >
                LOADING AWESOME APP!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#0080ff',
    },
    text: {
        fontSize: 40,
        textAlign: "center",
        color: '#ffffff',
    },
})