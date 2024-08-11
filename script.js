document.querySelectorAll(".question")[0].addEventListener("click", function() {
    showAns1();
})

document.querySelectorAll(".question")[0].addEventListener("keypress", function(event) {
    var ans = document.querySelectorAll(".answer")[0];
    if (event.keyCode == 13 || 32) {
        showAns1();
    } else {
        ans.style.display = "none";
    }
})


function showAns1() {
var ans = document.querySelectorAll(".answer")[0];
var img = document.getElementsByTagName("img")[1];
if (ans.style.display == "none") {
    ans.style.display = "block";
    img.src = "./assets/images/icon-minus.svg";
    if(ans.style.display == "block") {
        var ans = document.querySelectorAll(".answer")[0];
        var img = document.getElementsByTagName("img")[1];
        ans.addEventListener("click", function() {
            ans.style.display = "none";
            img.src = "./assets/images/icon-plus.svg"
        })
    } else {
        ans.style.display == "block"
    }
} else {
    ans.style.display = "none";
    img.src = "./assets/images/icon-plus.svg";
}
}

document.querySelectorAll(".question")[1].addEventListener("click", function() {
    showAns2();
})

document.querySelectorAll(".question")[1].addEventListener("keypress", function(event) {
    var ans = document.querySelectorAll(".answer")[1];
    if (event.keyCode == 13 || 32) {
        showAns2();
    } else {
        ans.style.display = "none";
    }
})

function showAns2() {
    var ans = document.querySelectorAll(".answer")[1];
    var img = document.getElementsByTagName("img")[2];
    if (ans.style.display == "none") {
        ans.style.display = "block";
        img.src = "./assets/images/icon-minus.svg";
        if(ans.style.display == "block") {
            var ans = document.querySelectorAll(".answer")[1];
            var img = document.getElementsByTagName("img")[2];
            ans.addEventListener("click", function() {
                ans.style.display = "none";
                img.src = "./assets/images/icon-plus.svg"
            })
        } else {
            ans.style.display == "block"
        }
    } else {
        ans.style.display = "none";
        img.src = "./assets/images/icon-plus.svg";
    }
}

document.querySelectorAll(".question")[2].addEventListener("click", function() {
    showAns3();
})

document.querySelectorAll(".question")[2].addEventListener("keypress", function(event) {
    var ans = document.querySelectorAll(".answer")[2];
    if (event.keyCode == 13 || 32) {
        showAns3();
    } else {
        ans.style.display = "none";
    }
})

function showAns3() {
    var ans = document.querySelectorAll(".answer")[2];
    var img = document.getElementsByTagName("img")[3];
    if (ans.style.display == "none") {
        ans.style.display = "block";
        img.src = "./assets/images/icon-minus.svg";
        if(ans.style.display == "block") {
            var ans = document.querySelectorAll(".answer")[2];
            var img = document.getElementsByTagName("img")[3];
            ans.addEventListener("click", function() {
                ans.style.display = "none";
                img.src = "./assets/images/icon-plus.svg"
            })
        } else {
            ans.style.display == "block"
        }
    } else {
        ans.style.display = "none";
        img.src = "./assets/images/icon-plus.svg";
    }
}

document.querySelectorAll(".question")[3].addEventListener("click", function() {
    showAns4();
})

document.querySelectorAll(".question")[3].addEventListener("keypress", function(event) {
    var ans = document.querySelectorAll(".answer")[3];
    if (event.keyCode == 13 || 32) {
        showAns4();
    } else {
        ans.style.display = "none";
    }
})

function showAns4() {
    var ans = document.querySelectorAll(".answer")[3];
    var img = document.getElementsByTagName("img")[4];
    if (ans.style.display == "none") {
        ans.style.display = "block";
        img.src = "./assets/images/icon-minus.svg";
        if(ans.style.display == "block") {
            var ans = document.querySelectorAll(".answer")[3];
            var img = document.getElementsByTagName("img")[4];
            ans.addEventListener("click", function() {
                ans.style.display = "none";
                img.src = "./assets/images/icon-plus.svg"
            })
        } else {
            ans.style.display == "block"
        }
    } else {
        ans.style.display = "none";
        img.src = "./assets/images/icon-plus.svg";
    }
}
