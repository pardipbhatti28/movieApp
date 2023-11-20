import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import styled from 'styled-components';
import {deleteList} from '../../store/list/actions-creators';
import navigationStrings from '../../navigation/navigationStrings';
export const ListScreen = (props: any) => {
  const lists = useSelector((state: RootState) => state.listData.lists);
  console.log(lists);

  return (
    <View style={styles.container}>
      <FlatList
        data={lists}
        numColumns={2}
        renderItem={({item, index}) => {
          return (
            <View style={styles.wrapper}>
              <Text style={styles.txtName}>{item.name}</Text>
              <Text style={styles.txtDes}>{item.description}</Text>
              <View style={styles.divider} />

              <View style={styles.viewBtn}>
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate(navigationStrings.VIEW_MOVIES)
                  }>
                  <Text style={styles.btnTxtA}>View</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('handle delete')}>
                  <Text style={styles.btnTxtB}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#13163C',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    backgroundColor: 'white',
    height: 120,
    width: 200,
    margin: 5,
    borderRadius: 15,
    padding: 10,
  },
  txtName: {
    fontSize: 20,
    color: 'black',
  },
  txtDes: {
    color: 'black',
  },
  divider: {
    width: '100%',
    borderColor: 'black',
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: 10,
  },
  viewBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  btnTxtA: {color: '#0184FB', fontSize: 20},
  btnTxtB: {color: 'red', fontSize: 20},
});
