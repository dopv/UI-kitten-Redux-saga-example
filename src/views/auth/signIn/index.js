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
import {Image, TouchableWithoutFeedback, Dimensions, View} from 'react-native';
import React from 'react';
import logo from '../../../assets/image/logo.jpg';

export default function index({navigation}) {
  const WIDTH = Dimensions.get('window').width;
  const styles = useStyleSheet({
    container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
    component: {
      marginTop: 10,
    },
    logo: {height: 200, width: 200},
    login_title: {fontSize: 22, fontWeight: 'bold'},
    text_input: {
      width: WIDTH - 40,
      marginVertical: 2,
    },
    spinner: {alignItems: 'center', justifyContent: 'center'},
    forgot_pass: {
      marginBottom: 10,
      marginLeft: 10,
      textDecorationLine: 'underline',
    },
  });

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;
  const FbIcon = (props) => <Icon {...props} name="facebook-outline" />;

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const LoadingIndicator = (props) => (
    <View style={styles.spinner}>
      <Spinner size="small" />
    </View>
  );

  const _onLogin = () => {
    setLoading(true);
    setTimeout(() => {
      console.log('Login success');
      setLoading(false);
      navigation.navigate('Auth');
      navigation.navigate('Home');
    }, 3000);
  };

  return (
    <Layout style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Layout style={styles.component}>
        <Text style={styles.login_title}>LOGIN</Text>
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
          value={password}
          placeholder="Password ..."
          caption="Should contain at least 8 symbols"
          accessoryRight={renderIcon}
          captionIcon={AlertIcon}
          secureTextEntry={secureTextEntry}
          onChangeText={(password) => setPassword(password)}
        />
        <Text
          style={styles.forgot_pass}
          onPress={() => navigation.navigate('ForgotPass')}>
          forgot password
        </Text>
        <Button
          style={styles.text_input}
          appearance="outline"
          accessoryRight={loading ? LoadingIndicator : null}
          onPress={_onLogin}>
          LOGIN
        </Button>
      </Layout>
      <Layout
        style={[
          styles.component,
          {alignItems: 'center', justifyContent: 'center'},
        ]}>
        <Text onPress={() => navigation.navigate('Register')}>
          Do you have an account ?
        </Text>
        <Text>Or</Text>
      </Layout>
      <Layout style={[styles.component, styles.text_input]}>
        <Button accessoryLeft={FbIcon} status="primary">
          Login with Fb
        </Button>
      </Layout>
    </Layout>
  );
}
