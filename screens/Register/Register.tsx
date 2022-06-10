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
import styles from './Register.style';

type OwnProps = {
  navigation: any;
};

type Props = OwnProps;

const Register = ({ navigation }: Props) => {
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
        <View style={styles.forgetPwd}>
          <NativeUiText textColor={THEME.colors.textSecondary}>
            We will send your public key to your
          </NativeUiText>
          <NativeUiText
            style={styles.email}
            textColor={THEME.colors.primary}
            textType="bold"
          >
            email address
          </NativeUiText>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <NativeUiInput placeholder="Email address" />
          </View>
        </View>

        <View style={styles.signupButton}>
          <NativeUiButton label="Register" />
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
