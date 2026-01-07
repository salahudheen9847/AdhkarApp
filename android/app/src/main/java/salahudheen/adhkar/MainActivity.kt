package salahudheen.adhkar

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

import android.os.Bundle
import android.view.WindowInsets
import android.view.WindowInsetsController
import android.view.WindowManager
import android.view.View

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "AdhkarApp"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
    
    // Completely disable edge-to-edge to avoid deprecated API warnings
    if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.R) {
      // Use new APIs for Android 11+
      window.setDecorFitsSystemWindows(true) // Disable edge-to-edge
      window.insetsController?.let { controller ->
        // Don't hide system bars, just control their appearance
        controller.systemBarsBehavior = WindowInsetsController.BEHAVIOR_DEFAULT
      }
      
      // Set window flags to prevent edge-to-edge
      window.attributes = window.attributes.apply {
        layoutInDisplayCutoutMode = WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_DEFAULT
      }
    } else {
      // Fallback for older Android versions
      @Suppress("DEPRECATION")
      window.decorView.systemUiVisibility = android.view.View.SYSTEM_UI_FLAG_LAYOUT_STABLE
      @Suppress("DEPRECATION")
      window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS)
    }
    
    // Ensure status bar and navigation bar are visible and not transparent
    if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.LOLLIPOP) {
      window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS)
      window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION)
      window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS)
    }
  }
}
