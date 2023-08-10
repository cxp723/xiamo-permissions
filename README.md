# react-native-xiaomi-permissions

Native module for Xiaomi specific permissions

## Installation

```sh
npm install react-native-xiaomi-permissions
```

## Usage

```js
import { getPermissionsForDisplayOverlay, openDisplayOverlaySettings } from 'react-native-xiaomi-permissions';

// ...

useEffect(() => {
  getPermissionsForDisplayOverlay().then(hasDisplayOverlayPermissions => {
    if (!hasDisplayOverlayPermissions) {
      openDisplayOverlaySettings();
    }
  })
}, [])
```

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
