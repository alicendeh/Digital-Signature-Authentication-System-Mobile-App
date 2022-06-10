import React from 'react';
import { SafeAreaView, View } from 'react-native';
import styles from './Selection.style';
import * as THEME from '../../constants/theme';
import { NativeUiText, NativeUiButton, NativeUiHeader } from '../../components';
import { FontAwesome5 } from '@expo/vector-icons';
import DefaultStyle from '../../constants/DefaultStyles';

type Props = {
  navigation: any;
};

const Selection = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <NativeUiHeader navigation={navigation} />
        <NativeUiText
          style={styles.heading}
          textType={'semiBold'}
          fontSize={18}
        >
          Hey!! Welcome to AutoPay
        </NativeUiText>
        <NativeUiText textType={'semiBold'} textColor={THEME.colors.LIGHT_GREY}>
          Select your role to get started
        </NativeUiText>
        <View style={[DefaultStyle.containerRow, styles.cardContainer]}>
          <View style={[styles.card, DefaultStyle.containerCenterColumn]}>
            <FontAwesome5 name="user-cog" size={24} color="#FFCF58" />
            <NativeUiText style={styles.txt}>Employer</NativeUiText>
          </View>
          <View style={[styles.card, DefaultStyle.containerCenterColumn]}>
            <FontAwesome5 name="user-cog" size={24} color="#6D99EF" />
            <NativeUiText style={styles.txt}>Employee</NativeUiText>
          </View>
        </View>
      </View>
      <View style={styles.btn}>
        <NativeUiButton
          onPress={() => navigation.navigate('Login')}
          label={'Get Started'}
        />
      </View>
    </SafeAreaView>
  );
};

export default Selection;
