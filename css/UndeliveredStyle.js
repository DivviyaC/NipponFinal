import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  scrollviewBg: {backgroundColor: 'white'},
  viewStyle: {margin: 15, backgroundColor: '#0a428f'},
  heading: {
    alignItems: 'stretch',
    fontSize: 19,
    color: '#808080',
    margin: 10,
    fontFamily: 'Montserrat-Bold',
    fontWeight: '700',
    color: 'white',
    backgroundColor: '#0a428f',
  },
  cardStyle: {
    margin: 15,
    borderWidth: 5,
    borderColor: 'red',
    padding: 25,
    backgroundColor: '#0a428f',
  },
  cardView: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#0a428f',
  },
  closedIcon: {
    width: '50%',
    paddingLeft: 50,
    paddingBottom: 30,
    paddingTop: 30,
  },
  closed: {
    width: '50%',
    paddingTop: 40,
    textAlign: 'center',
    fontSize: 19,
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontWeight: '700',
  },
});
