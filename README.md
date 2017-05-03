# Bootstrap-Accordion-To-Tab-with-AJAX
Two challenges (bootstrap accordion to tab and load the content with AJAX)

## First Challenge:
Implement an accordion component which transforms to tabs for wider screens

### Requirements:
* wide screens >= 768 pixel width
* no fixed heights, content can grow naturally
* no absolute positioning for content
* support for variable number of tabs
* the tab width should not be fixed and grow with text length 
* bonus points: no JS

## Second Challenge:
Modify the previous tab component to load the content via js request

### Requirements:
* duplicate the previous tab component and modify it so that only the initially active
content is contained
* on tab activation load the needed content via javascript request
* request content only the first time a tab gets activated

# Approach

I have decided to use `JSON` format to store data and because of CORS mechaninsm I have hosted it on MyJSON.com: https://api.myjson.com/bins/13vg19
This has been tested and working on all main browsers: 

* IE9+
* Chrome
* Firefox
* Android 2.3 stock browser
