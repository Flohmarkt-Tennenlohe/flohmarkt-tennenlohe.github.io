var navOpen = 0;
var currPage = "map";

function dimCheck() {
    var frame = document.getElementById("frame");
    frame.width = "100%";
    frame.height = "100%";

}


function navclose() {
    if (navOpen == 1) {
        toggleNav();
    }
}

function toggleNav() {

    document.getElementById("menubtn").classList.toggle("change");

    if (navOpen == 1) {
        document.getElementById("sidenav").style.width = "0";
        navOpen = 0;
    } else {
        document.getElementById("sidenav").style.width = "250px";
        navOpen = 1;
    }
    //alert("navopen: " + navOpen);
    return;
}



function changePage(target, link, marked) { //gets the target page, the link its called from and a boolean if the calling link shall be set .active. Changes the src page of the iframe
    document.getElementById("frame").src = "#";
    document.getElementById("frame").src = "pages/" + target + ".html";
    /*var list = document.getElementsByClassName("active");
    for (i = 0; i < list.length; i++) {
        list[i].classList.remove("active");
    }
    if (marked) {
        link.classList.add("active");
    }
    currPage = target;*/
}

function changePageSide(target, link, marked) { //See above, only for calling from sidemenu
    //currPage = target;
    navclose();
    changePage(target, link, marked);
}


function changePageChild(target, link, marked) { //See above, only for calling from within iframecontent
    //currPage = target;
    parent.changePage(target, link, marked);
}

/*function openLegend(btn) {
    btn = document.getElementById("legendBtn");
    btntxt = document.getElementById("legendBtnTxt");
    var act = btntxt.innerHTML;
    btntxt.innerHTML = "&times;";
    btn.style.height = "150px";
    btn.style.width = "150px";

}*/