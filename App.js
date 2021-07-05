/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OrdersList from './Components/OrdersList';
import DeliveryDetails from './Components/DeliveryDetails';
import {NavigationContainer} from '@react-navigation/native';
import RateAndReview from './Components/RateAndReview';
import Undelivered from './Components/Undelivered';
import Login from './Components/Login';
import {View, Image, Text} from 'react-native';

const NavStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <NavStack.Navigator initialRouteName={OrdersList}>
        <NavStack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        <NavStack.Screen
          name="OrdersList"          
          options={{headerShown:false
          }}
        >
          {props => <OrdersList {...props} />}
           </NavStack.Screen>

        <NavStack.Screen
          name="DeliveryDetails"
          component={DeliveryDetails}
          options={{
            title: 'Delivery Details',
            headerStyle: {
              backgroundColor: '#0a428f',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
              fontWeight: '700',
              fontSize: 24,
            },
          }}
        />

        <NavStack.Screen
          name="RateAndReview"
          component={RateAndReview}
          options={{
            title: 'Rate And Review',
            headerStyle: {
              backgroundColor: '#0a428f',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
              fontWeight: '700',
              fontSize: 24,
            },
          }}
        />

        <NavStack.Screen
          name="Undelivered"
          component={Undelivered}
          options={{
            title: 'Undelivered',
            headerStyle: {
              backgroundColor: '#0a428f',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
              fontWeight: '700',
              fontSize: 24,
            },
            // headerLeft: () => (
            //   <Image
            //   source={require('./images/Nippon-Paint-Favicon.png')}
            //   style={{
            //     width: 50,
            //     height: 50,
            //   }}
            // />
            // )
          }}
        />
        
      </NavStack.Navigator>
    </NavigationContainer>
  );
}
