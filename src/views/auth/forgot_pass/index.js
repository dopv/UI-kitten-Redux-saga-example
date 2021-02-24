/* eslint-disable react-hooks/rules-of-hooks */
import {
  Button,
  Input,
  Layout,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import React from 'react';
import {Image, Dimensions} from 'react-native';

import reset_pass from '../../../assets/image/reset_pass.png';

export default function index({navigation}) {
  const WIDTH = Dimensions.get('window').width;
  const styles = useStyleSheet({
    container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
    logo: {width: 200, height: 200},
    component: {marginTop: 10},
    text_input: {width: WIDTH - 40, marginVertical: 2},
    text_title: {fontSize: 20, fontWeight: 'bold'},
    text_description: {textAlign: 'center', width: WIDTH - 40},
    button_layout: {marginTop: 40, flexDirection: 'row'},
    button: {paddingHorizontal: 20, margin: 5},
  });

  const [email, setEmail] = React.useState('');

  return (
    <Layout style={styles.container}>
      <Image source={reset_pass} style={styles.logo} />
      <Layout
        style={[
          styles.component,
          {alignItems: 'center', justifyContent: 'center'},
        ]}>
        <Text style={styles.text_title}>Forgot your Password</Text>
        <Text style={styles.text_description}>
          please type your email. We will send the your's password to this Email
        </Text>
      </Layout>
      <Layout style={styles.component}>
        <Input
          size="large"
          style={styles.text_input}
          placeholder="Email ..."
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
      </Layout>
      <Layout style={styles.button_layout}>
        <Button
          style={styles.button}
          status="primary"
          onPress={() => navigation.navigate('ResetPass')}>
          Send
        </Button>
      </Layout>
    </Layout>
  );
}
