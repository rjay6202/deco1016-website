// Variable initlisation
var name;

var currentTab = 0; // Current tab is set to be the first tab of the form (0)
showTab(currentTab);

// Will display the specified tab of the form
function showTab(n) {
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
        document.getElementById("confirmBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("confirmBtn").style.display = "inline";
    } else {
        document.getElementById("nextBtn").style.display = "inline";
    }
    fixStepIndicator(n);
}

// Will figure out which tab to display
function nextPrev(n) {
    var x = document.getElementsByClassName("tab");
    if (n == 1 && !validateForm()) return false;
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    console.log(currentTab);
    if (currentTab >= x.length) {
        document.getElementById("signupForm").submit();
        return false;
    }
    showTab(currentTab);
}

function validateForm() {
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    for (i = 0; i < y.length; i++) {
        if (y[i].value == "") {
            y[i].className += "invalid";
            valid = false;
        }
    }
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid;
}

function fixStepIndicator() {
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "")
    }
    x[n].className += " active";
}

function paymentPlan1() {
    document.getElementById("finalchoice-title").innerHTML = "BASIC";
    document.getElementById("finalchoice-price").innerHTML = "$9.99";
    document.getElementById("finalchoice-desc").innerHTML = "Watch on 1 screen in SD quality.";
}

function paymentPlan2() {
    document.getElementById("finalchoice-title").innerHTML = "STANDARD";
    document.getElementById("finalchoice-price").innerHTML = "$13.99";
    document.getElementById("finalchoice-desc").innerHTML = "Watch on 2 screens at a time with HD available.";
}

function paymentPlan3() {
    document.getElementById("finalchoice-title").innerHTML = "PREMIUM";
    document.getElementById("finalchoice-price").innerHTML = "$19.99";
    document.getElementById("finalchoice-desc").innerHTML = "Watch on 4 screens at a time with HD and Ultra HD available.";
}