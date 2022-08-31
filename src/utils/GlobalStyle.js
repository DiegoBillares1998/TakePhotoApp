import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    Body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    CustomFontHW: {
        fontFamily: Platform.OS === 'ios' ? 'IndieFlower' : 'IndieFlower-Regular'
    },
});