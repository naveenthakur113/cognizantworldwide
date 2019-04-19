Feature: Global Footer links test on World Wide India site 
	As an end user I want to browse India website, 
	scroll to global footer links,
	To make sure there are no broken links
	

Scenario Outline: Verify India website global footer links 
	Given I have navigated to "India" site
	And I scroll to the footer section at the bottom
	When I click on the footer "<link>" link
	Then the loaded page URL is "<path>"
	Examples:
	|link                           |path                                                            |
	|Banking & Financial Services   |https://www.cognizant.com/banking-financial-technology-solutions|
	|Communications                 |https://www.cognizant.com/csp-technology-solutions              |

