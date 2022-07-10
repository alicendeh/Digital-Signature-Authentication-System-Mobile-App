import React, { useState, useRef, useContext, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import styles from './Onboard.style';
import { ONBOARD_DATA } from '../../data';
import { AntDesign } from '@expo/vector-icons';
import * as THEME from '../../constants/theme';

const WIDTH = Dimensions.get('screen').width;

type OnboardingProps = {
  navigation: any;
};
const Onboard = ({ navigation }: OnboardingProps) => {
  const ref = useRef(null);
  const [currentElemIndex, setCurrentElemIndex] = useState(0);

  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / WIDTH);
    setCurrentElemIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentElemIndex + 1;
    if (currentElemIndex === ONBOARD_DATA.length - 1) {
      navigation.navigate('Login');
    } else {
      if (nextSlideIndex != ONBOARD_DATA.length) {
        const offset = nextSlideIndex * WIDTH;
        ref?.current?.scrollToOffset({ offset });
        setCurrentElemIndex(nextSlideIndex);
      }
    }
  };

  const goToPrevSlide = () => {
    const prevSlideIndex = currentElemIndex - 1;
    if (prevSlideIndex != ONBOARD_DATA.length) {
      const offset = prevSlideIndex * WIDTH;
      ref?.current?.scrollToOffset({ offset });
      setCurrentElemIndex(prevSlideIndex);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />

      <FlatList
        ref={ref}
        keyExtractor={(_, index) => index}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onMomentumScrollEnd={updateCurrentSlideIndex}
        data={ONBOARD_DATA}
        renderItem={({ item }) => (
          <View style={styles.main}>
            <View>
              <Text style={styles.heading}>{item.title} </Text>
              <Text style={styles.body}>{item.body}</Text>
            </View>

            <View style={styles.imageContainer}>
              <View style={styles.annimView}>
                <Image source={item.img} style={styles.img} />
              </View>
            </View>
          </View>
        )}
      />

      <FooterComponent
        goToNextSlide={goToNextSlide}
        goToPrevSlide={goToPrevSlide}
        currentElemIndex={currentElemIndex}
      />
    </SafeAreaView>
  );
};

export default Onboard;

type Props = {
  currentElemIndex: number;
  goToNextSlide: () => void;
  goToPrevSlide: () => void;
};

const FooterComponent = ({
  currentElemIndex,
  goToNextSlide,
  goToPrevSlide,
}: Props) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.iconView} onPress={goToPrevSlide}>
        <AntDesign name="arrowleft" size={24} color={THEME.colors.primary} />
      </TouchableOpacity>
      <View style={styles.indicatorView}>
        {ONBOARD_DATA.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentElemIndex === index && {
                backgroundColor: THEME.colors.primary,
                width: 25,
              },
            ]}
          ></View>
        ))}
      </View>
      <TouchableOpacity
        onPress={goToNextSlide}
        style={[styles.iconView, styles.rightIcon]}
      >
        <AntDesign name="arrowright" size={24} color={THEME.colors.white} />
      </TouchableOpacity>
    </View>
  );
};
