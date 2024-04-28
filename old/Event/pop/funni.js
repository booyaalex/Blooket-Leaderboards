let frame_1 = 1;
setInterval(function () {
  frame_1++;
  if(frame_1 == 1) {
    //Frame 2
    document.getElementById('chara1').src = "https://i.ibb.co/51qRMFw/Healer-2.png";
  } else if(frame_1 == 2) {
    //Frame 3
    document.getElementById('chara1').src = "https://i.ibb.co/smknB5j/Healer-3.png";
  } else if(frame_1 == 3) {
    //Frame 4
    document.getElementById('chara1').src = "https://i.ibb.co/tBFH9sC/Healer-4.png";
  } else if(frame_1 == 4) {
    //Frame 5
    document.getElementById('chara1').src = "https://i.ibb.co/Jd4N4mk/Healer-5.png";
  } else if(frame_1 == 5) {
    document.getElementById('chara1').src = "https://i.ibb.co/K7kf9SD/Healer-6.png";
  } else if(frame_1 == 6) {
    //Frame 1
    document.getElementById('chara1').src = "https://i.ibb.co/0YHJHgn/Healer-1.png";
    frame_1 = 0;
  }
}, 175);

function blowUp() {
  document.getElementById('chara1').src = "https://64.media.tumblr.com/92d247b8e23ceca5921197789baff48f/tumblr_inline_ozcja3owj11u59zy5_400.gif";
  document.getElementById('chara2').src = "https://64.media.tumblr.com/92d247b8e23ceca5921197789baff48f/tumblr_inline_ozcja3owj11u59zy5_400.gif";
  document.getElementById('chara3').src = "https://64.media.tumblr.com/92d247b8e23ceca5921197789baff48f/tumblr_inline_ozcja3owj11u59zy5_400.gif";
  document.getElementById('chara4').src = "https://64.media.tumblr.com/92d247b8e23ceca5921197789baff48f/tumblr_inline_ozcja3owj11u59zy5_400.gif";
  document.getElementById('chara5').src = "https://64.media.tumblr.com/92d247b8e23ceca5921197789baff48f/tumblr_inline_ozcja3owj11u59zy5_400.gif";
  document.getElementById('chara6').src = "https://64.media.tumblr.com/92d247b8e23ceca5921197789baff48f/tumblr_inline_ozcja3owj11u59zy5_400.gif";
  frame_1 = 7;
}
