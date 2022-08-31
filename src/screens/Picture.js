import React from 'react'
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native';
import CustomButton from "../utils/CustomButton";
import Share from 'react-native-share';

export default function Picture({ route }) {
    const { path, latitude,  longitude } = route.params;

    const buttonHandler = async () =>{
        let shareImage = {
            title: "Image", 
            message: 'Image Description',
            url:  path,
          };
          Share.open(shareImage)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              err && console.log(err);
            });
    }

    return (
        <View style={styles.body}>
            <CustomButton
                    title="Share"
                    color="#0080ff"
                    onPressFunction={() => { buttonHandler(); }} />
            <Image style={styles.image} source={{ uri: path }} />
            <Text style={styles.text}>Picture location: {latitude}, {longitude}</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'space-evenly',
    },
    image: {
        width: 350,
        height: 500,
        flexDirection:'row',
    },
    text:{
        flexDirection:'row',
    }
});