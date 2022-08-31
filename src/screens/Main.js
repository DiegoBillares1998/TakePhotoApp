import React, { useEffect } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';
import Grid from 'react-native-grid-component';
import CustomButton from "../utils/CustomButton";
import GlobalStyle from '../utils/GlobalStyle';
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { photoActions } from '../redux/photo-slice'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default function Main({ navigation }){
    const { photos } = useSelector((state) => state.photoStore);
    const dispatch = useDispatch();
    
    useEffect(() => {
        getPhotos();
    }, []);

    const getPhotos = () => {
        AsyncStorage.getItem('Photos')
            .then(photos => {
                const parsedPhotos = JSON.parse(photos);
                if (parsedPhotos && typeof parsedPhotos === 'object') {
                    dispatch(photoActions.setPhotos(parsedPhotos));
                }
            })
            .catch(err => console.log(err))
    }

    return(
        <View style={ GlobalStyle.Body } >
            <Grid
            style={styles.album}
            data={photos}
            renderItem={(item) => (
                <TouchableOpacity
                        style={styles.press}
                        onPress={() => {
                            navigation.navigate('Picture', item);
                        }}
                    >
                    <Image style={styles.image} source={{ uri: item.path }} />
                </TouchableOpacity>
            )}
            renderPlaceholder={() => <View style={styles.item} />}
            numColumns={3}
            keyExtractor={(item, index) => index.toString()}
            />
            <CustomButton
                    title="Take Picture"
                    color="#0080ff"
                    onPressFunction={() => { navigation.navigate('Camera'); }} />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    image: {
        width: deviceWidth / 4 - 4,
        height: deviceHeight / 4,
        margin: 20,
    },
    album: {
        flex: 2,
    },
    item: {
        flex: 2,
        height: 120,
        margin: 1.5,
    },
    press: {
        backgroundColor: '#ffffff',
        justifyContent: 'center',
    }
})