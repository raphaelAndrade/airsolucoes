//contrast activate

function contrastActivate(){
  var triggerContrast = $(".triggerContrast");
  var elementContrast = $("body");

  triggerContrast.on('click',function(){
    event.preventDefault();
    elementContrast.toggleClass("contrast");

     if($("body").hasClass("contrast")){
        $(".imageGray").css("filter", "grayscale(100%)");
      }
      else{
        $(".imageGray").css("filter", "grayscale(0%)");
      }
  })
}



//function Close Text

function addcloseText(){
  var elementAddClose = $(".triggerMoreClose");
  elementAddClose.on("click",function(){
    event.preventDefault();

    if($("body").hasClass("normalZoom")){
      $("body").removeClass("normalZoom");
      $("body").addClass("zoom1");
    }
  });
}

// Function reset Password
function resetCloseText(){
  var elementRemoveClose = $(".triggerResetClose");
  elementRemoveClose.on('click',function(){
     event.preventDefault();
    if($("body").hasClass("zoom1")){
      $("body").removeClass("zoom1");
      $("body").addClass("normalZoom");
    }
  })

}

$(document).ready(function(){

  //call the function that activate contrast
  contrastActivate();

  //call the function that make the text bigger
  addcloseText();

//call the function that make the text bigger
  resetCloseText()
});