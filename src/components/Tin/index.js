import React from 'react';
import Avatar from '../Avatar/index';
import {View, Text} from 'react-native';
import styles from './styles';

export default function index({uriHinh, ten}) {
    return (
        <View>
            <Avatar uri={uriHinh}/>
            <Text style={styles.ten}>{ten}</Text>
        </View>
    )
}
