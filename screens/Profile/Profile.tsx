import React from 'react';
import { SafeAreaView, View, TouchableOpacity } from 'react-native';
import styles from './Profile.style';
import * as THEME from '../../constants/theme';
import { NativeUiText, NativeUiButton, NativeUiHeader } from '../../components';
import { FontAwesome5 } from '@expo/vector-icons';
import DefaultStyle from '../../constants/DefaultStyles';

type Props = {
  navigation: any;
};

const Profile = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
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
            onPress={() => navigation.navigate('PerssonalDetails')}
            style={[styles.card, DefaultStyle.containerCenterColumn]}
          >
            <FontAwesome5 name="user-cog" size={24} color="#FFCF58" />
            <NativeUiText style={styles.txt}>Personal Details</NativeUiText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('UpdateKey')}
            style={[styles.card, DefaultStyle.containerCenterColumn]}
          >
            <FontAwesome5 name="user-cog" size={24} color="#6D99EF" />
            <NativeUiText style={styles.txt}>Key</NativeUiText>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
