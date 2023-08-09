package com.xiaomipermissions;

import androidx.annotation.NonNull;
import android.util.Log;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = XiaomiPermissionsModule.NAME)
public class XiaomiPermissionsModule extends ReactContextBaseJavaModule {
  public static final String NAME = "XiaomiPermissions";

  public XiaomiPermissionsModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }


  @ReactMethod()
  public void isMiuiCanDisplayOverlay(Promise ps){
      boolean isXiaomi = XiaomiUtilities.isMIUI();
      boolean isGranted = XiaomiUtilities.isCustomPermissionGranted(getReactApplicationContext(), XiaomiUtilities.OP_BACKGROUND_START_ACTIVITY);
      if(isXiaomi){
          ps.resolve(isGranted);
      }else{
          ps.resolve(true);
      }
  }

  @ReactMethod()
  public void openMiuiDisplayOverlayPermission(Promise ps){
      boolean isXiaomi = XiaomiUtilities.isMIUI();
      try{
          if(isXiaomi){
              XiaomiUtilities.goToMiuiPermissionActivity_V8(getReactApplicationContext());
              ps.resolve(true);
          }else{
              ps.resolve(false);
          }
      }catch (Exception e){
          Log.d(NAME,"Cannot open Miui Display Pop-up window while running in background" + e.toString());
      }
  }
}
