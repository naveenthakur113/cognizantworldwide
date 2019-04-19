package com.cognizant.pageobjects;

import java.util.List;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePageIndiaPageFactory extends BasePage {

	private WebDriver driver;

	public HomePageIndiaPageFactory(WebDriver driver) {
		// TODO Auto-generated constructor stub

		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	public HomePageIndiaPageFactory() {
		// TODO Auto-generated constructor stub
		
		

	}
	
	
	@FindBy(css=".text-gray-dark1")
	private List<WebElement> globalFooterLinks;

	
	
	
	
	
	
	public void clickOnSiteGlobalFooterLinks(String title) {
		for(WebElement element: globalFooterLinks) {
			if(element.getAttribute("title").contains(title)) {
				element.click();
				break;
			}
		}
	}
	
	public void scrolltoFooterLinks() {
		JavascriptExecutor js=(JavascriptExecutor) driver;
		js.executeScript("arguments[0].scrollIntoView(true);", globalFooterLinks.get(0));
	}
	
	public boolean verifyLoadedURL(String URL) {
		logger.info("Loaded URL: " + URL);
		return driver.getCurrentUrl().equals(URL);
	}
	
}
