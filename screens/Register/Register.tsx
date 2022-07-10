import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {
  NativeUiText,
  NativeUiButton,
  NativeUiHeader,
  NativeUiInput,
  Popup,
} from '../../components';
import DefaultStyles from '../../constants/DefaultStyles';
import * as THEME from '../../constants/theme';
import styles from './Register.style';
import { api } from '../../utils/api';
import Modal from 'react-native-modal';
import * as Clipboard from 'expo-clipboard';

type OwnProps = {
  navigation: any;
};

type Props = OwnProps;

const Register = ({ navigation }: Props) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [displayPopup, setDisplayPopup] = useState(false);
  const [signature, setSignature] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const onRegister = async () => {
    setLoading(true);

    try {
      setLoading(true);
      const res = await api.post('/CreateAccount', { phoneNumber });
      if (res.status === 200) {
        setSignature(res.data.signature);
        setLoading(false);
        setDisplayPopup(true);
      } else {
        console.log(res, 'res');
        setError(err.response.data.message);
        setLoading(false);
        console.log(res);
      }
    } catch (err) {
      setLoading(false);

      setError('error');
    }
  };

  const copyToBoard = async () => {
    await Clipboard.setStringAsync(signature);
    setIsCopied(true);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Modal
          isVisible={displayPopup}
          onBackdropPress={() => {
            setDisplayPopup(false);
            setLoading(false);
          }}
        >
          <View style={styles.containerModal}>
            <View style={styles.topBox}>
              <NativeUiText fontSize={36}>🎉</NativeUiText>
              <NativeUiText fontSize={21} textType={'bold'}>
                Welcome on board!!
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
        </Modal>

        <NativeUiHeader navigation={navigation} />
        <View
          style={[DefaultStyles.containerCenterColumn, styles.logoContainer]}
        >
          <Image source={require('../../assets/images/logo.png')} />
        </View>
        <View style={styles.introContainer}>
          <NativeUiText
            fontSize={30}
            textColor={THEME.colors.primary}
            textType="bold"
          >
            Get Started
          </NativeUiText>
          <NativeUiText
            fontSize={14}
            textColor={THEME.colors.LIGHT_GREY}
            textType="bold"
          >
            Create an account
          </NativeUiText>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <NativeUiInput
              placeholder="Phone Number"
              onChangeText={(txt) => setPhoneNumber(txt)}
            />
          </View>
        </View>

        <View style={styles.signupButton}>
          <NativeUiButton
            label={loading ? <ActivityIndicator color={'#fff'} /> : 'Register'}
            onPress={onRegister}
          />
        </View>
        <View
          style={[DefaultStyles.containerCenterColumn, styles.alreadyHaveAcct]}
        >
          <NativeUiText textType="bold">Already have an account? </NativeUiText>
          <TouchableOpacity
            style={styles.txt}
            onPress={() => navigation.navigate('Login')}
          >
            <NativeUiText
              textColor={THEME.colors.primary}
              fontSize={16}
              textType="bold"
            >
              Login
            </NativeUiText>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
