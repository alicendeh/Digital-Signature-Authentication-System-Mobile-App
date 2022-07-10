import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './UpdateKey.style';
import * as THEME from '../../constants/theme';
import { NativeUiText, NativeUiButton, NativeUiHeader } from '../../components';
import { FontAwesome5 } from '@expo/vector-icons';
import DefaultStyle from '../../constants/DefaultStyles';
import NativeUiInput from '../../components/NativeUiInput/NativeUiInput';
import { api } from '../../utils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';
import * as Clipboard from 'expo-clipboard';

type Props = {
  navigation: any;
};

const UpdateKey = ({ navigation }: Props) => {
  const [whatToUpdate, setWhatToUpdate] = useState('');
  const [token, settoken] = useState('');

  const [keyPairData, setKeyPairData] = useState({
    pin: '',
    phoneNumber: '',
  });
  const [loading, setLoading] = useState(false);
  const [displayPopup, setDisplayPopup] = useState(false);
  const [signature, setSignature] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState('');
  const [passcodeDataSet, setPasscodeDataSet] = useState({
    passcode1: '',
    passcode2: '',
  });
  const [passcodeUpdate, setPasscodeUpdate] = useState(false);

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    let token: any = await AsyncStorage.getItem('token');

    settoken(token);
  };

  const onUpdate = async () => {
    setLoading(true);
    const config = {
      headers: {
        'secura-token': token,
      },
    };
    try {
      if (whatToUpdate === 'key') {
        let res = await api.put(
          '/updateKey',
          {
            phoneNumber: keyPairData.phoneNumber,
            pin: keyPairData.pin,
          },
          config
        );

        if (res.status === 200) {
          setSignature(res.data.signature);
          setLoading(false);
          setDisplayPopup(true);
        } else {
          console.log(res, 'res');
          setError(err.response.data.message);
          setLoading(false);
        }
      } else {
        let res = await api.put(
          '/updatePasscode',
          {
            passcode1: passcodeDataSet.passcode1,
            passcode2: passcodeDataSet.passcode2,
          },
          config
        );

        if (res.status === 200) {
          setLoading(false);
          setPasscodeUpdate(true);
          setDisplayPopup(true);
        } else {
          console.log(res, 'res');
          setError(err.response.data.message);
          setLoading(false);
        }
      }
    } catch (err) {
      console.log(err, 'ERROR');
      setLoading(false);
    }
  };

  const copyToBoard = async () => {
    await Clipboard.setStringAsync(signature);
    setIsCopied(true);
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
        {passcodeUpdate ? (
          <View>
            <View style={styles.containerModal}>
              <View style={styles.topBox}>
                <NativeUiText fontSize={36}>🎉</NativeUiText>
                <View style={[DefaultStyle.containerCenterRow]}>
                  <NativeUiText fontSize={18} textType={'bold'}>
                    passcode updated successfully!!
                  </NativeUiText>
                </View>
              </View>
              <View>
                <NativeUiText
                  style={styles.btn}
                  textType={'bold'}
                  textColor={THEME.colors.primary}
                >
                  You can now use your new passcode to login
                </NativeUiText>
              </View>

              <View style={styles.btn}>
                <NativeUiButton
                  label="Close"
                  onPress={() => {
                    setDisplayPopup(false);
                  }}
                />
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.containerModal}>
            <View style={styles.topBox}>
              <NativeUiText fontSize={36}>🎉</NativeUiText>
              <NativeUiText fontSize={21} textType={'bold'}>
                Keys updated successfully!!
              </NativeUiText>
            </View>
            <View>
              <NativeUiText
                style={styles.btn}
                textType={'bold'}
                textColor={THEME.colors.primary}
              >
                Below is your signature which you wil use to login. Make sure
                not to share this with anyone
              </NativeUiText>
            </View>
            <View style={styles.copyBox}>
              <View style={styles.signature}>
                <NativeUiText
                  numberOfLines={2}
                  fontSize={12}
                  textType={'medium'}
                >
                  {signature && signature}
                </NativeUiText>
              </View>
              <TouchableOpacity onPress={copyToBoard} style={styles.copy}>
                <NativeUiText fontSize={12} textType={'medium'}>
                  {isCopied ? 'Copied!' : 'Copy'}
                </NativeUiText>
              </TouchableOpacity>
            </View>
            <View style={styles.btn}>
              <NativeUiButton
                label="Login"
                onPress={() => {
                  navigation.navigate('Login');
                  setDisplayPopup(false);
                }}
              />
            </View>
          </View>
        )}
      </Modal>
      <View style={styles.main}>
        <NativeUiHeader navigation={navigation} />
        <NativeUiText
          style={styles.heading}
          textType={'semiBold'}
          fontSize={18}
        >
          Hey!! Welcome to Secura
        </NativeUiText>
        <NativeUiText textType={'semiBold'} textColor={THEME.colors.LIGHT_GREY}>
          Select which settings to update
        </NativeUiText>
        <View style={[DefaultStyle.containerRow, styles.cardContainer]}>
          <TouchableOpacity
            onPress={() => setWhatToUpdate('key')}
            style={[
              styles.card,
              DefaultStyle.containerCenterColumn,
              whatToUpdate === 'key' && {
                backgroundColor: THEME.colors.primary,
              },
            ]}
          >
            <FontAwesome5 name="user-cog" size={24} color="#FFCF58" />
            <NativeUiText
              style={styles.txt}
              textColor={whatToUpdate === 'key' ? '#fff' : '#000'}
            >
              Key Pairs
            </NativeUiText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setWhatToUpdate('passcode')}
            style={[
              styles.card,
              DefaultStyle.containerCenterColumn,
              whatToUpdate === 'passcode' && {
                backgroundColor: THEME.colors.primary,
              },
            ]}
          >
            <FontAwesome5 name="user-cog" size={24} color="#6D99EF" />
            <NativeUiText
              textColor={whatToUpdate === 'passcode' ? '#fff' : '#000'}
              style={[styles.txt]}
            >
              Passcode
            </NativeUiText>
          </TouchableOpacity>
        </View>

        {whatToUpdate === 'key' && (
          <View>
            <View style={styles.box}>
              <View>
                <NativeUiInput
                  onChangeText={(txt) =>
                    setKeyPairData({ ...keyPairData, pin: txt })
                  }
                  label="Enter your pin"
                  placeholder="pin"
                />
              </View>
            </View>
            <View style={styles.box}>
              <View>
                <NativeUiInput
                  onChangeText={(txt) =>
                    setKeyPairData({ ...keyPairData, phoneNumber: txt })
                  }
                  label="Enter your phone number"
                  placeholder="phone number"
                />
              </View>
            </View>
          </View>
        )}

        {whatToUpdate === 'passcode' && (
          <>
            <View style={styles.box}>
              <NativeUiInput
                label="Enter your old passcode"
                placeholder="Old Passcode"
                onChangeText={(txt) =>
                  setPasscodeDataSet({ ...passcodeDataSet, passcode1: txt })
                }
              />
            </View>

            <View style={styles.box}>
              <NativeUiInput
                label="Enter your New Passcode"
                placeholder="New Passcode"
                onChangeText={(txt) =>
                  setPasscodeDataSet({ ...passcodeDataSet, passcode2: txt })
                }
              />
            </View>
          </>
        )}
      </View>

      <View style={styles.btnUpdate}>
        <NativeUiButton
          label={loading ? <ActivityIndicator color={'#fff'} /> : 'Update'}
          onPress={onUpdate}
        />
      </View>
    </SafeAreaView>
  );
};

export default UpdateKey;
