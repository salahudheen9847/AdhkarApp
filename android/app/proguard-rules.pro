########################################
# 🔐 React Native core
########################################
-keep class com.facebook.react.** { *; }
-keep class com.facebook.hermes.** { *; }
-dontwarn com.facebook.react.**
-dontwarn com.facebook.hermes.**

########################################
# 🔐 Native Modules (Sound, SQLite)
########################################
-keep class com.zmxv.RNSound.** { *; }
-dontwarn com.zmxv.RNSound.**

-keep class org.sqlite.** { *; }
-dontwarn org.sqlite.**

########################################
# 🔐 Vector Icons (Material / FontAwesome)
########################################
-keep class com.oblador.vectoricons.** { *; }

########################################
# 🔐 Fonts (VERY IMPORTANT for your app)
########################################
-keep class **.R$font { *; }
-keep class **.R$drawable { *; }

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
