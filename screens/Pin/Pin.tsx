import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { NativeUiText, NativeUiButton, Popup } from '../../components';
import DefaultStyles from '../../constants/DefaultStyles';
import * as THEME from '../../constants/theme';
import { api } from '../../utils/api';
import styles from './pin.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';

const Pin = () => {
  const [pinDataValues, setPinDataValues] = useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
    p5: '',
    p6: '',
  });
  const { p1, p2, p3, p4, p5, p6 } = pinDataValues;
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [token, settoken] = useState('');
  const [displayPopup, setDisplayPopup] = useState(false);

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    let token: any = await AsyncStorage.getItem('token');
    settoken(token);
  };

  const onAddPin = async () => {
    setLoading(true);
    const config = {
      headers: {
        'secura-token': token,
      },
    };
    let res = await api.put(
      'addPin',
      {
        pin: `${p1}${p2}${p3}${p4}${p5}${p6}`,
      },
      config
    );
    if (res.status === 200) {
      setLoading(false);
      setDisplayPopup(true);
    } else {
      setLoading(false);

      console.log(res, 'error');
    }

    try {
    } catch (err) {
      setLoading(false);
      console.log(err, 'error here');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Modal
        isVisible={displayPopup}
        onBackdropPress={() => {
          setDisplayPopup(false);
          setLoading(false);
        }}
      >
        <Popup
          type="success"
          btnText="Continue"
          auxBtnText="Go to home"
          message="Your pin was successfully created"
          onPress={() => {
            navigation.navigate('HomeNavigator');
            setDisplayPopup(false);
          }}
        />
      </Modal>

      <View style={styles.main}>
        <View
          style={{
            flex: 1,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo name="cross" size={21} />
          </TouchableOpacity>
          <View style={DefaultStyles.containerCenterRow}>
            <NativeUiText fontSize={22} textType={'medium'}>
              Create Passcode
            </NativeUiText>
          </View>
          <View style={styles.pinValueContainer}>
            <View style={[styles.pinBox]}>
              <TextInput
                style={styles.input}
                maxLength={1}
                keyboardType={'number-pad'}
                onChangeText={(txt) =>
                  setPinDataValues({ ...pinDataValues, p1: txt })
                }
              />
            </View>
            <View style={[styles.pinBox]}>
              <TextInput
                style={styles.input}
                maxLength={1}
                keyboardType={'number-pad'}
                onChangeText={(txt) =>
                  setPinDataValues({ ...pinDataValues, p2: txt })
                }
              />
            </View>
            <View style={[styles.pinBox]}>
              <TextInput
                style={styles.input}
                maxLength={1}
                keyboardType={'number-pad'}
                onChangeText={(txt) =>
                  setPinDataValues({ ...pinDataValues, p3: txt })
                }
              />
            </View>
            <View style={[styles.pinBox]}>
              <TextInput
                style={styles.input}
                maxLength={1}
                keyboardType={'number-pad'}
                onChangeText={(txt) =>
                  setPinDataValues({ ...pinDataValues, p4: txt })
                }
              />
            </View>
            <View style={[styles.pinBox]}>
              <TextInput
                style={styles.input}
                maxLength={1}
                keyboardType={'number-pad'}
                onChangeText={(txt) =>
                  setPinDataValues({ ...pinDataValues, p5: txt })
                }
              />
            </View>
            <View style={[styles.pinBox]}>
              <TextInput
                style={styles.input}
                maxLength={1}
                keyboardType={'number-pad'}
                onChangeText={(txt) =>
                  setPinDataValues({ ...pinDataValues, p6: txt })
                }
              />
            </View>
          </View>
          <NativeUiText style={styles.txt}>
            This pin will be used to perform operations within the app and reset
            you keys
          </NativeUiText>
        </View>
        <NativeUiButton
          style={styles.passcode}
          label={
            loading ? <ActivityIndicator color={'#fff'} /> : 'Create Passcode'
          }
          onPress={onAddPin}
        />
      </View>
    </SafeAreaView>
  );
};

export default Pin;
