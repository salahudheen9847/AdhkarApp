########################################
# 🔐 React Native core - CRITICAL for preventing ClassNotFoundException
########################################
-keep class com.facebook.react.** { *; }
-keep class com.facebook.hermes.** { *; }
-keep class com.facebook.jni.** { *; }
-keep class com.facebook.soloader.** { *; }
-dontwarn com.facebook.react.**
-dontwarn com.facebook.hermes.**
-dontwarn com.facebook.jni.**
-dontwarn com.facebook.soloader.**

########################################
# 🔐 Native Modules - Prevent UnsatisfiedLinkError
########################################
-keep class com.zmxv.RNSound.** { *; }
-dontwarn com.zmxv.RNSound.**

-keep class org.sqlite.** { *; }
-dontwarn org.sqlite.**

-keep class com.facebook.soloader.** { *; }
-dontwarn com.facebook.soloader.**

########################################
# 🔐 SoLoader - Prevent "SoLoader could not find DSO"
########################################
-keep class com.facebook.soloader.** { *; }
-keep class com.facebook.soloader.SoLoader { *; }
-keep class com.facebook.soloader.NativeLoader { *; }
-dontwarn com.facebook.soloader.**

########################################
# 🔐 Bundle Loading - Prevent "Unable to load script from assets"
########################################
-keep class com.facebook.react.bridge.** { *; }
-keep class com.facebook.react.catalyst.** { *; }
-keep class com.facebook.react.modules.** { *; }
-keep class com.facebook.react.packager.** { *; }

########################################
# 🔐 Vector Icons (Material / FontAwesome)
########################################
-keep class com.oblador.vectoricons.** { *; }

########################################
# 🔐 Fonts (VERY IMPORTANT for your app)
########################################
-keep class **.R$font { *; }
-keep class **.R$drawable { *; }
-keep class **.R$raw { *; }

########################################
# 🔐 Keep native methods (avoid crash)
########################################
-keepclasseswithmembernames class * {
    native <methods>;
}

########################################
# 🔐 Prevent stripping enums
########################################
-keepclassmembers enum * {
    public static **[] values();
    public static ** valueOf(java.lang.String);
}

########################################
# 🔐 Keep all React Native packages
########################################
-keep class com.facebook.react.packager.** { *; }
-keep class com.facebook.react.devsupport.** { *; }
-keep class com.facebook.react.modules.appregistry.** { *; }
-keep class com.facebook.react.modules.core.** { *; }
-keep class com.facebook.react.modules.debug.** { *; }
-keep class com.facebook.react.modules.deviceinfo.** { *; }
-keep class com.facebook.react.modules.statusbar.** { *; }
-keep class com.facebook.react.modules.timepicker.** { *; }
-keep class com.facebook.react.modules.toast.** { *; }
-keep class com.facebook.react.modules.netinfo.** { *; }
-keep class com.facebook.react.modules.network.** { *; }

########################################
# 🔐 Keep all native libraries
########################################
-keep class org.webkit.** { *; }
-dontwarn org.webkit.**

-keep class com.google.android.gms.** { *; }
-dontwarn com.google.android.gms.**

########################################
# 🔐 Keep all JSI interfaces
########################################
-keep class com.facebook.react.bridge.JSBundleLoader { *; }
-keep class com.facebook.react.bridge.CatalystInstanceImpl { *; }
-keep class com.facebook.react.bridge.JavaScriptExecutor { *; }

########################################
# 🔐 Keep all Hermes related classes
########################################
-keep class com.facebook.hermes.** { *; }
-keep class com.facebook.hermes.reactexecutor.HermesExecutorFactory { *; }
-keep class com.facebook.hermes.reactexecutor.HermesExecutor { *; }
-dontwarn com.facebook.hermes.**
