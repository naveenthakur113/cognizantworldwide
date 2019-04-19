$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:features/india/global_footer_links.feature");
formatter.feature({
  "name": "Global Footer links test on World Wide India site",
  "description": "\tAs an end user I want to browse India website, \n\tscroll to global footer links,\n\tTo make sure there are no broken links",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify India website global footer links",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have navigated to \"India\" site",
  "keyword": "Given "
});
formatter.step({
  "name": "I scroll to the footer section at the bottom",
  "keyword": "And "
});
formatter.step({
  "name": "I click on the footer \"\u003clink\u003e\" link",
  "keyword": "When "
});
formatter.step({
  "name": "the loaded page URL is \"\u003cpath\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "link",
        "path"
      ]
    },
    {
      "cells": [
        "Banking \u0026 Financial Services",
        "https://www.cognizant.com/banking-financial-technology-solutions"
      ]
    },
    {
      "cells": [
        "Communications",
        "https://www.cognizant.com/csp-technology-solutions"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify India website global footer links",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have navigated to \"India\" site",
  "keyword": "Given "
});
formatter.match({
  "location": "GlobalFooterLinks.i_have_navigated_to_site(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I scroll to the footer section at the bottom",
  "keyword": "And "
});
formatter.match({
  "location": "GlobalFooterLinks.i_scroll_to_the_footer_section_at_the_bottom()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.103)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BBA5BS9\u0027, ip: \u0027192.168.0.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\navee\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:57536}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 73.0.3683.103, webStorageEnabled: true}\nSession ID: 0f7cb8f8a2ecb91c61c40bd3a0401e14\n*** Element info: {Using\u003dcss selector, value\u003d.text-gray-dark1}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByCssSelector(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElements(By.java:441)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElements(DefaultElementLocator.java:85)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:36)\r\n\tat com.sun.proxy.$Proxy17.get(Unknown Source)\r\n\tat com.cognizant.pageobjects.HomePageIndiaPageFactory.scrolltoFooterLinks(HomePageIndiaPageFactory.java:50)\r\n\tat com.cognizant.stepdefs.GlobalFooterLinks.i_scroll_to_the_footer_section_at_the_bottom(GlobalFooterLinks.java:31)\r\n\tat ✽.I scroll to the footer section at the bottom(file:features/india/global_footer_links.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on the footer \"Banking \u0026 Financial Services\" link",
  "keyword": "When "
});
formatter.match({
  "location": "GlobalFooterLinks.i_click_on_the_footer_link(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the loaded page URL is \"https://www.cognizant.com/banking-financial-technology-solutions\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GlobalFooterLinks.the_loaded_page_URL_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify India website global footer links",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have navigated to \"India\" site",
  "keyword": "Given "
});
formatter.match({
  "location": "GlobalFooterLinks.i_have_navigated_to_site(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d73.0.3683.103)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BBA5BS9\u0027, ip: \u0027192.168.0.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\navee\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:57536}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 73.0.3683.103, webStorageEnabled: true}\nSession ID: 0f7cb8f8a2ecb91c61c40bd3a0401e14\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.cognizant.stepdefs.GlobalFooterLinks.i_have_navigated_to_site(GlobalFooterLinks.java:25)\r\n\tat ✽.I have navigated to \"India\" site(file:features/india/global_footer_links.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I scroll to the footer section at the bottom",
  "keyword": "And "
});
formatter.match({
  "location": "GlobalFooterLinks.i_scroll_to_the_footer_section_at_the_bottom()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on the footer \"Communications\" link",
  "keyword": "When "
});
formatter.match({
  "location": "GlobalFooterLinks.i_click_on_the_footer_link(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the loaded page URL is \"https://www.cognizant.com/csp-technology-solutions\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GlobalFooterLinks.the_loaded_page_URL_is(String)"
});
formatter.result({
  "status": "skipped"
});
});