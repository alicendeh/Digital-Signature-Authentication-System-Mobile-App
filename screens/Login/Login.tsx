import axios from 'axios';
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
} from '../../components';
import DefaultStyles from '../../constants/DefaultStyles';
import * as THEME from '../../constants/theme';
import styles from './Login.style';
import { api } from '../../utils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

type OwnProps = {
  navigation: any;
};

type Props = OwnProps;

// create a component
const Login = ({ navigation }: Props) => {
  const [userData, setUserData] = useState({
    phoneNumber: '',
    signature: '',
  });
  const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [goToHome, setGoToHome] = useState([]);

  const onLogin = async () => {
    console.log('boom');
    setLoading(true);
    try {
      let res = await api.post('/login', {
        phoneNumber: userData.phoneNumber,
        signature: userData.signature,
      });
      if (res.status == 200) {
        await AsyncStorage.setItem('DATA', JSON.stringify(res.data.user));
        await AsyncStorage.setItem('token', res.data.token);
        setGoToHome(res.data.user);
        setIsAuth(true);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err, 'ERROR ');
    }
  };

  useEffect(() => {
    if (isAuth) {
      if (Object.keys(goToHome).length > 4) {
        navigation.navigate('HomeNavigator');
      } else {
        navigation.navigate('Pin');
        console.log('iiii');
      }
    }
  }, [isAuth]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
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
            Welcome,
          </NativeUiText>

          <NativeUiText
            fontSize={14}
            textColor={THEME.colors.LIGHT_GREY}
            textType="bold"
          >
            Login in to your account
          </NativeUiText>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <NativeUiInput
              placeholder="Phone Number"
              onChangeText={(txt) =>
                setUserData({ ...userData, phoneNumber: txt })
              }
            />
          </View>

          <View style={styles.input}>
            <NativeUiInput
              placeholder="Signature"
              onChangeText={(txt) =>
                setUserData({ ...userData, signature: txt })
              }
            />
          </View>

          <View style={styles.forgetPwd}>
            <Pressable onPress={() => navigation.navigate('ForgetPassword')}>
              <NativeUiText textColor={THEME.colors.primary} textType="bold">
                Forgot key?
              </NativeUiText>
            </Pressable>
          </View>
        </View>
        <View style={styles.signupButton}>
          <NativeUiButton
            onPress={onLogin}
            label={loading ? <ActivityIndicator color={'#fff'} /> : 'Login'}
          />
        </View>
        <View
          style={[DefaultStyles.containerCenterColumn, styles.alreadyHaveAcct]}
        >
          <NativeUiText textType="bold">Don’t have an account?</NativeUiText>
          <TouchableOpacity
            style={styles.txt}
            onPress={() => navigation.navigate('Register')}
          >
            <NativeUiText
              textColor={THEME.colors.primary}
              fontSize={16}
              textType="bold"
            >
              Sign up
            </NativeUiText>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default Login;
