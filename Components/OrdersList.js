import React, {useState, useEffect} from 'react';
import {
  Text,
  BackHandler,
  View,
  StatusBar,
  ScrollView
} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';
import {Avatar} from 'react-native-elements';
import axios from 'axios';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from '../css/OrdersListStyle';
import LeftBar from './LeftBar';
import RightBar from './RightBar';
import Spinner from 'react-native-loading-spinner-overlay';

const tick = <Entypo name="check" size={25} color="white" />;

export default function OrdersList({navigation, route}) {
  const {driverNumber}= route.params;


  const [ordersListData, setOrdersListData] = useState(null);
  const [refreshing, setRefreshing] = React.useState(false);
  console.log(refreshing)
 
 
 
  useEffect(() => {
    
    axios
      .post('http://139.59.17.163:4040/order-delivery/getOrderDelivery', {
        deviceNumber: driverNumber,
      })
      .then(res => {setOrdersListData(res.data)
      });
    

    const backHandler = BackHandler.addEventListener('hardwareBackPress', () =>
      handleBackButton(),
    );
    return () => {
      backHandler.remove();
    };
  }, []);

  const onRefresh = React.useCallback(async () => {
     {
       setOrdersListData(null)
      axios
      .post('http://139.59.17.163:4040/order-delivery/getOrderDelivery', {
        deviceNumber: driverNumber,
      })
      .then(res => setOrdersListData(res.data));
     
        setRefreshing(false) 
    }
  }, [refreshing]);

  if(refreshing===true) {
    onRefresh()
  }

//sole.log(ordersListData.length)

  const handleBackButton = () => {
    if (navigation.isFocused()) {
      BackHandler.exitApp();
    }
  };

  const refresh = (e) =>{
    setRefreshing(e)
  }

  console.log(setOrdersListData)

  return (
    <>
    <View style={{backgroundColor:'#0a428f', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
    <RightBar/>
    <LeftBar refreshing={refreshing} setRefreshing={setRefreshing}/>
   
    </View>
    
    <ScrollView style={styles.scrollviewBg}>
      
      <StatusBar backgroundColor="#0a428f" />
      
      {ordersListData == null    ? 
      (
        <View>
          
           <Spinner
          visible={true}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        /> 
        
      
        </View>
      ) : ordersListData.length === 0  ? (
        <View style={{alignItems:'center', height:'95%', justifyContent:'center'}}>
          <Text style={{fontSize:25, fontWeight:'bold'}}>No Order is Pending</Text>
          
        </View>

      ) : (
        ordersListData.map((item, i) => {
          
          if (item.deliveryStatus == "P") {
          return (
            <>
              <Card
                onPress={() => {
                  navigation.push('DeliveryDetails', {
                    ordersListData: ordersListData[i],
                    setRefreshing
                  });
                }}
                style={styles.cardstyle}>
                <View style={styles.cardView}>
                  <Card.Content style={styles.cardContent}>
                    <View style={styles.cardContentView}>
                      <Paragraph style={styles.paragraph1}>
                        {item.customerName}
                      </Paragraph>
                      <Paragraph style={styles.paragraph2}>
                        {item.orderNo}
                      </Paragraph>
                    </View>

                    <>
                      <Avatar
                        size={40}
                        rounded
                        overlayContainerStyle={
                          styles.avatarOverlayContainerStyle
                        }
                        title={tick}
                        titleStyle={styles.avatarContainerStyle}
                        containerStyle={styles.avatarContainerStyle}
                      />
                    </>
                  </Card.Content>
                </View>
              </Card>
            </>
          );
                      }
                      
                      
        })
      )}

     
    </ScrollView>
  </>
  );
}
