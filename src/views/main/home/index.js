import {Button, Layout, Text} from '@ui-kitten/components';
import React from 'react';

export default function index({navigation}) {
  const gotonews = () => {
    navigation.navigate('News');
  };
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h1">HOME</Text>
      <Button onPress={gotonews}>Go to News</Button>
    </Layout>
  );
}
