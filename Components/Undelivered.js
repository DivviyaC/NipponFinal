import React, {useState} from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
import {ScrollView, Text, Image, View} from 'react-native';
import {Card} from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import RNFS from 'react-native-fs';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import styles from '../css/UndeliveredStyle';
import Modal from 'react-native-modal';
import {TextInput} from 'react-native';
import moment from 'moment';

const closed = (
  <MaterialCommunityIcons name="home-remove" color="white" size={50} />
);
const damaged = (
  <MaterialIcons name="remove-shopping-cart" color="white" size={45} />
);
const others = <Entypo name="shopping-bag" color="white" size={45} />;
const cancelled = <AntDesign name="closecircle" color="white" size={40} />;

export default function Undelivered({navigation, route}) {
  const {InvoiceNo, setRefreshing} = route.params;
  const [Remarks, setRemarks] = useState('');
  const [currentDate, setCurrentDate] = useState(
    moment().format('YYYY-MM-DD hh:mm:ss'),
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileData, setFileData] = useState("");
  const [filePath, setFilePath] = useState("");
  const [fileType, setFileType] = useState();
  const [cancelledData, setCancelledData] = useState();

  const createFormData = () => {
    const data = new FormData();
    if(Remarks=="Damaged" || Remarks=="Closed") {
    data.append('file', {
      name: fileName,
      type: fileType,
      uri:fileData
    });
  }

     data.append(
      'jsonInputData',
      JSON.stringify({
        deliveredDateTime: currentDate,
        rating: '',
        status: 'ND',
        remarks: Remarks,
        invoiceno: InvoiceNo,
      })
     )
    
     
   
  
   
    return data;
    
   
  };
  
  const undeliveredPostmethod = async () => {
  
  

    await axios.post( 'http://139.59.17.163:4040/order-delivery/updateByInvoiceNumber',
     createFormData()
    ).then(response => {
       console.log(JSON.stringify(response));
        })
         .catch(error => {
           alert(error);
         });
        
        
    
  };

  const pickSingleWithCamera = async (cropping, mediaType = 'photo') => {
    await ImagePicker.openCamera({
      width: 500,
      height: 500,
      includeExif: false,
      mediaType,
    })
      .then(image => {
        RNFS.readFile(image.path, 'base64').then(result => {
          let filename =
            InvoiceNo +
            '_' +
            'UNDELIVERED' +
            '_' +
            moment().format('YYYYMMDDhhmmss');

            setFileType(image.mime)
            setFileName(filename)
                      setFileData(
                        image.path
                      
                        );
        });[]
       
        setShowAlert(true);
      })
      .catch(e => e);
  };

 

  const otherfunc = () => {
    setRemarks('Others');
    setShowAlert(true);
  };

  return (
    <ScrollView style={styles.scrollviewBg}>
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Alert"
        message="Record Saved"
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="Yes"
        confirmButtonColor="#d60c33"
        onConfirmPressed={() => {
          undeliveredPostmethod(), setRefreshing(true);
          navigation.navigate(
            'OrdersList', 
          );
          setShowAlert(false);
        }}
      />
      <View style={styles.viewStyle}>
        <Text style={styles.heading}>Reason for Undelivered</Text>

        <Card
          onPress={() => {
            pickSingleWithCamera(true), setRemarks('Closed');
          }}>
          <View style={styles.cardView}>
            <Text style={[{backgroundColor: '#fb3640'}, styles.closedIcon]}>
              {closed}
            </Text>

            <Text style={[{backgroundColor: '#ff8882'}, styles.closed]}>
              Shop Closed
            </Text>
          </View>
        </Card>

        <Card
          onPress={() => {
            pickSingleWithCamera(true), setRemarks('Damaged');
          }}>
          <View style={styles.cardView}>
            <Text style={[{backgroundColor: '#cf0000'}, styles.closedIcon]}>
              {damaged}
            </Text>

            <Text style={[{backgroundColor: '#ec4646'}, styles.closed]}>
              Damaged
            </Text>
          </View>
        </Card>

        <Modal isVisible={modalVisible} transparent={true}>
          <View
            style={{
              backgroundColor: '#0a428f',
              paddingLeft: 15,
              paddingRight: 5,
              paddingRight: 5,
              paddingBottom: 15,
              margin: 0,
            }}>
              <View style={{flexDirection:'row'}}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 19,
                paddingTop: 5,
              }}>
              Optional
            </Text>
            <Text
              style={{textAlign: 'right', color: 'white', fontWeight: 'bold',paddingLeft:220, fontSize:19}}
              onPress={() => {
                setModalVisible(false);
              }}>
              X
            </Text>
            </View>
            <TextInput
              style={{
                borderColor: 'white',
                backgroundColor: 'white',
                borderWidth: 1,
                margin: 10,
                color: 'black',
                height: 40,
              }}
              onChange={value => {
                setCancelledData(value);
              }}
            />
            <Text
              onPress={() => {
                setModalVisible(false),
                  undeliveredPostmethod(),
                  setShowAlert(true);
              
              }}
              style={{
                textAlign: 'center',
                backgroundColor: '#d60c33',
                marginTop: 10,
                marginBottom: 10,
                marginLeft: 90,
                padding: 10,
                width: '40%',
                alignContent: 'center',
                color:'white',
                borderRadius: 15,
                fontSize:15
              }}>
              Submit
            </Text>
          </View>
        </Modal>
        <Card
          onPress={() => {
            setRemarks('Cancelled'), setModalVisible(true);
          }}>
          <View style={styles.cardView}>
            <Text style={[{backgroundColor: '#cf0000'}, styles.closedIcon]}>
              {cancelled}
            </Text>

            <Text style={[{backgroundColor: '#ec4646'}, styles.closed]}>
              Cancelled
            </Text>
          </View>
        </Card>

        <Card
          onPress={() => {
            otherfunc();
          }}>
          <View style={styles.cardView}>
            <Text style={[{backgroundColor: '#630000'}, styles.closedIcon]}>
              {others}
            </Text>

            <Text style={[{backgroundColor: '#810000'}, styles.closed]}>
              Others
            </Text>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
}
