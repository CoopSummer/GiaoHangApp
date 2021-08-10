import React from 'react';
import {Text, Image} from 'react-native';
import styles from './styles';

export default function index({uriHinh}) {
    return (
        <Image source={{ uri: uriHinh}} style={styles.hinh}/>
    )
}
