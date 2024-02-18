import { useState, useContext, useEffect, useRef } from 'react';
import { AppContext } from '../App';
import { useTranslation } from 'react-i18next';
import { DigitalFontDiv, FlexColDiv, FlexRowDiv } from '../css/CustomTag';

const TimeItem = ({ base, time }) => {
  let case1 = matchMedia('screen and (min-width: 1024px)');
  let case2 = matchMedia('screen and (min-width: 768px)');
  let case3 = matchMedia('screen and (min-width: 512px)');

  let size = '';

  if (case1.matches) {
    size = '200px';
  } else if (case2.matches) {
    size = '150px';
  } else if (case3.matches) {
    size = '100px';
  } else {
    size = '70px';
  }

  const parentStyle = {
    position: 'relative',
    textAlign: 'right',
  };

  const childrenBase = {
    color: '#EAEAEA',
    fontSize: size,
  };

  const childrenTime = {
    position: 'absolute',
    top: 0,
    right: time === '1' ? -6 : 0,
    fontSize: size,
  };

  return (
    <FlexColDiv style={parentStyle}>
      <DigitalFontDiv style={childrenBase}>{base}</DigitalFontDiv>
      <DigitalFontDiv style={childrenTime}>{time}</DigitalFontDiv>
    </FlexColDiv>
  );
};

const TimeComponent = () => {
  const { time } = useContext(AppContext);
  const [hour, minute] = time.split(':');
  const { t } = useTranslation();
  const [speakTime, setSpeakTime] = useState(`${minute}${t('minute')}`);
  const speak = useRef();

  const base = ['8', '8', ':', '8', '8', ':', '8', '8'];
  const time_cut = time.split('');

  const flexStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  };

  useEffect(() => {
    const newTime = `${minute}${t('minute')}`;

    if (speakTime !== newTime) {
      speak.value = newTime;
      speak.current.click();
    }
  });

  const onClickEvent = () => {
    if (typeof SpeechSynthesisUtterance === 'undefined' || typeof window.speechSynthesis === 'undefined') {
      alert('이 브라우저는 음성 합성을 지원하지 않습니다.');
      return;
    }

    window.speechSynthesis.cancel();

    const speechMsg = new SpeechSynthesisUtterance();
    speechMsg.rate = 1; // 속도: 0.1 ~ 10
    speechMsg.pitch = 1; // 음높이: 0 ~ 2
    speechMsg.lang = navigator.language;
    speechMsg.text = speak.value;

    window.speechSynthesis.speak(speechMsg);
    setSpeakTime(speak.value);
  };

  return (
    <FlexRowDiv style={flexStyle}>
      {time_cut.map((text, index) => {
        return <TimeItem key={index} base={base[index]} time={text}></TimeItem>;
      })}
      <div style={{ display: 'none' }} ref={speak} onClick={onClickEvent}></div>
    </FlexRowDiv>
  );
};

export default TimeComponent;
