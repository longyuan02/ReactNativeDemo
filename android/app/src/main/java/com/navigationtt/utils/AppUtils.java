package com.navigationtt.utils;

import android.content.Context;
import android.content.pm.PackageManager;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class AppUtils extends ReactContextBaseJavaModule {
    private Context mContext;
    public AppUtils(@NonNull ReactApplicationContext reactContext) {
        super(reactContext);
        this.mContext=reactContext;
    }

    @NonNull
    @Override
    public String getName() {
        return "AppUtils";
    }
    @ReactMethod
    public void show(Callback erroCallback, Callback successCallback) {
        //成功/失败回调 可以尝试ES6方式获取
        int code;
        try {
            code = mContext.getPackageManager().getPackageInfo(mContext.getPackageName(), 0).versionCode;
            String name=mContext.getPackageManager().getPackageInfo(mContext.getPackageName(), 0).versionName;
            successCallback.invoke(name,code);
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
            erroCallback.invoke(e.getMessage());
        }
    }
}
