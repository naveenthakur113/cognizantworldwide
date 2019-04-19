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
  "status": "passed"
});
formatter.step({
  "name": "I click on the footer \"Banking \u0026 Financial Services\" link",
  "keyword": "When "
});
formatter.match({
  "location": "GlobalFooterLinks.i_click_on_the_footer_link(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the loaded page URL is \"https://www.cognizant.com/banking-financial-technology-solutions\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GlobalFooterLinks.the_loaded_page_URL_is(String)"
});
formatter.result({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "I click on the footer \"Communications\" link",
  "keyword": "When "
});
formatter.match({
  "location": "GlobalFooterLinks.i_click_on_the_footer_link(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the loaded page URL is \"https://www.cognizant.com/csp-technology-solutions\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GlobalFooterLinks.the_loaded_page_URL_is(String)"
});
formatter.result({
  "status": "passed"
});
});