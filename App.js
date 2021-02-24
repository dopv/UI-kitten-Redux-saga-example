import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';

import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {MaterialIconsPack} from './src/assets/icon_lib/Material';
import {FeatherIconsPack} from './src/assets/icon_lib/Feather';
import {IoniconsIconsPack} from './src/assets/icon_lib/Ionicon';

import {default as mapping} from './mapping.json';
import {default as theme} from './theme.json';
import App from './src/routes/AppNavigator';

export default () => (
  <>
    <IconRegistry
      icons={[
        EvaIconsPack,
        MaterialIconsPack,
        FeatherIconsPack,
        IoniconsIconsPack,
      ]}
    />
    <ApplicationProvider
      {...eva}
      theme={{...eva.dark, ...theme}}
      customMapping={mapping}>
      <App />
    </ApplicationProvider>
  </>
);
