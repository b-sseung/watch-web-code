import { useState, useContext, useEffect, useRef } from 'react';
import { AppContext } from '../App';
import { useTranslation } from 'react-i18next';
import { getSpeech } from '../locales/voice';
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
  const [, minute] = time.split(':');
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
    getSpeech(speak.value);
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
