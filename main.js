var deferredPrompt;var audio=new Audio();audio.preload='none';var hasErrors;var lastUrl;var canPause;function play(url,loaderId,slug){if(canPause){audio.pause();audio.currentTime=0;}
if(lastUrl!=url||hasErrors){audio.src=url;lastUrl=url;hasErrors=false;canPause=false;audio.onerror=function(){hasErrors=true};if(loaderId){document.getElementById(loaderId).style.display='block';audio.addEventListener('canplay',_=>{document.getElementById(loaderId).style.display='none';});}}
var playPromise=audio.play();if(playPromise!==undefined){playPromise.then(_=>{canPause=true;}).catch(error=>{hasErrors=true;});}
if(navigator.vibrate){navigator.vibrate(5);}}

function nicebomb() {alert('hello')}
function MEANbomb() {alert('itsa me maria')}
function ambatukam() {play('/source/ambatukam.mp3')}