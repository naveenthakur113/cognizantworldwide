package com.cognizant.stepdefs;

import org.openqa.selenium.WebDriver;

import com.cognizant.pageobjects.HomePageIndiaPageFactory;
import com.cognizant.utils.Driver;
import com.cognizant.utils.ReadConfig;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class GlobalFooterLinks {
	
	public static WebDriver driver=Driver.getDriver();
	HomePageIndiaPageFactory homePage = new HomePageIndiaPageFactory(driver);
	ReadConfig config=new ReadConfig();
	
	
	@Given("I have navigated to {string} site")
	public void i_have_navigated_to_site(String region) {
		String url=config.getregionalURL(region);
	    driver.get(url);
	}

	@And("I scroll to the footer section at the bottom")
	public void i_scroll_to_the_footer_section_at_the_bottom() {
	    // Write code here that turns the phrase above into concrete actions
	    homePage.scrolltoFooterLinks();
	}

	@When("I click on the footer {string} link")
	public void i_click_on_the_footer_link(String title) {
	    homePage.clickOnSiteGlobalFooterLinks(title);
	}

	@Then("the loaded page URL is {string}")
	public void the_loaded_page_URL_is(String url) {
	    Assert.assertTrue(homePage.verifyLoadedURL(url));
	}

	
	
	

}
