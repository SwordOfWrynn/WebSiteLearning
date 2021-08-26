
var bunkerOptions = {};
var optionsJSON;

function calculateCosts() {
    var bunkerSize = document.getElementById("bunkersize").value;
    var bunkerTier = document.getElementById("tierlist").value;

    //Get the bmat cost per bunker
    var bmatCostPer = (bunkerTier === "tier1" ? 0 : 75);

    //get the cmat cost per bunker
    var cmatCostPer = (bunkerTier === "tier3" ? 30 : 0);

    var bmatCost = bunkerSize * bmatCostPer;
    var cmatCost = bunkerSize * cmatCostPer;

    var costMsg = "The cost will be ";
    if (cmatCost > 0) {
        costMsg += bmatCost + " Basic Materials, " + cmatCost + " Concrete";
    }
    else if (bmatCost > 0) {
        costMsg += bmatCost + " Basic Materials";
    }
    else {
        costMsg += "No material cost";
    }
    window.alert(costMsg);
}

function validateForm(evt){
    console.log("foo");
    evt.preventDefault();

    var formValid = true;
    
    try {
        var fieldsFilled = true;
        var numbersValid = true;
        
        var bunkerSizeEle = document.getElementById("bunkersize");
        if (bunkerSizeEle.value === ""){
            fieldsFilled = false;
        }
        if(bunkerSizeEle.value <= 0){
            numbersValid = false;
        }

        bunkerOptions = {};

        if (document.getElementById("bbCheck").checked === true) {
            bunkerOptions.bb = true;
            if (document.getElementById("bbNum").value === ""){
                fieldsFilled = false;
            }
            else if (document.getElementById("bbNum").value <= 0) {
                numbersValid = false;
            }
        }
        if (document.getElementById("rgCheck").checked === true) {
            bunkerOptions.rg = true;
            if (document.getElementById("rgNum").value === "") {
                fieldsFilled = false;
            }
            else if (document.getElementById("rgNum").value <= 0) {
                numbersValid = false;
            }
        }
        if (document.getElementById("mgCheck").checked === true) {
            bunkerOptions.mg = true;
            if (document.getElementById("mgNum").value === "") {
                fieldsFilled = false;
            }
            else if (document.getElementById("mgNum").value <= 0) {
                numbersValid = false;
            }
        }
        if (document.getElementById("atCheck").checked === true) {
            bunkerOptions.at = true;
            if (document.getElementById("atNum").value === "") {
                fieldsFilled = false;
            }
            else if (document.getElementById("atNum").value <= 0) {
                numbersValid = false;
            }
        }
        if (document.getElementById("howiCheck").checked === true) {
            bunkerOptions.howi = true;
            if (document.getElementById("howiNum").value === "") {
                fieldsFilled = false;
            }
            else if (document.getElementById("howiNum").value <= 0) {
                numbersValid = false;
            }
        }
        if (document.getElementById("scCheck").checked === true) {
            bunkerOptions.sc = true;
            if (document.getElementById("scNum").value === "") {
                fieldsFilled = false;
            }
            else if (document.getElementById("scNum").value <= 0) {
                numbersValid = false;
            }
        }

        optionsJSON = JSON.stringify(bunkerOptions);

        var errorMsg = "";
        if(fieldsFilled === false){
            errorMsg += "All visible fields must be filled\n";
            formValid = false;
        }
        if(numbersValid === false){
            errorMsg += "All visible number inputs must be greater than zero\n";
            formValid = false;
        }
        if(formValid === false){
            throw(errorMsg);
        }
    }
    catch (msg) {
        window.alert(msg);
        return;
    }
    if(formValid){
        calculateCosts();
    }
}

function bbNum(){
    if (document.getElementById("bbCheck").checked === true){
        document.getElementById("bbNum").parentElement.removeAttribute("hidden");
    }
    else{
        document.getElementById("bbNum").parentElement.setAttribute("hidden", "");
    }
}

function rgNum() {
    if (document.getElementById("rgCheck").checked === true) {
        document.getElementById("rgNum").parentElement.removeAttribute("hidden");
    }
    else {
        document.getElementById("rgNum").parentElement.setAttribute("hidden", "");
    }
}

function mgNum() {
    if (document.getElementById("mgCheck").checked === true) {
        document.getElementById("mgNum").parentElement.removeAttribute("hidden");
    }
    else {
        document.getElementById("mgNum").parentElement.setAttribute("hidden", "");
    }
}

function atNum() {
    if (document.getElementById("atCheck").checked === true) {
        document.getElementById("atNum").parentElement.removeAttribute("hidden");
    }
    else {
        document.getElementById("atNum").parentElement.setAttribute("hidden", "");
    }
}

function howiNum() {
    if (document.getElementById("howiCheck").checked === true) {
        document.getElementById("howiNum").parentElement.removeAttribute("hidden");
    }
    else {
        document.getElementById("howiNum").parentElement.setAttribute("hidden", "");
    }
}

function scNum() {
    if (document.getElementById("scCheck").checked === true) {
        document.getElementById("scNum").parentElement.removeAttribute("hidden");
    }
    else {
        document.getElementById("scNum").parentElement.setAttribute("hidden", "");
    }
}

function createEventListeners(){
    /*
    document.getElementById("bbCheck").addEventListener("click", bbNum, false);
    document.getElementById("rgCheck").addEventListener("click", rgNum, false);
    document.getElementById("mgCheck").addEventListener("click", mgNum, false);
    document.getElementById("atCheck").addEventListener("click", atNum, false);
    document.getElementById("howiCheck").addEventListener("click", howiNum, false);
    document.getElementById("scCheck").addEventListener("click", scNum, false);
    */

    $("#bbCheck").click(bbNum);
    $("#rgCheck").click(rgNum);
    $("#mgCheck").click(mgNum);
    $("#atCheck").click(atNum);
    $("#howiCheck").click(howiNum);
    $("#scCheck").click(scNum);


    //document.getElementsByTagName("form")[0].addEventListener("submit", validateForm, false);
    $("form").submit(validateForm);
}

window.addEventListener("load", createEventListeners, false);
