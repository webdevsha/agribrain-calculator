/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

//function to display the changed values
function displayCropAcre(){
        var acre = document.getElementById("cropAcre").value; //cropAcre
        document.getElementById("cropAcreDisplay").value = `${acre} acre`;
    }

function displayCropCapital(){
        var cap = document.getElementById("cropCapital").value; //cropYield
        cap.toLocaleString('en');
        document.getElementById("cropCapitalDisplay").value = `RM ${cap}`;
    }

function displayCropYield(){
        var yield = document.getElementById("cropYield").value; //cropYield
        yield.toLocaleString('en');
        document.getElementById("cropYieldDisplay").value = `${yield} %`;
    }

//jQuery
$(document).ready(function(){
    $("button").click(function(){
      $("p").toggle();
    });
  });

//this one is for the short term vs long term    
function myFunction (){
    var checkBox = document.getElementById("myonoffswitch");
    var v = document.getElementById("displayDurian");
    var w = document.getElementById("displayCoconut");
    var x = document.getElementById("displayBanana");
    var y = document.getElementById("displayChilli");
    var z = document.getElementById("displayNenas");
    if (checkBox.checked === true){
        v.style.display = 'block';
        w.style.display = 'block';
        x.style.display = 'none';
        y.style.display = 'none';
        z.style.display = 'none';
    } else {
        x.style.display = 'block';
        y.style.display = 'block';
        z.style.display = 'block';
        v.style.display = 'none';
        w.style.display = 'none';
    }
}

function calculateCrop () {
    var check = document.getElementById("myonoffswitch").value;
    var none = document.getElementById("cropCapital").value;
    var acre = document.getElementById("cropAcre").value;

        //the calculated ROI crops:
        var bananaText;
    
        //percent for the ROI
        var durianPercent, bananaPercent, chilliPercent, nenasPercent, coconutPercent;

    if (check.checked === true){
        document.getElementById("bananaROI").value = "Working";
    } else {
        coconutText = ((none*1.28)/5).toFixed(2);
        coconutText = (coconutText*acre).toFixed(2);
        document.getElementById("coconutROI").value = `RM ${coconutText}`;
        coconutPercent = (((coconutText)/none)*100).toFixed(2);
        document.getElementById("coconutROIpercent").value = `${coconutPercent} %`;
    }
}