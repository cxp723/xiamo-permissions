import { useEffect, useState } from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {
  openDisplayOverlaySettings,
  getPermissionsForDisplayOverlay,
} from 'react-native-xiaomi-permissions';

export default function App() {
  const [hasPermissions, setHasPermissions] = useState<boolean | undefined>();

  useEffect(() => {
    getPermissionsForDisplayOverlay().then(setHasPermissions);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Has Xiaomi overlay Permissions: </Text>
      <Text>
        {hasPermissions === undefined
          ? 'Loading...'
          : hasPermissions
          ? 'Yes'
          : 'No'}
      </Text>
      <TouchableOpacity onPress={openDisplayOverlaySettings} style={styles.button}>
        <Text>Open Xiaomi display overlay settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 12,
    borderRadius: 4,
    backgroundColor: 'green',
  },
});
