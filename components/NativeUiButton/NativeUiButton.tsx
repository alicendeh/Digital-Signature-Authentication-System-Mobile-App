import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import * as THEME from '../../constants/theme';
import { NativeUiText } from '../../components';
import DefaultStyles from '../../constants/DefaultStyles';

type NativeUiButtonProps = {
  label?: string;
  onPress?: any;
  btnColor?: string;
  style?: object;
  textStyle?: string;
  textColor?: string;
  btnWidth?: string | number;
  btnRadius?: number;
};

type Props = NativeUiButtonProps;

export const NativeUiButton = ({
  label,
  onPress,
  btnColor = THEME.colors.primary,
  style,
  textColor = THEME.colors.white,
  btnWidth = '100%',
  btnRadius = 10,
}: Props) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            {
              backgroundColor: btnColor,
              borderRadius: btnRadius,
              width: btnWidth,
              height: 55,
            },
            style,
            DefaultStyles.containerCenterColumn,
          ]}
        >
          <NativeUiText fontSize={16} textColor={textColor} textType={'bold'}>
            {label}
          </NativeUiText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NativeUiButton;
