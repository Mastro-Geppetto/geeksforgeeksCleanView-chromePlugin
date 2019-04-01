////////////////////////////
// Change the tab icon
////////////////////////////
var stackOverFlowIconLocation = "https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d";

if ( window.location.hostname == "practice.geeksforgeeks.org" )
{
    var icon = document.querySelectorAll("head link[rel='icon']")[0];
    // use stackovreflow icon
    icon.setAttribute("href", stackOverFlowIconLocation);
    // detox
    var lftEle = document.querySelectorAll("body div[class='container-fluid'] div[class='row fullPageDiv'] div")[0];
    //lftEle.parentElement.removeChild( lftEle );
    
    var mainEle = document.querySelectorAll("body div[class='container-fluid'] div[class='row fullPageDiv'] div[class='col-sm-7 col-xs-12']")[0];
    //mainEle.className = "row fullPageDiv";
}
else if( window.location.hostname ==  "www.geeksforgeeks.org" )
{
    var icon = document.querySelectorAll("head link[rel='shortcut icon']")[0];
    // use stackovreflow icon
    icon.setAttribute("href", stackOverFlowIconLocation);
    ////////////////////////////
    // Detox the document
    ////////////////////////////
    var lft_sd_bar = document.getElementsByClassName("leftSideBarParent")[0];
    lft_sd_bar.parentElement.removeChild(lft_sd_bar);

    var rt_sd_bar = document.getElementById("secondary");
    rt_sd_bar.parentElement.removeChild(rt_sd_bar);

    var top_bar_1 = document.getElementById("page");
    top_bar_1.parentElement.removeChild(top_bar_1);

    var top_bar_2 = document.getElementById("site-navigation");
    top_bar_2.parentElement.removeChild(top_bar_2);

    var change_prim_class = document.getElementById("primary");
    change_prim_class.setAttribute('class', 'site-header')

    //////////////////////////////////////////////////////////////////////////////////
    // The below changes are simplistic & gets work done but breaks JS functionality
    //////////////////////////////////////////////////////////////////////////////////
    //var whole = document.getElementsByTagName("body")[0];
    //var content = document.getElementById("content");
    //whole.innerHTML = content.innerHTML;
}