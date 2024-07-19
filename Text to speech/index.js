//add different voices and convert speech in javascript
let speech = new SpeechSynthesisUtterance();
//for change the voices
let voices=[];

let voiceSelect=document.querySelector("select");

window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();//it will provided all voices
speech.voice=voices[0];
//display in dropdown
voices.forEach((voice,i)=> (voiceSelect.options[i])=new Option(voice.name,i));

}; 

//for change the voice selected in dropdown
voiceSelect.addEventListener("change",()=>{
    speech.voice =voices[voiceSelect.value];
})
document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);


});
 