# geeksforgeeksCleanView-chromePlugin

I have created this "toy" chrome extension to clean up the "*://www.geeksforgeeks.org/*" website.
It has 3 lines of JS code

```
var whole = document.getElementsByTagName("body")[0];
var content = document.getElementById("content");
whole.innerHTML = content.innerHTML;
```

This project might not be maintained.

## How to use the extension
Download and extract it to folder.
open "chrome://extensions/"
Enable developer options.
Click "Load Unpacked" and point to folder.

## Why is not there in chrome plugin store
I have not paid the developer fee ($5).
