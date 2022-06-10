import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { NativeUiText } from '../../components';
import styles from './NativeUiInput.style';
import DefaultStyles from '../../constants/DefaultStyles';
import * as THEME from '../../constants/theme';

type NativeUiInputProps = {
  label?: string;
  labelColor?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  onChangeText?: (txt: string) => void;
  number?: boolean;
  phone?: string;
  email?: string;
  bottomText?: string;
  children?: React.ReactNode;
};

type Props = NativeUiInputProps;

const NativeUiInput = ({
  label,
  labelColor = '#ccc',
  placeholder,
  placeholderTextColor = '#A8A8A8',
  onChangeText,
  number,
  phone,
  email,
  bottomText,
  children,
}: Props) => {
  const inputType = email
    ? 'email-address'
    : number
    ? 'numeric'
    : phone
    ? 'phone-pad'
    : 'default';
  return (
    <View>
      <View>
        {label && (
          <NativeUiText
            style={styles(labelColor).labelItem}
            textColor={THEME.colors.primary}
            textType="bold"
          >
            {label}
          </NativeUiText>
        )}
      </View>

      <View style={styles(labelColor).inputContainer}>
        <TextInput
          keyboardType={inputType}
          onChangeText={onChangeText}
          autoCapitalize={'none'}
          placeholder={placeholder && placeholder}
          placeholderTextColor={placeholderTextColor && placeholderTextColor}
          style={{
            borderWidth: 1,
          }}
          style={styles(labelColor).textInputStyle}
        />
        {children && (
          <View style={DefaultStyles.containerCenterColumn}>{children}</View>
        )}
      </View>
      {bottomText && (
        <NativeUiText style={styles(labelColor).smallTextStyle}>
          {bottomText}
        </NativeUiText>
      )}
    </View>
  );
};

export default NativeUiInput;
