import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {
  NativeUiHeader,
  NativeUiText,
  NativeUiInput,
  NativeUiButton,
} from '../../components';
import styles from './PerssonalDetails.style';
import DefaultStyles from '../../constants/DefaultStyles';
import * as THEME from '../../constants/theme';
import {
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
  Feather,
} from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../utils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PerssonalDetails = () => {
  const navigation = useNavigation();

  const [error, setError] = useState(null);
  const [displayPopup, setDisplayPopup] = useState(false);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
  });
  const [loading, setLoading] = useState(false);
  const [token, settoken] = useState('');
  const [getUsersData, setGetUsersData] = useState(false);
  const [userInfo, setUserInfo] = useState([]);

  let { firstName, lastName, email, location } = userData;

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    let token: any = await AsyncStorage.getItem('token');
    settoken(token);
  };
  useEffect(() => {
    loadUser();
  }, [token, displayPopup]);
  const loadUser = async () => {
    console.log(token, 'here');

    setGetUsersData(true);

    console.log(token, ' in ohhjoifjlhere');

    const config = {
      headers: {
        'secura-token': token,
      },
    };
    try {
      let res = await api.get('/user', config);

      if (res.status === 200) {
        setUserInfo(res.data.user);
        setGetUsersData(false);
      } else {
        console.log(res, 'response');
        setGetUsersData(false);
      }
    } catch (err) {
      setGetUsersData(false);

      console.log('failed', err);
    }
  };

  const onEdit = async () => {
    try {
      setLoading(true);
      const config = {
        headers: {
          'secura-token': token,
        },
      };

      let res = await api.put(
        'addPin',
        {
          firstName,
          lastName,
          email,
          location,
        },
        config
      );
      setLoading(true);

      if (res.status === 200) {
        console.log(res, 'response');
        setDisplayPopup(false);
      } else {
        console.log(res, 'response');
        setDisplayPopup(false);
      }
    } catch (err) {
      setLoading(true);

      console.log('failed', err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        isVisible={displayPopup}
        onBackdropPress={() => setDisplayPopup(false)}
      >
        <View style={styles.containerModal}>
          <View style={DefaultStyles.containerCenterRow}>
            <NativeUiText fontSize={18} textType="semiBold">
              Modifiy your personal details
            </NativeUiText>
          </View>
          <View style={styles.input}>
            <NativeUiInput
              label="First Name"
              placeholder="Please provide your first name"
              onChangeText={(txt) =>
                setUserData({ ...userData, firstName: txt })
              }
            />
          </View>

          <View style={styles.input}>
            <NativeUiInput
              onChangeText={(txt) =>
                setUserData({ ...userData, lastName: txt })
              }
              label="Last Name"
              placeholder="Please provide your last name"
            />
          </View>

          <View style={styles.input}>
            <NativeUiInput
              onChangeText={(txt) => setUserData({ ...userData, email: txt })}
              label="Email Address"
              placeholder="Please provide a valid email address"
            />
          </View>
          <View style={styles.input}>
            <NativeUiInput
              onChangeText={(txt) =>
                setUserData({ ...userData, location: txt })
              }
              label="Location"
              placeholder="Please provide a valid Location"
            />
          </View>

          <View style={styles.btn}>
            <NativeUiButton
              label={loading ? <ActivityIndicator color={'#fff'} /> : 'Modify'}
              onPress={onEdit}
            />
          </View>
        </View>
      </Modal>
      <View style={styles.header}>
        <NativeUiHeader
          navigation={navigation}
          headerTitle={'My Settings'}
          arrowShown={true}
          // iconName={'ios-notifications-outline'}
        />
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.main}>
          <View style={[DefaultStyles.containerRow, styles.userIdentity]}>
            <NativeUiText fontSize={30} textType={'bold'}>
              {userInfo?.firstName}
              <NativeUiText fontSize={30} textType={'bold'}>
                {' '}
                {userInfo?.lastName}
              </NativeUiText>
            </NativeUiText>
            <View>
              <MaterialIcons
                name="verified"
                size={14}
                color={THEME.colors.primary}
              />
            </View>
          </View>
          <View style={styles.verified}>
            <NativeUiText
              fontSize={16}
              textType={'medium'}
              textColor={'rgba(0, 166, 17, 1)'}
            >
              SECURA
            </NativeUiText>
          </View>

          <View style={styles.settings}>
            <NativeUiText fontSize={16} textType={'medium'}>
              Settings
            </NativeUiText>
            <View style={styles.dropDown}>
              <TouchableOpacity
                onPress={() => setDisplayPopup(true)}
                style={[DefaultStyles.containerRow, styles.card]}
              >
                <NativeUiText
                  textColor={THEME.colors.LIGHT_GREY}
                  textType={'medium'}
                >
                  Modify Settings
                </NativeUiText>
                <FontAwesome
                  name="edit"
                  size={24}
                  color={THEME.colors.primary}
                />
              </TouchableOpacity>

              <View style={[DefaultStyles.containerRow, styles.card]}>
                <NativeUiText
                  textColor={THEME.colors.LIGHT_GREY}
                  textType={'medium'}
                >
                  {userInfo?.email}
                </NativeUiText>
                <MaterialCommunityIcons
                  name="email-seal-outline"
                  size={24}
                  color={THEME.colors.primary}
                />
              </View>

              <View style={[DefaultStyles.containerRow, styles.card]}>
                <NativeUiText
                  textColor={THEME.colors.LIGHT_GREY}
                  textType={'medium'}
                >
                  {userInfo?.phoneNumber}
                </NativeUiText>
                <Feather
                  name="phone-call"
                  size={24}
                  color={THEME.colors.primary}
                />
              </View>

              <TouchableOpacity
                style={[DefaultStyles.containerRow, styles.card]}
                // onPress={() =>
                //   navigation.navigate('ProfileFlow', {
                //     screen: 'ChangePassword',
                //   })
                // }
              >
                <NativeUiText
                  textColor={THEME.colors.LIGHT_GREY}
                  textType={'medium'}
                >
                  {userInfo?.location}
                </NativeUiText>
                <MaterialIcons
                  name="location-history"
                  size={24}
                  color={THEME.colors.primary}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={async () => {
                  await AsyncStorage.removeItem('token');
                  navigation.navigate('Login');
                }}
                style={[
                  DefaultStyles.containerRow,
                  styles.card,
                  styles.lastItem,
                ]}
              >
                <NativeUiText textColor={THEME.RED} textType={'medium'}>
                  Logout
                </NativeUiText>
                <MaterialIcons
                  name="logout"
                  size={24}
                  color={THEME.colors.primary}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PerssonalDetails;
