import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-xiaomi-permissions' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const XiaomiPermissions = NativeModules.XiaomiPermissions
  ? NativeModules.XiaomiPermissions
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function getPermissionsForDisplayOverlay(): Promise<boolean> {
  return XiaomiPermissions.isMiuiCanDisplayOverlay();
}

export function openDisplayOverlaySettings(): Promise<boolean> {
  return XiaomiPermissions.openMiuiDisplayOverlayPermission();
}
