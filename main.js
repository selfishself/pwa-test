console.log(Date);


function detectOrientation() {
  if(window.innerHeight < window.innerWidth){
    $('body').removeClass('portrait').addClass('landscape');
  } else {
    $('body').removeClass('landscape').addClass('portrait');
  }
}

detectOrientation();
