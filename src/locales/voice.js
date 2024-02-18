export const getSpeech = (text) => {
  if (typeof SpeechSynthesisUtterance === 'undefined' || typeof window.speechSynthesis === 'undefined') {
    alert('이 브라우저는 음성 합성을 지원하지 않습니다.');
    return;
  }

  let voices = [];

  const setVoiceList = () => {
    voices = window.speechSynthesis.getVoices();
  };

  setVoiceList();

  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    //voice list에 변경됐을때, voice를 다시 가져온다.
    window.speechSynthesis.onvoiceschanged = setVoiceList;
  }

  const speech = (txt) => {
    window.speechSynthesis.cancel();

    const speechMsg = new SpeechSynthesisUtterance(txt);

    speechMsg.rate = 1; // 속도: 0.1 ~ 10
    speechMsg.pitch = 1; // 음높이: 0 ~ 2
    speechMsg.lang = navigator.language;
    speechMsg.text = txt;

    window.speechSynthesis.speak(speechMsg);
  };

  speech(text);
};
