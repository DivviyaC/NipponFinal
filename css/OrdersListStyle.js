import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  scrollviewBg: {backgroundColor: '#fff', },
  cardstyle: {
    backgroundColor: '#0a428f',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
    borderRadius: 15,
  },
  cardView: {
    flexDirection: 'row',
    width: 'auto',
    paddingRight: 5,
    paddingLeft: 7,
  },
  cardContent: {
    flexDirection: 'row',
    width: '100%',
  },
  cardContentView: {
    flexDirection: 'column',
    padding: 5,
    width: '85%',
  },
  paragraph1: {
    fontSize: 19,
    paddingBottom: 5,
    fontFamily: 'Montserrat-Bold',
    fontWeight: '700',
    color: 'white',
  },
  paragraph2: {
    fontSize: 15,
    fontFamily: 'Montserrat-Bold',
    fontWeight: '700',
    color: 'white',
  },

  avatarOverlayContainerStyle: {
    backgroundColor: 'orange',
  },

  avatarTitleStyle: {
    fontWeight: 'bold',
  },

  avatarContainerStyle: {
    alignSelf: 'center',
  },
});
