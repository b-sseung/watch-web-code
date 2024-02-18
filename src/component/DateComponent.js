import React from 'react';
import { useTranslation } from 'react-i18next';
import { DigitalFontDiv } from '../css/CustomTag';

const DateComponent = React.memo(({ date }) => {
  const { t } = useTranslation();
  const [year, month, day] = date.split('-');

  return (
    <DigitalFontDiv style={{ textAlign: 'right' }}>{`${year}${t('year')}${month.padStart(2, '0')}${t(
      'month'
    )}${day}`}</DigitalFontDiv>
  );
});

export default DateComponent;
