package com.benarmstead.simplecooking

import android.content.ActivityNotFoundException
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.webkit.*
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity


class MainActivity : AppCompatActivity() {
    private lateinit var view: WebView
    private lateinit var settings: WebSettings

    private val homeUrl = "file:///android_asset/html/index.html"

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        view = findViewById(R.id.view)
        view.webViewClient = WebViewClient()
        view.loadUrl(homeUrl)
        settings = view.settings
        settings.javaScriptEnabled = false

        view.webViewClient = object : WebViewClient() {
            override fun shouldOverrideUrlLoading(view: WebView?, url: String?): Boolean {
                if (url?.take(4)  == "file" &&
                    url.takeLast(5) != ".html") {
                    view?.loadUrl(url + "index.html")
                } else {
                    view?.loadUrl(homeUrl)
                    val openBrowser = Intent(Intent.ACTION_VIEW)
                    openBrowser.data = Uri.parse(url)
                    try {
                        startActivity(openBrowser)
                    } catch (e: ActivityNotFoundException) {
                        Toast.makeText(
                            this@MainActivity,
                            R.string.no_app_to_open_link,
                            Toast.LENGTH_SHORT
                        ).show()
                    }
                }
                return false
            }
        }
    }

    override fun onBackPressed() {
        goBack()
    }

    private fun goBack(){
        if (view.canGoBack()){
            view.goBack()
        }
    }
}