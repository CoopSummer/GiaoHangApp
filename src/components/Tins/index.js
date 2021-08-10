import React from 'react';
import { FlatList } from 'react-native';
import Tin from '../Tin/index';
import styles from './styles'


const data = [
    {
        uriHinh:'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/177800846_2533318880146781_6292674055997556958_n.jpg?_nc_cat=107&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=ESZYsGeM8pgAX_TDgyg&_nc_oc=AQlJXDQcWKrpNin6CAM9KWnIDCy9TOaVg6H77KC8TvIhgLASbX9tFw47Rm8j_Qz22hcGyzzsijtM7PKBKYaA5ScZ&_nc_ht=scontent.fsgn3-1.fna&oh=b494b2dec602975cdfe8b2e6dfc4476f&oe=61360A59',
        ten: 'Khoi'
    },
    {
        uriHinh:'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/177800846_2533318880146781_6292674055997556958_n.jpg?_nc_cat=107&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=ESZYsGeM8pgAX_TDgyg&_nc_oc=AQlJXDQcWKrpNin6CAM9KWnIDCy9TOaVg6H77KC8TvIhgLASbX9tFw47Rm8j_Qz22hcGyzzsijtM7PKBKYaA5ScZ&_nc_ht=scontent.fsgn3-1.fna&oh=b494b2dec602975cdfe8b2e6dfc4476f&oe=61360A59',
        ten: 'Sang'
    },
    {
        uriHinh:'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/177800846_2533318880146781_6292674055997556958_n.jpg?_nc_cat=107&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=ESZYsGeM8pgAX_TDgyg&_nc_oc=AQlJXDQcWKrpNin6CAM9KWnIDCy9TOaVg6H77KC8TvIhgLASbX9tFw47Rm8j_Qz22hcGyzzsijtM7PKBKYaA5ScZ&_nc_ht=scontent.fsgn3-1.fna&oh=b494b2dec602975cdfe8b2e6dfc4476f&oe=61360A59',
        ten: 'Khang'
    },
    {
        uriHinh:'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/177800846_2533318880146781_6292674055997556958_n.jpg?_nc_cat=107&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=ESZYsGeM8pgAX_TDgyg&_nc_oc=AQlJXDQcWKrpNin6CAM9KWnIDCy9TOaVg6H77KC8TvIhgLASbX9tFw47Rm8j_Qz22hcGyzzsijtM7PKBKYaA5ScZ&_nc_ht=scontent.fsgn3-1.fna&oh=b494b2dec602975cdfe8b2e6dfc4476f&oe=61360A59',
        ten: 'Tin'
    },
    {
        uriHinh:'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/177800846_2533318880146781_6292674055997556958_n.jpg?_nc_cat=107&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=ESZYsGeM8pgAX_TDgyg&_nc_oc=AQlJXDQcWKrpNin6CAM9KWnIDCy9TOaVg6H77KC8TvIhgLASbX9tFw47Rm8j_Qz22hcGyzzsijtM7PKBKYaA5ScZ&_nc_ht=scontent.fsgn3-1.fna&oh=b494b2dec602975cdfe8b2e6dfc4476f&oe=61360A59',
        ten: 'Khoi1'
    },
    {
        uriHinh:'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/177800846_2533318880146781_6292674055997556958_n.jpg?_nc_cat=107&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=ESZYsGeM8pgAX_TDgyg&_nc_oc=AQlJXDQcWKrpNin6CAM9KWnIDCy9TOaVg6H77KC8TvIhgLASbX9tFw47Rm8j_Qz22hcGyzzsijtM7PKBKYaA5ScZ&_nc_ht=scontent.fsgn3-1.fna&oh=b494b2dec602975cdfe8b2e6dfc4476f&oe=61360A59',
        ten: 'Sang1'
    },
    {
        uriHinh:'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/177800846_2533318880146781_6292674055997556958_n.jpg?_nc_cat=107&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=ESZYsGeM8pgAX_TDgyg&_nc_oc=AQlJXDQcWKrpNin6CAM9KWnIDCy9TOaVg6H77KC8TvIhgLASbX9tFw47Rm8j_Qz22hcGyzzsijtM7PKBKYaA5ScZ&_nc_ht=scontent.fsgn3-1.fna&oh=b494b2dec602975cdfe8b2e6dfc4476f&oe=61360A59',
        ten: 'Khang1'
    },
    {
        uriHinh:'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/177800846_2533318880146781_6292674055997556958_n.jpg?_nc_cat=107&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=ESZYsGeM8pgAX_TDgyg&_nc_oc=AQlJXDQcWKrpNin6CAM9KWnIDCy9TOaVg6H77KC8TvIhgLASbX9tFw47Rm8j_Qz22hcGyzzsijtM7PKBKYaA5ScZ&_nc_ht=scontent.fsgn3-1.fna&oh=b494b2dec602975cdfe8b2e6dfc4476f&oe=61360A59',
        ten: 'Tin1'
    }
]

export default function index() {
    return (
        <FlatList 
            data={data}
            keyExtractor={({ten}) => ten}
            horizontal
            showsHorizontalScrollIndicator={false}
            style = {styles.container}
            renderItem={({item}) => <Tin uriHinh={item.uriHinh} ten={item.ten}/>}
        />
    )
}
