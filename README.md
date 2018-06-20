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
1. Download and extract it to folder.
2. Open "chrome://extensions/"
3. Enable developer options.
4. Click "Load Unpacked" and point to folder.

## Why is not there in chrome plugin store
I have not paid the developer fee ($5).

## Screenshots
1. Without Plugin
![alt text](https://raw.githubusercontent.com/Mastro-Geppetto/geeksforgeeksCleanView-chromePlugin/master/before.png "Without plugin")
2. With plugin
![alt text](https://raw.githubusercontent.com/Mastro-Geppetto/geeksforgeeksCleanView-chromePlugin/master/after.png "With plugin")
