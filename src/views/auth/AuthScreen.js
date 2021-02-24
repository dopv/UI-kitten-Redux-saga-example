import {
  Avatar,
  Icon,
  Layout,
  Menu,
  MenuItem,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import React from 'react';
import {ImageBackground} from 'react-native';
import HeaderTitle from '../../components/common/HeaderTitle';

export default function AuthScreen({navigation}) {
  const styles = useStyleSheet({
    container: {
      flex: 1,
    },
    profile: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 70,
      padding: 10,
    },
    profile_content: {
      margin: 10,
    },
  });

  const PersonIcon = (props) => <Icon {...props} name="person-outline" />;
  const SettingIcon = (props) => <Icon {...props} name="settings-outline" />;
  const ThemeIcon = (props) => <Icon {...props} name="shuffle-outline" />;
  const LogOutIcon = (props) => <Icon {...props} name="log-out-outline" />;
  const LanguageIcon = (props) => (
    <Icon {...props} name="language" pack="ionicons" />
  );
  return (
    <Layout style={styles.container}>
      <HeaderTitle>User</HeaderTitle>
      <Layout style={styles.profile}>
        <Avatar
          source={require('../../assets/image/female_avatar.png')}
          ImageComponent={ImageBackground}
          size="giant"
        />
        <Layout style={styles.profile_content}>
          <Text style={{fontWeight: 'bold'}}>Pham van Do</Text>
          <Text>0123456789</Text>
        </Layout>
      </Layout>
      <Menu>
        <MenuItem title="Users" accessoryLeft={PersonIcon} />
        <MenuItem
          title="Change Pass"
          accessoryLeft={SettingIcon}
          onPress={() => navigation.navigate('ChangePass')}
        />
        <MenuItem title="Language" accessoryLeft={LanguageIcon} />
        <MenuItem title="Theme" accessoryLeft={ThemeIcon} />
        <MenuItem title="Settings" accessoryLeft={SettingIcon} />
      </Menu>
      <Menu>
        <MenuItem
          title="Log Out"
          accessoryLeft={LogOutIcon}
          onPress={() => navigation.navigate('SignIn')}
        />
      </Menu>
    </Layout>
  );
}
