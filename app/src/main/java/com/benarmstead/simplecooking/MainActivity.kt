package com.benarmstead.simplecooking

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import android.R.string
import android.graphics.Bitmap


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
                    url?.takeLast(5) != ".html") {
                    view?.loadUrl(url + "index.html")
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