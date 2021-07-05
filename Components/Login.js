import React, {useState} from 'react';
import {Text, View, StatusBar, Image, TextInput} from 'react-native';

import styles from '../css/LoginStyle';

export default function Login({navigation}) {
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [numberLength, setNumberLength] = useState(0);
  const [alertMessage, setAlertMessage] = useState();
  const [alertValid, setAlertValid] = useState();

  const goToOrderList = () => {
    if (phoneNumber != 0 && numberLength == 10) {
      navigation.navigate('OrdersList', {driverNumber: phoneNumber.toString()});
    } else if (phoneNumber == 0) {
      setAlertMessage(true);
    } else {
      setAlertValid(true);
      setAlertMessage(false);
    }
  };
  return (
    <View style={styles.loginbg}>
      <StatusBar 
      //backgroundColor="#77ACF1"
      backgroundColor= '#0a428f' />
      <Image
        style={{
          width: 75,
          height: 75,
          marginBottom: 10,
          marginLeft: '40%',
        }}
        source={require('../images/nipponlogopng.png')}
      />
      <Text style={styles.signin}>Sign in to Continue</Text>
      <View style={styles.textInputView}>
        <TextInput
        style={{color:'black', width:'100%', backgroundColor:'white', padding:10, fontSize:15, height:50}}
          onChangeText={value => {
            setPhoneNumber(parseInt(value));
            setNumberLength(value.length);
          }}
          placeholder="Enter Mobile Number"
          placeholderTextColor="grey"
          
          maxLength={10}
          keyboardType="numeric"
        />
        {alertMessage ? (
          <Text style={styles.alertMessage}>Please enter a Mobile Number</Text>
        ) : (
          <Text />
        )}
        {alertValid ? (
          <Text style={styles.alertMessage}>
            Please enter a valid Mobile Number
          </Text>
        ) : (
          <Text />
        )}
        <View style={styles.loginView}>
          <Text
            style={styles.loginButton}
            onPress={() => {
              goToOrderList();
            }}>
            Next
          </Text>
        </View>
      </View>
    </View>
  );
}
