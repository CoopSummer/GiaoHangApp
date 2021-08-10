import React from 'react';
import {View} from 'react-native';
import Dau from './Dau/index';
import Than from './Than/index';
import Chan from './Chan/index';

export default function index({baidang}) {
    return (
        <View>
            <Dau uriHinh={baidang.user.uriHinh} ten={baidang.user.ten}/>
            <Than uriHinh={baidang.uriPost}/>
            <Chan likes={baidang.likes} caption={baidang.caption} postAt={baidang.postAt}/>
        </View>
    )
}
