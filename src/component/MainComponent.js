import { useContext } from 'react';
import DateComponent from './DateComponent';
import TimeComponent from './TimeComponent';
import WeekComponent from './WeekComponent';
import { AppContext } from '../App';
import { FlexColDiv, FlexDiv } from '../css/CustomTag';

const MainComponent = () => {
  const { week, date, time } = useContext(AppContext);

  const parentStyle = {
    width: '90vw',
    height: '90vh',
    justifyContent: 'center',
    margin: '0px auto',
  };

  const case1 = matchMedia('screen and (min-width: 512px)');

  return (
    <FlexColDiv style={parentStyle}>
      <DateComponent date={date}></DateComponent>
      <FlexDiv style={{ flexDirection: case1.matches ? 'row' : 'column' }}>
        <WeekComponent week={week} isMatch={case1.matches}></WeekComponent>
        {time === null ? '' : <TimeComponent></TimeComponent>}
      </FlexDiv>
    </FlexColDiv>
  );
};

export default MainComponent;
