//import liraries
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';
import * as THEME from '../../constants/theme';
import { NativeUiText } from '../../components';
import styles from './NativeUiHeader.styles';

type OwnProps = {
  navigation: any;
  headerTitle?: string;
  arrowShown?: boolean;
  iconName?: string | any;
  onPress?: any;
};

type Props = OwnProps;

// create a component
const NativeUiHeader = ({
  navigation,
  headerTitle,
  arrowShown = true,
  iconName,
  onPress,
}: Props) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        {arrowShown && (
          <Entypo name="chevron-left" size={24} color={THEME.colors.primary} />
        )}
      </TouchableOpacity>
      {headerTitle && (
        <NativeUiText
          textColor={THEME.colors.primary}
          fontSize={16}
          textType={'bold'}
        >
          {headerTitle}
        </NativeUiText>
      )}
      <TouchableOpacity onPress={onPress}>
        {iconName && (
          <Ionicons name={iconName} size={24} color={THEME.colors.primary} />
        )}
      </TouchableOpacity>
    </View>
  );
};

//make this component available to the app
export default NativeUiHeader;
