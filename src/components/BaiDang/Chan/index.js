import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

export default function index({likes, caption, postAt}) {
    return (
        <View style = {styles.container}>
            <Text style = {styles.like}>
                {likes} Likes
            </Text>
            <Text style = {styles.caption}>
                {caption}
            </Text>
            <Text style = {styles.postAt}>
                {postAt}
            </Text>
        </View>
        
    )
}
