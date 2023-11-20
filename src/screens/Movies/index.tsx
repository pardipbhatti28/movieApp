import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {moviesData} from '../../components/movieData';
import {movies} from '../../components/data';

export const SelectMovies = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#13163C'}}>
      <View
        style={{
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 4,
          overflow: 'hidden',
        }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={movies}
          numColumns={2}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  marginTop: 10,
                  margin: 2,
                  height: 300,
                  width: 200,
                  borderRadius: 15,
                  padding: 5,
                  backgroundColor: '#0E0329',
                  overflow: 'hidden',
                }}
                onLongPress={() => console.log('select')}>
                <Text>{item.title}</Text>
                <Image
                  style={{
                    height: 261,
                    width: 200,
                    borderRadius: 15,
                    alignSelf: 'center',
                  }}
                  source={{uri: item.image}}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};
