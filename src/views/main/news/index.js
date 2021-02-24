import {Button, Layout, Text} from '@ui-kitten/components';
import React from 'react';

export default function index({navigation}) {
  const gotohome = () => {
    navigation.navigate('Home');
  };
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h1">NEW</Text>
      <Button onPress={gotohome}>Go to News</Button>
    </Layout>
  );
}
