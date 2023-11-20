import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {moviesData} from '../../components/movieData';

export const ViewMovies = () => {
  const [selectedMovies, setSelectedMovies] = useState<string[]>([]);

  return (
    <View style={{backgroundColor: '#13163C', flex: 1}}>
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
          data={moviesData}
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
