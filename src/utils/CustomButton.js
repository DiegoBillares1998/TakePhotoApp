import React from 'react';
import {
    Pressable,
    Text,
    StyleSheet,
} from 'react-native';

const CustomButton = (props) => {
    return (
        <Pressable
            onPress={props.onPressFunction}
            title={props.title}
            style={({ pressed }) => [
                { backgroundColor: pressed ? '#dddddd' : props.color },
                styles.button,
                { ...props.style }
            ]}
        >
            <Text style={styles.text}>
                {props.title}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#ffffff',
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
    },
    button: {
        width: 150,
        height: 60,
        borderColor: '#000000',
        borderWidth: 5,
        borderRadius: 5,
        margin: 10,
    },
})

export default CustomButton;