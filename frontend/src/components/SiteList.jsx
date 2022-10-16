import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      backgroundColor: 'white',
      margin: '5px'
    },
  });
  
export const SiteList = (props) => {
    return (
      <View style={styles.container}>
        <FlatList
          data={props.data}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        />
      </View>
    );
}
  
export default SiteList;