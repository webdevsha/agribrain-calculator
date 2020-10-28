/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
//console.log("hi");

/*function calcNumbers(result){
    form.displayResult.value=form.displayResult.value+result;
  }*/

//function to display the changed values
function displayCropAcre(){
        var acre = document.getElementById("cropAcre").value; //cropAcre
        document.getElementById("cropAcreDisplay").value = `${acre} acre`;
    }

function displayCropCapital(){
        var yield = document.getElementById("cropCapital").value; //cropYield
        yield.toLocaleString('en');
        document.getElementById("cropCapitalDisplay").value = `RM ${yield}`;
    }

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

//not used 
function displayCropYear(){
    var year = document.getElementById("cropYear").value; //cropYear
    document.getElementById("cropYearDisplay").value = `${year} years`;

    //the calculated ROI crops:
    var durianText = document.getElementById("durianROI").value; //durian-D24
    var bananaText = document.getElementById("bananaROI").value; //banana-berangan
    var chilliText = document.getElementById("chilliROI").value; //chilli-padi
    var nenasText = document.getElementById("nenasROI").value; //pineapple
    var coconutText = document.getElementById("coconutROI").value; //coconut-MATAG

    //percent for the ROI
    var durianPercent, bananaPercent, chilliPercent, nenasPercent, coconutPercent;

    var none = document.getElementById("displayInput").value; //capital-input(RM)
    document.getElementById("displayInput").value = `${none}`;
    
    if(year <= '2.5'){
        bananaText = ((none/15.42)*35.58*20).toFixed(2);
        bananaText = (bananaText*acre).toFixed(2);
        bananaPercent = ((bananaText-none)/none).toFixed(2);
        document.getElementById("bananaROI").value = `RM ${bananaText}`;
        document.getElementById("bananaROIpercent").value = `${bananaPercent} %`;
        chilliText = ((none/12)*5.50*2083).toFixed(2);
        chilliText = (chilliText*acre).toFixed(2);
        document.getElementById("chilliROI").value = `RM ${chilliText}`;
        chilliPercent = ((chilliText-none)/none).toFixed(2);
        document.getElementById("chilliROIpercent").value = `${chilliPercent} %`;
        nenasText = ((none/0.4)*1.6).toFixed(2);
        nenasText = (nenasText*acre).toFixed(2);
        document.getElementById("nenasROI").value = `RM ${nenasText}`;
        nenasPercent = ((nenasText-none)/none).toFixed(2);
        document.getElementById("nenasROIpercent").value = `${nenasPercent} %`;
        //durian & coconut not harvest yet - so dont calculate
        document.getElementById("durianROI").value = "Not harvest yet";
        document.getElementById("coconutROI").value = "Not harvest yet";
    } else if ( year <= '3'){
        bananaText = ((none/15.42)*35.58*20).toFixed(2);
        bananaText = (bananaText*acre).toFixed(2);
        bananaPercent = ((bananaText-none)/none).toFixed(2);
        document.getElementById("bananaROI").value = `RM ${bananaText}`;
        document.getElementById("bananaROIpercent").value = `${bananaPercent} %`;
        chilliText = ((none/12)*5.50*2083).toFixed(2);
        chilliText = (chilliText*acre).toFixed(2);
        document.getElementById("chilliROI").value = `RM ${chilliText}`;
        chilliPercent = ((chilliText-none)/none).toFixed(2);
        document.getElementById("chilliROIpercent").value = `${chilliPercent} %`;
        nenasText = ((none/0.4)*1.6).toFixed(2);
        nenasText = (nenasText*acre).toFixed(2);
        document.getElementById("nenasROI").value = `RM ${nenasText}`;
        nenasPercent = ((nenasText-none)/none).toFixed(2);
        document.getElementById("nenasROIpercent").value = `${nenasPercent} %`;
        coconutText = ((none/31.35)*69.45).toFixed(2);
        coconutText = (coconutText*acre).toFixed(2);
        document.getElementById("coconutROI").value = `RM ${coconutText}`;
        coconutPercent = ((coconutText-none)/none).toFixed(2);
        document.getElementById("coconutROIpercent").value = `${coconutPercent} %`;
        //durian only not harvest yet - so dont calculate
        document.getElementById("durianROI").value = "Not harvest yet";
    } else if (year >= '4.5'){
        bananaText = ((none/15.42)*35.58*20).toFixed(2);
        bananaText = (bananaText*acre).toFixed(2);
        bananaPercent = ((bananaText-none)/none).toFixed(2);
        document.getElementById("bananaROI").value = `RM ${bananaText}`;
        document.getElementById("bananaROIpercent").value = `${bananaPercent} %`;
        chilliText = ((none/12)*5.50*2083).toFixed(2);
        chilliText = (chilliText*acre).toFixed(2);
        document.getElementById("chilliROI").value = `RM ${chilliText}`;
        chilliPercent = ((chilliText-none)/none).toFixed(2);
        document.getElementById("chilliROIpercent").value = `${chilliPercent} %`;
        nenasText = ((none/0.4)*1.6).toFixed(2);
        nenasText = (nenasText*acre).toFixed(2);
        document.getElementById("nenasROI").value = `RM ${nenasText}`;
        nenasPercent = ((nenasText-none)/none).toFixed(2);
        document.getElementById("nenasROIpercent").value = `${nenasPercent} %`;
        coconutText = ((none/31.35)*69.45).toFixed(2);
        coconutText = (coconutText*acre).toFixed(2);
        document.getElementById("coconutROI").value = `RM ${coconutText}`;
        coconutPercent = ((coconutText-none)/none).toFixed(2);
        document.getElementById("coconutROIpercent").value = `${coconutPercent} %`;
        durianText = ((none/50)*3700).toFixed(2);
        durianText = (durianText*acre).toFixed(2);
        document.getElementById("durianROI").value = `RM ${durianText}`;
        durianPercent = ((durianText-none)/none).toFixed(2);
        document.getElementById("durianROIpercent").value = `${durianPercent} %`;
    }
}

function sampleFunction() { //function pertama

    var year = document.getElementById("cropYear").value; //cropYear
    var acre = document.getElementById("cropAcre").value; //cropAcre
    //var yield = document.getElementById("cropYield").value; //cropYield - hidden

    //the money in
    var none = document.getElementById("displayInput").value; //capital-input(RM)
    document.getElementById("displayInput").value = `${none}`;

    //the calculated ROI crops:
    var durianText = document.getElementById("displayInput").value; //durian-D24
    var bananaText = document.getElementById("displayInput").value; //banana-berangan
    var chilliText = document.getElementById("displayInput").value; //chilli-padi
    var nenasText = document.getElementById("displayInput").value; //pineapple
    var coconutText = document.getElementById("displayInput").value; //coconut-MATAG

    if(year <= '2.5'){
        bananaText = ((none/15.42)*35.58*20).toFixed(2);
        bananaText = (bananaText*acre).toFixed(2);
        document.getElementById("bananaROI").value = `RM ${bananaText}`;
        chilliText = ((none/12)*5.50*2083).toFixed(2);
        chilliText = (chilliText*acre).toFixed(2);
        document.getElementById("chilliROI").value = `RM ${chilliText}`;
        nenasText = ((none/0.4)*1.6).toFixed(2);
        nenasText = (nenasText*acre).toFixed(2);
        document.getElementById("nenasROI").value = `RM ${nenasText}`;
        //durian & coconut not harvest yet - so dont calculate
        document.getElementById("durianROI").value = "Not harvest yet";
        document.getElementById("coconutROI").value = "Not harvest yet";
    } else if ( year <= '3'){
        bananaText = ((none/15.42)*35.58*20).toFixed(2);
        bananaText = (bananaText*acre).toFixed(2);
        document.getElementById("bananaROI").value = `RM ${bananaText}`;
        chilliText = ((none/12)*5.50*2083).toFixed(2);
        chilliText = (chilliText*acre).toFixed(2);
        document.getElementById("chilliROI").value = `RM ${chilliText}`;
        nenasText = ((none/0.4)*1.6).toFixed(2);
        nenasText = (nenasText*acre).toFixed(2);
        document.getElementById("nenasROI").value = `RM ${nenasText}`;
        coconutText = ((none/31.35)*69.45).toFixed(2);
        coconutText = (coconutText*acre).toFixed(2);
        document.getElementById("coconutROI").value = `RM ${coconutText}`;
        //durian only not harvest yet - so dont calculate
        document.getElementById("durianROI").value = "Not harvest yet";
    } else if (year >'4.5'){
        bananaText = ((none/15.42)*35.58*20).toFixed(2);
        bananaText = (bananaText*acre).toFixed(2);
        document.getElementById("bananaROI").value = `RM ${bananaText}`;
        chilliText = ((none/12)*5.50*2083).toFixed(2);
        chilliText = (chilliText*acre).toFixed(2);
        document.getElementById("chilliROI").value = `RM ${chilliText}`;
        nenasText = ((none/0.4)*1.6).toFixed(2);
        nenasText = (nenasText*acre).toFixed(2);
        document.getElementById("nenasROI").value = `RM ${nenasText}`;
        coconutText = ((none/31.35)*69.45).toFixed(2);
        coconutText = (coconutText*acre).toFixed(2);
        document.getElementById("coconutROI").value = `RM ${coconutText}`;
        durianText = ((none/50)*3700).toFixed(2);
        durianText = (durianText*acre).toFixed(2);
        document.getElementById("durianROI").value = `RM ${durianText}`;
    }
   }

