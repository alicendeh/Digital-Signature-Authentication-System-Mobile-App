import React from 'react';
import { TextStyle, Text } from 'react-native';

type NativeUiTextProps = {
  children: React.ReactNode;
};

type OwnProps = {
  style?: TextStyle | TextStyle[];
  textType?: 'regular' | 'bold' | 'light' | 'semiBold' | 'medium';
  textColor?: string;
  fontSize?: number;
  numberOfLines?: number;
};

type Props = NativeUiTextProps & OwnProps;

const NativeUiText = ({
  children,
  textType = 'regular',
  style,
  textColor,
  numberOfLines,
  fontSize = 14,
}: Props) => {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        passedStyles,
        {
          fontSize: fontSize,
          color: textColor,
          fontWeight:
            textType === 'light'
              ? '100'
              : textType === 'regular'
              ? 'normal'
              : textType === 'medium'
              ? '500'
              : textType === 'semiBold'
              ? '700'
              : textType === 'bold' && 'bold',
        },
      ]}
    >
      {children}
    </Text>
  );
};

export default NativeUiText;
