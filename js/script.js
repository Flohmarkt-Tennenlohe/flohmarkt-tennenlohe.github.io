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

function changeMap() {
    var cat = document.getElementById("category").value;
    var frame = document.getElementById("mapframe");
    var goal1 = "https://maphub.net/embed/"
    var goal3 = "?directions=1&geolocation=1"
        //alert(cat);
    switch (cat) {
        case "all":
            goal2 = "78993";
            break;
        case "kid":
            goal2 = "78994";
            break;
        case "house":
            goal2 = "78995";
            break;
        case "selfm":
            goal2 = "78998";
            break;
        case "electric":
            goal2 = "78996";
            break;
        case "cloth":
            goal2 = "78997";
            break;
        default:
            goal2 = "78993";
            break;
    }

    frame.src = goal1 + goal2 + goal3;
    //alert("done, " + frame.src);


}