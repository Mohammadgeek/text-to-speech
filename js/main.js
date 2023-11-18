let dropdown = document.querySelector('.dropdown');
let content_textbox = document.querySelector('.textmessage');
let listen_btn = document.querySelector('.playaudio');

let speech = new SpeechSynthesisUtterance(); // ready audio for listen 
let playspeech = window.speechSynthesis;

let voices = [];

//seech.text = content_textbox.value;
listen_btn.addEventListener('click',speak);

let voiceselect = document.querySelector('.voiceselect');
//voiceselect.setAttribute('class','voiceselect');
//voiceselect.setAttribute('data-name','enable');
//dropdown.append(voiceselect);


playspeech.onvoiceschanged = () =>{
   
   voices = playspeech.getVoices();
   speech.voice = voices[0];
   voices.forEach((voice,i) =>(voiceselect.options[i]= new Option(voice.name,i)))
}


const voice = playspeech.getVoices();

voices.forEach((voice, index) => {
  const option = document.createElement('option');
  option.value = index;
  option.textContent = voice.name;
  voiceselect.append(option);
});


voiceselect.onchange = () =>{
    const selectedVoiceIndex = voiceselect.value;
    speech.voice = voices[selectedVoiceIndex];
}

function speak(){
   speech.text = content_textbox.value;
   playspeech.speak(speech);
};
