import React from 'react'
import {Text, View} from 'react-native'
import Avatar from '../../Avatar/index'
import styles from './styles'

export default function index({uriHinh, ten}) {
    return (
        <View style={styles.container}>
            <Avatar uri={uriHinh} size={40}/>
            <Text style={styles.ten}>
                {ten}
            </Text>
        </View>
        
    )
}
