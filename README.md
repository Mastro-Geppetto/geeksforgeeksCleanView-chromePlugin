# geeksforgeeksCleanView-chromePlugin
geeksforgeeks Clean View chrome plugin

I have created this "toy" chrome extension to clean up the "*://www.geeksforgeeks.org/*" website.
It has 3 lines of code

"""
var whole = document.getElementsByTagName("body")[0];
var content = document.getElementById("content");
whole.innerHTML = content.innerHTML;
"""

This project might not be maintained.
