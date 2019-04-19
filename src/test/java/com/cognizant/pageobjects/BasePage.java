package com.cognizant.pageobjects;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.cognizant.utils.Driver;
import com.cognizant.utils.LoggerHelper;



public class BasePage {

	private WebDriverWait wait = new WebDriverWait(Driver.getDriver(), 10);
	Logger logger = LoggerHelper.getLogger(BasePage.class);

	public WebElement waitForVisibilityOfElement(WebElement element) {
		return wait.until(ExpectedConditions.visibilityOf(element));
	}
}
