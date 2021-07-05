import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    view: {
        backgroundColor: "white", height: '100%'
    },
    cardStyle: {
        margin: 15, padding: 25,
        backgroundColor:'#0a428f'
    },
    cardView: {
        flexDirection: 'row',
        marginTop:20,
        marginBottom:10
    },
    reviewStyle: {
        paddingRight: 20,
    },
    reviewText: {
        fontSize: 15, 
        paddingTop: 5,
        fontFamily: 'Montserrat-Bold',
               fontWeight:'700',
               color:'white'
        
        
    },
    ratingView: {
        alignItems: 'center', padding: 15
    },
    ratingReview: {
        borderBottomWidth: 1,
        borderColor: 'white',
        paddingBottom:0,
        marginBottom: 20,
        color: 'white',
        fontFamily:'Montserrat-Regular',
        fontFamily:'500',

    },
    submit: {
        width: '35%', marginLeft: '32%', marginTop: 10
    },
    signatureClose:{ color: 'white', textAlign: 'right' },
    signatureView:{ flex: 1 },
    signatureComment:{
        textAlign:'center',
        paddingLeft: 10,
        paddingBottom: 10,
        fontFamily:'Montserrat-Regular',
        fontFamily:'500',
        backgroundColor:'#0a428f',
        color:'white',
        fontSize: 15,
      },
      canvasContainerStyle:{ 
          backgroundColor: 'white', 
          flex: 1, maxHeight: '70%', padding: 0 },
      canvasStyle:{ backgroundColor: 'white', flex: 1, },
      clearComponent:{ marginRight:'15%', marginLeft:'5%' },
      
      clearText:{
        fontSize: 19,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:19,
        paddingRight:19,
        fontFamily:'Montserrat-Regular',
        fontFamily:'500',
        textAlign:'center',
        backgroundColor: "#d60c33",
        borderRadius:15,
        marginLeft:10,
        marginRight:8,
        marginBottom:20,
        alignContent:'flex-end',
        color:'white'
      }, 

      saveSignature:{ marginRight:'15%', marginLeft:'5%'},

      saveText:{
        fontSize: 19,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:19,
        paddingRight:19,
        fontFamily:'Montserrat-Regular',
        fontFamily:'500',
        borderRadius:15,
        backgroundColor: "#4BB543",
        textAlign:'center',
        marginBottom:20,
        marginRight:10,
        marginLeft:25,
        color:'white'
      },

});