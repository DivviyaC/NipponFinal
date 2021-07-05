import React from 'react';
import {View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function LeftBar({refreshing, setRefreshing}) {
    
    const Interval = () => {
       setRefreshing(true)
      };
      
    return (
      <View style={{flexDirection: 'row', marginTop: 15, }}>
        <View style={{paddingRight: 35, paddingBottom:15,
        marginRight:10}}>
          <Ionicons
            name="refresh"
            color="white"
            size={30}
            onPress={() => {
              Interval();
            }}
          />
        </View>
      </View>
    );
  };
  