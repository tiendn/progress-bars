import React from 'react';
import classNames from 'classnames';

const BarItem = ({ active, limit, value }) => {
  const percent = Math.floor((value / limit) * 100);
  const width = percent < 100 ? percent : 100;

  const backgroundClassName = classNames(
    'barItemHighlight',
    value > limit ? 'barItemLimit' : '',
    active ? 'barItemActive' : 'barItemInactive',
  );

  const textValueClassName = classNames(
    'barItemTextValue',
    width < 55 ? 'barItemTextValueNegative' : '',
  );

  return (
    <div className="barItem">
      <div className={backgroundClassName} style={{ width: `${width}%` }} />
      <span className={textValueClassName}>{percent}%</span>
    </div>
  );
};

export default BarItem;
