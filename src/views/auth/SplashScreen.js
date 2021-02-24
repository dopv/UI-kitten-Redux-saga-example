import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import splash from '../../assets/image/splash.png';

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;
export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image source={splash} style={styles.logo} />
      <ActivityIndicator size={60} color="#8dd434" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: '70%',
    resizeMode: 'contain',
  },
});
