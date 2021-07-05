import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  scrollviewBg: {
    backgroundColor: '#e1e1dd',
    height:'100%'
  },
  heading: {
    
    width:'100%',
    fontFamily: 'Montserrat-Bold',
    fontWeight: '700',
    fontSize: 19,
    paddingTop:15,
    paddingBottom:15,
    paddingRight:15,
    paddingLeft:15,
    top:-2,
    color: 'white',
    backgroundColor: '#0a428f',
    borderRadius:4
    
  },
  cardstyle: {
    backgroundColor: 'white',
    margin:20,
    paddingBottom:15,
    borderColor:'#0a428f',
    borderWidth:1,
    borderRadius:5
    
  },
  cardView: {
    flexDirection: 'row',
    padding: 19,
    backgroundColor: 'white',
  },
  cardView1: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'white',
  },
  addressView: {
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  paragraph: {
    paddingLeft: 15,
    fontFamily: 'Montserrat-Regular',
    fontFamily: '500',
    color: 'black',
    backgroundColor: 'white',
    fontSize: 15,
  },

  quantity: {
    flexDirection: 'row',
  },
  quantityview: {
    flexDirection: 'row',
    padding: 20,
    width: '50%',
    backgroundColor: 'white',
  },
  submitView: {
    flexDirection: 'row',
    paddingTop: 10,
    backgroundColor: 'white',
  },
  submitundelivered: {
    width: '40%',
    backgroundColor: '#d60c33',
    paddingLeft: '14%',
    borderRadius: 15,
    marginLeft:15
  },
  submitdelivered: {
    width: '40%',
    backgroundColor: '#4BB543',
    paddingLeft: '14%',
    marginLeft: '10%',
    marginRight:15,
    borderRadius: 15,
  },
});
