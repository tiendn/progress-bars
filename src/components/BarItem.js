import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

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
      <div
        data-testid="barItemHightlight"
        className={backgroundClassName}
        style={{ width: `${width}%` }}
      />
      <span data-testid="barItemValue" className={textValueClassName}>
        {percent}%
      </span>
    </div>
  );
};

BarItem.propTypes = {
  active: PropTypes.bool.isRequired,
  limit: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default BarItem;
