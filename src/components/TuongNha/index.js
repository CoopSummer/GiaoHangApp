import React from 'react';
import {FlatList} from 'react-native';
import BaiDang from '../BaiDang';
import Tins from '../Tins';

const data = [{
    user: {
        uriHinh:'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/177800846_2533318880146781_6292674055997556958_n.jpg?_nc_cat=107&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=ESZYsGeM8pgAX_TDgyg&_nc_oc=AQlJXDQcWKrpNin6CAM9KWnIDCy9TOaVg6H77KC8TvIhgLASbX9tFw47Rm8j_Qz22hcGyzzsijtM7PKBKYaA5ScZ&_nc_ht=scontent.fsgn3-1.fna&oh=b494b2dec602975cdfe8b2e6dfc4476f&oe=61360A59',
        ten: 'Khoi'
    },
    uriPost: 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.6435-1/p200x200/107319965_2655428004671504_8068941602490305873_n.jpg?_nc_cat=102&ccb=1-4&_nc_sid=7206a8&_nc_ohc=zRXjpLbb7GUAX_0RkzO&_nc_ht=scontent.fsgn8-1.fna&oh=5571f77231cb0a59df7af90e3ed3f5e4&oe=6137ECB9',
    caption: 'Sangne',
    likes: 999,
    postAt:'6 Minutes ago',
    stt: '0'
},
{
    user: {
        uriHinh:'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/177800846_2533318880146781_6292674055997556958_n.jpg?_nc_cat=107&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=ESZYsGeM8pgAX_TDgyg&_nc_oc=AQlJXDQcWKrpNin6CAM9KWnIDCy9TOaVg6H77KC8TvIhgLASbX9tFw47Rm8j_Qz22hcGyzzsijtM7PKBKYaA5ScZ&_nc_ht=scontent.fsgn3-1.fna&oh=b494b2dec602975cdfe8b2e6dfc4476f&oe=61360A59',
        ten: 'Khoi'
    },
    uriPost: 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.6435-1/p200x200/107319965_2655428004671504_8068941602490305873_n.jpg?_nc_cat=102&ccb=1-4&_nc_sid=7206a8&_nc_ohc=zRXjpLbb7GUAX_0RkzO&_nc_ht=scontent.fsgn8-1.fna&oh=5571f77231cb0a59df7af90e3ed3f5e4&oe=6137ECB9',
    caption: 'Sangne',
    likes: 999,
    postAt:'6 Minutes ago',
    stt: '1'
},
{
    user: {
        uriHinh:'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/177800846_2533318880146781_6292674055997556958_n.jpg?_nc_cat=107&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=ESZYsGeM8pgAX_TDgyg&_nc_oc=AQlJXDQcWKrpNin6CAM9KWnIDCy9TOaVg6H77KC8TvIhgLASbX9tFw47Rm8j_Qz22hcGyzzsijtM7PKBKYaA5ScZ&_nc_ht=scontent.fsgn3-1.fna&oh=b494b2dec602975cdfe8b2e6dfc4476f&oe=61360A59',
        ten: 'Khoi'
    },
    uriPost: 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.6435-1/p200x200/107319965_2655428004671504_8068941602490305873_n.jpg?_nc_cat=102&ccb=1-4&_nc_sid=7206a8&_nc_ohc=zRXjpLbb7GUAX_0RkzO&_nc_ht=scontent.fsgn8-1.fna&oh=5571f77231cb0a59df7af90e3ed3f5e4&oe=6137ECB9',
    caption: 'Sangne',
    likes: 999,
    postAt:'6 Minutes ago',
    stt: '2'
}]

export default function index() {
    return (
        <FlatList data = {data} keyExtractor={({stt}) => stt} renderItem={({item}) => <BaiDang baidang={item} />} ListHeaderComponent={Tins}/>
    )
}
