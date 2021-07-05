import React, {useState} from 'react';
import {Text, View, TextInput, Alert} from 'react-native';
import Rating from 'react-native-easy-rating';
import {Card} from 'react-native-paper';
import Foundation from 'react-native-vector-icons/Foundation';
import styles from '../css/RateAndReviewStyle';
import RNFS from 'react-native-fs';
import CustomRNSketchCanvas from '../Signature/CustomRNSketchCanvas';
import Modal from 'react-native-modal';
import AwesomeAlert from 'react-native-awesome-alerts';
import axios from 'axios';
import moment from 'moment';

const pencil = <Foundation name="clipboard-pencil" color="#4BB543" size={40} />;
export default function RateAndReview({navigation, route}) {
  const initialState = {
    file: '',
    JsonInputData: {
      deliveredDateTime: todayDate,
      rating: rating,
      status: 'D',
      remarks: feedback,
      invoiceno: InvoiceNo,
    },
  };
  const {InvoiceNo, setRefreshing} = route.params;
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [todayDate, setTodayDate] = useState(
    moment().format('YYYY-MM-DD hh:mm:ss'),
  );
  const [dragged, setDragged] = useState(0);
  const [color, setColor] = useState('#FF0000');
  const [modalVisible, setModalVisible] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [fileData, setFileData] = useState();
  const [Approved, setApproved] = useState(initialState);
  const [filePath, setFilePath] = useState('');
  const [fileName, setFileName] = useState();
  const [fileType, setFileType] = useState();

  const handleFileDelete = () => {
    RNFS.exists(filePath).then(res => {
      if (res) {
        RNFS.unlink(filePath).then(() => console.log('FILE DELETED'));
      }
    });
  };

  const postmethod = async () => {
    
   await axios
      .post(
        'http://139.59.17.163:4040/order-delivery/updateByInvoiceNumber',
        createFormData()
      )
      .then(response => {
        console.log(JSON.stringify(response));
      })
      .catch(error => {
        alert(error);
      });
  
  handleFileDelete()
  };

  const createFormData = () => {
    const data = new FormData();
  
    data.append('file', {
      name: fileName,
      type: fileType,
      uri:fileData
     });
 
    data.append(
        'jsonInputData',
        JSON.stringify({
          deliveredDateTime: todayDate,
          rating: rating,
          status: 'D',
          remarks: feedback,
          invoiceno: InvoiceNo,
        }),
      );
  
    return data;
  };
  
  const submitDetails = () => {
    setModalVisible(true);
  };

  const alertOnpress = () => {
    postmethod();
    // handleFileDelete()
    setRefreshing(true);
    setModalVisible(false);
    navigation.navigate('OrdersList');
  }

  return (
    <View style={styles.view}>
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
          alertOnpress()
          //this.setState({showAlert:false})
        }}
      />
      <Modal isVisible={modalVisible}>
        <View style={styles.signatureView}>
          <Text
            onPress={() => {
              setModalVisible(false);
            }}
            style={{
              color: 'white',
              backgroundColor: 'white',
              textAlign: 'right',
              paddingTop: 5,
              paddingRight: 10,
              fontWeight: 'bold',
              fontSize: 19,
              backgroundColor: '#0a428f',
            }}>
            X
          </Text>
          <Text style={styles.signatureComment}>Please Sign below ...</Text>
          <CustomRNSketchCanvas
            containerStyle={styles.canvasContainerStyle}
            canvasStyle={styles.canvasStyle}
            onStrokeEnd={data => {}}
            clearComponent={
              <View style={styles.clearComponent}>
                <Text style={styles.clearText}>Clear</Text>
              </View>
            }
            onClearPressed={() => {}}
            strokeColor={'white'}
            defaultStrokeIndex={0}
            defaultStrokeWidth={2}
            
            onPathsChange={pathsCount => {
              setDragged(pathsCount);
            }}
            
            onSketchSaved={(success, path) => {
              
              setFilePath(path);
              if (dragged == 0) {
                Alert.alert('Alert', 'Enter Signature');
              } 
              else {
                console.log(path);
                setFilePath(path)
                setShowAlert(true);
                RNFS.readFile(path, 'base64').then(result => {
                  let filename =
                  InvoiceNo +
                  '_' +
                  'SIGNATURE' +
                  '_' +
                  moment().format('YYYYMMDDhhmmss');
                  setFileType('image/png')
                  setFileName(filename)
                setFileData('file://'+path);
                });
              }
            }}
            saveComponent={
              <View style={styles.saveSignature}>
                <Text style={styles.saveText}>Save</Text>
              </View>
            }
          />
        </View>
      </Modal>

      <Card style={styles.cardStyle}>
        
        <View style={styles.ratingView}>
          <Rating
            rating={rating}
            max={5}
            iconWidth={50}
            iconHeight={50}
            iconSelected={require('../images/icon_star_selected.png')}
            iconUnselected={require('../images/icon_star_unselected.png')}
            onRate={rating => setRating(rating)}
          />
        </View>
        <View style={styles.cardView}>
          <Text style={styles.reviewStyle}>{pencil}</Text>
          <Text style={styles.reviewText}>Write a Review </Text>
        </View>
        <TextInput
          style={styles.ratingReview}
          onChangeText={value => setFeedback(value)}
        />

        <View style={styles.submit}>
          <Text
            style={{
              backgroundColor: '#4BB543',
              borderRadius: 15,
              padding: 10,
              textAlign: 'center',
              color: 'white',
              fontFamily: 'Montserrat-Regular',
              fontFamily: '500',
              fontSize:15,
              
            }}
            onPress={() => {
              submitDetails();
            }}>
            Submit
          </Text>
        </View>
      </Card>
    </View>
  );
}
