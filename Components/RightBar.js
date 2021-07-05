import React from 'react';
import {View, Image, Text} from 'react-native';


export default function RightBar()  {
    return (
      <View style={{flexDirection: 'row', marginLeft: 0, padding:10 }}>
        <Image
          source={require('../images/nipponlogopng.png')}
          style={{
            width: 50,
            height: 50,
          }}
        />
        <Text style={{  fontFamily: 'Montserrat-Bold',
              fontWeight: '700',
              fontSize: 24,
              color:'white',
              marginTop:10,
              textAlign:'center',
              paddingLeft:60}}>ORDERS</Text>
      </View>
    );
  };