import React from 'react';
import {
  RefreshControl, StyleSheet, Text, SafeAreaView, Image, View, FlatList, Dimensions, ToastAndroid
} from 'react-native';

const enappdIcon = require('./assets/enappd.png');
const widthConst = Dimensions.get('screen').width;

export default function App() {
  const IMAGES = {
    image1: require('./assets/1.png'), image2: require('./assets/2.png'), image3: require('./assets/3.png'), image4: require('./assets/4.png'), image5: require('./assets/5.png'), image6: require('./assets/6.png'), image7: require('./assets/7.png'), image8: require('./assets/8.png'), image9: require('./assets/9.png'), image10: require('./assets/10.png'),
  }
  const initialData = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Susan Bert",
      image: "1"
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Neil Arms",
      image: "2"
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Carla Neice",
      image: "3"
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53cbb28ba",
      title: "Janice Hanner",
      image: "4"
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fcd91aa97f63",
      title: "James Sullivan",
      image: "5"
    }
  ];
  const [refreshing, setRefreshing] = React.useState(false);
  const [listData, setListData] = React.useState(initialData);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    if (listData.length < 10) {
      try {
        let response = await fetch(
          'http://www.mocky.io/v2/5e3315753200008abe94d3d8?mocky-delay=2000ms',
        );
        let responseJson = await response.json();
        console.log(responseJson);
        setListData(responseJson.result.concat(initialData));
        setRefreshing(false)
      } catch (error) {
        console.error(error);
      }
    }
    else{
      ToastAndroid.show('No more new data available', ToastAndroid.SHORT);
      setRefreshing(false)
    }
  }, [refreshing]);

  function Item({ title, image }) {
    return (
      <View style={styles.item}>
        <Image source={IMAGES['image' + image]} style={styles.thumbnail} />
        <Text style={styles.itemText}>{title}</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={listData}
        renderItem={({ item }) => <Item title={item.title} image={item.image} />}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        contentContainerStyle={styles.list}
      />
      <View style={styles.enappdWrapper}>
        <Image style={styles.enappdIcon} source={enappdIcon} />
      </View>
    </SafeAreaView>
  );
}
 