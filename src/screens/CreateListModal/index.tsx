import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import navigationStrings from '../../navigation/navigationStrings';
import {useDispatch} from 'react-redux';
import {addList} from '../../store/list/actions-creators';

const CREATE_LIST = Yup.object().shape({
  name: Yup.string().required('* Name is required'),
  description: Yup.string().required(' * Description is required'),
});

export const CreateList = (props: any) => {
  const [name, setName] = useState<string>('');
  const [desc, setDesc] = useState<string>('');

  const dispatch = useDispatch();

  return (
    <View style={{backgroundColor: '#13163C', flex: 1, alignItems: 'center'}}>
      <Formik
        validationSchema={CREATE_LIST}
        initialValues={{
          name: '',
          description: '',
        }}
        onSubmit={values => {
          dispatch(addList(values));
          props.navigation.navigate(navigationStrings.HOME_SCREEN);
        }}>
        {({setFieldValue, handleSubmit, errors}) => (
          <>
            <View style={{marginTop: 20}}>
              <Text style={{color: 'white', padding: 10, fontSize: 20}}>
                Name
              </Text>
              <TextInput
                style={{
                  marginTop: 2,
                  borderWidth: 2,
                  height: 40,
                  width: 350,
                  borderColor: 'white',
                  borderRadius: 15,
                  padding: 10,
                }}
                onChangeText={(value: any) => setFieldValue('name', value)}
                placeholder=" Name"
                placeholderTextColor={'gray'}
              />
              {errors.name && (
                <Text style={{color: 'red', margin: 10}}>{errors.name}</Text>
              )}
            </View>
            <View style={{marginTop: 20}}>
              <Text style={{color: 'white', padding: 10, fontSize: 20}}>
                Description
              </Text>
              <TextInput
                style={{
                  marginTop: 2,
                  borderWidth: 2,
                  height: 40,
                  width: 350,
                  borderColor: 'white',
                  borderRadius: 15,
                  padding: 10,
                }}
                onChangeText={(value: any) =>
                  setFieldValue('description', value)
                }
                placeholder="Description"
                placeholderTextColor={'gray'}
              />
              {errors.description && (
                <Text style={{color: 'red', margin: 10}}>
                  {errors.description}
                </Text>
              )}
            </View>
            <TouchableOpacity
              style={{
                borderWidth: 2,
                marginTop: 25,
                backgroundColor: '#0184FB',
                width: 300,
                height: 45,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 1,
              }}
              onPress={handleSubmit}>
              <Text style={{fontSize: 20, textAlign: 'center'}}>Create</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};
