import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Pressable,
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

type OwnProps = {
  navigation: any;
};

type Props = OwnProps;

// create a component
const Login = ({ navigation }: Props) => {
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
            <NativeUiInput placeholder="Private key" />
          </View>

          <View style={styles.input}>
            <NativeUiInput placeholder="Password" />
          </View>

          <View style={styles.forgetPwd}>
            <Pressable onPress={() => navigation.navigate('ForgetPassword')}>
              <NativeUiText textColor={THEME.colors.primary} textType="bold">
                Forget Password?
              </NativeUiText>
            </Pressable>
          </View>
        </View>
        <View style={styles.signupButton}>
          <NativeUiButton
            label="Login"
            onPress={() => navigation.navigate('HomeNavigator')}
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
