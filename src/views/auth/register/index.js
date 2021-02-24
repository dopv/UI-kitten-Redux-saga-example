/* eslint-disable react-hooks/rules-of-hooks */
import {
  Button,
  Icon,
  Input,
  Layout,
  Spinner,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import React from 'react';
import {Image, Dimensions, TouchableWithoutFeedback, View} from 'react-native';
import logo from '../../../assets/image/logo.jpg';

export default function index({navigation}) {
  const WIDTH = Dimensions.get('window').width;
  const styles = useStyleSheet({
    container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
    logo: {width: 200, height: 200},
    component: {
      marginTop: 10,
    },
    text_input: {
      width: WIDTH - 40,
      marginVertical: 2,
    },
    reg_title: {fontSize: 22, fontWeight: 'bold', marginVertical: 10},
  });

  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPass, setConfirm] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );
  const LoadingIndicator = (props) => (
    <View style={styles.spinner}>
      <Spinner size="small" />
    </View>
  );
  return (
    <Layout style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Layout style={styles.component}>
        <Text style={styles.reg_title}>Register</Text>
        <Input
          size="large"
          style={styles.text_input}
          placeholder="Username ..."
          value={username}
          onChangeText={(username) => setUsername(username)}
        />
        <Input
          size="large"
          style={styles.text_input}
          placeholder="Email ..."
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <Input
          size="large"
          style={styles.text_input}
          value={password}
          placeholder="Password ..."
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
          onChangeText={(password) => setPassword(password)}
        />
        <Input
          size="large"
          style={styles.text_input}
          value={confirmPass}
          placeholder="Confirm Pass ..."
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
          onChangeText={(confirmPass) => setConfirm(confirmPass)}
        />
        <Button
          style={[styles.text_input, {marginTop: 20}]}
          accessoryRight={loading ? LoadingIndicator : null}
          state="infor">
          SIGN UP
        </Button>
      </Layout>
      <Layout style={styles.component}>
        <Text onPress={() => navigation.navigate('SignIn')}>
          Already have an account ?
        </Text>
      </Layout>
    </Layout>
  );
}
