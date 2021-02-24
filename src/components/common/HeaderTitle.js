import {Layout, Text, useStyleSheet} from '@ui-kitten/components';
import React from 'react';

export default function HeaderTitle(props) {
  const styles = useStyleSheet({
    container: {
      height: 50,
      paddingHorizontal: 10,
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  });
  return (
    <Layout style={styles.container}>
      <Text style={styles.title}>{props.children}</Text>
    </Layout>
  );
}
