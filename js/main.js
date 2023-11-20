let dropdown = document.querySelector('.dropdown');
let content_textbox = document.querySelector('.textmessage');
let listen_btn = document.querySelector('.playaudio');

let speech = new SpeechSynthesisUtterance(); // ready audio for listen 
let playspeech = window.speechSynthesis;

let voices = [];

//seech.text = content_textbox.value;
listen_btn.addEventListener('click',speak);
let voiceselect = document.querySelector('.voiceselect');
let rate_toggle = listen_btn.insertAdjacentHTML("afterend",
`     <div class="uiunit">
      <label for="rateFld">Speed: </label><input type="number" class="rateFld" min="0.5" max="2" step="0.1" value="1.2">
      </div> `
);


window.onload = () =>{
   listvoices();
   all_voice();
   rateAudio();
}

function listvoices(){
playspeech.onvoiceschanged = () =>{
   
   voices = playspeech.getVoices();
   speech.voice = voices[0];
   voices.forEach((voice,i) =>(voiceselect.options[i]= new Option(voice.name,i)))
}
}

function all_voice(){
const voice = playspeech.getVoices();

voices.forEach((voice, index) => {
  const option = document.createElement('option');
  option.value = index;
  option.textContent = voice.name;
  voiceselect.append(option);
});
}


/*
voiceselect.onchange = () =>{
    const selectedVoiceIndex = voiceselect.value;
    speech.voice = voices[selectedVoiceIndex];
}*/

function rateAudio(){ // probelmset
   let rate_toggle = document.querySelector('.rateFld');
   speech.rate = rate_toggle.getAttribute('value');
   console.log(speech.rate);
}


function speak(){ //single role function 
   speech.text = content_textbox.value;
   playspeech.speak(speech);
   if(content_textbox.value ==  ""){
      window.alert("not prompt, please enter prompt!!")
   }
};
