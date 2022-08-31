import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import CustomButton from '../utils/CustomButton';
import GetLocation from 'react-native-get-location'
import { useDispatch, useSelector } from 'react-redux'
import { photoActions } from '../redux/photo-slice'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Camera() {

    const [{ cameraRef }, { takePicture }] = useCamera(null);
    const { photos } = useSelector(state => state.photoStore);
    const dispatch = useDispatch();
    

    const captureHandle = async () => {
        try {
            await addPhoto();
        } catch (error) {
            console.log(error);
        }
    }

    const addPhoto = async () => {
        const picturePath = await takePicture();
        var latitude = 0;
        var longitude = 0;
        await GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
        .then(location => {
            latitude = location.latitude;
            longitude = location.longitude;
        })
        .catch(error => {
            const { code, message } = error;
            console.warn(code, message);
        });
        const photo = {
            path: picturePath.uri,
            latitude: latitude,
            longitude: longitude,
        };
        let newPhotos = [...photos, photo];
        await AsyncStorage.setItem('Photos', JSON.stringify(newPhotos))
            .then(() => {
                dispatch(photoActions.addPhoto(photo));
            })
            .catch(err => console.log(err))
    }

    return (
        <View style={styles.body}>
            <RNCamera
                ref={cameraRef}
                type={RNCamera.Constants.Type.back}
                style={styles.preview} />
            <CustomButton
                    style={styles.button}
                    color='#1eb900'
                    onPressFunction={() => captureHandle()}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'space-evenly',
    },
    preview: {
        width: 350,
        height: 500,
        flexDirection:'row',
    },
    button:{
        flexDirection:'row',
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: '#ff0000',
    }
});