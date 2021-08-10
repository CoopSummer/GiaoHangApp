import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';

export default function index({uri, size= 70}) {
    return (
        <View style={[styles.container, {height: size + 6, width: size + 6}]}>
            <Image source={{uri}}
            style={[styles.hinh, {height: size, width: size}]}/>
        </View>
        
    )
}
