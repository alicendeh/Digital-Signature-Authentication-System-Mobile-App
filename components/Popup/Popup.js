import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './Popup.style';
import NativeUiText from '../NativeUiText/NativeUiText';
import NativeUiButton from '../NativeUiButton/NativeUiButton';
import * as THEME from '../../constants/theme';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Popup({
  type,
  amount,
  message,
  btnText,
  auxBtnText,
  onPress,
}) {
  const getIcon = () => {
    switch (type) {
      case 'error':
        return (
          <View style={styles.errorIconBox}>
            <AntDesign name="exclamation" size={32} color="#FF001E" />
          </View>
        );

      case 'success':
        return <NativeUiText fontSize={36}>🎉</NativeUiText>;

      case 'warning':
        return <Ionicons name="ios-warning" size={42} color="#FE9500" />;

      default:
        break;
    }
  };

  const getHeader = () => {
    if (type === 'error') {
      return 'Error!!!';
    }
    if (type === 'warning') {
      return 'Warning!!!';
    }
    if (type === 'success') {
      return 'Congrats, All Done!';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <View style={styles.iconBox}>{getIcon()}</View>
        <NativeUiText textType="medium" fontSize={25}>
          {getHeader()}
        </NativeUiText>
        <NativeUiText
          textType="medium"
          textColor="#808080"
          style={{
            textAlign: 'center',
          }}
        >
          {amount && (
            <NativeUiText textType="semiBold" textColor={THEME.colors.primary}>
              Signature
            </NativeUiText>
          )}{' '}
          {message}
        </NativeUiText>
      </View>
      <View style={styles.bottomBox}>
        <NativeUiButton onPress={onPress} label={btnText} btnWidth="100%" />
        <TouchableOpacity style={styles.btnBox}>
          <NativeUiText textType="medium" fontSize={18}>
            {auxBtnText}
          </NativeUiText>
        </TouchableOpacity>
      </View>
    </View>
  );
}
