import React from 'react';
import { FlexDiv, LiquidFontDiv } from '../css/CustomTag';

const words = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const WeekItem = ({ word, color }) => {
  return <LiquidFontDiv style={{ color: color }}>{word}</LiquidFontDiv>;
};

const WeekComponent = React.memo(({ week, isMatch }) => {
  console.log('createWeek');
  const divStyle = {
    flexDirection: isMatch ? 'column' : 'row',
    alignItems: isMatch ? 'end' : 'center',
    justifyContent: isMatch ? 'flex-start' : 'space-between',
    marginBottom: isMatch ? '0px' : '10px',
  };
  return (
    <FlexDiv style={divStyle}>
      {words.map((word, index) => (
        <WeekItem key={index} word={word} color={index === week ? 'red' : 'gray'}></WeekItem>
      ))}
    </FlexDiv>
  );
});

export default WeekComponent;
