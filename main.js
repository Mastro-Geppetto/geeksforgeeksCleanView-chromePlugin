// Change the tab icon
var icon = document.querySelectorAll("head link[rel='shortcut icon']")[0];
//icon.setAttribute("href", "https://www.shareicon.net/download/16x16/2017/04/19/884518_planet_512x512.png");
// use stackovreflow icon
icon.setAttribute("href", "https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d");

// Detox the document
var whole = document.getElementsByTagName("body")[0];
var content = document.getElementById("content");
whole.innerHTML = content.innerHTML;