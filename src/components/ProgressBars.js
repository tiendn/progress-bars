import React from 'react';
import { connect } from 'react-redux';
import { Button, Cascader } from 'antd';

import BarItem from './BarItem';
import { changeBarValue, changeActiveBar } from '../redux/barSlice';

const ProgressBars = ({ dispatch, bars, limit, buttons, currentBarIndex }) => {
  const onChangePoint = point => {
    dispatch(changeBarValue({ point }));
  };

  const onChangeCurrentBar = barIndex => {
    dispatch(changeActiveBar({ barIndex }));
  };

  const BarComponents = [];
  const barOptions = [];
  bars.forEach((bar, index) => {
    BarComponents.push(
      <BarItem active={currentBarIndex === index} limit={limit} value={bar} />,
    );
    barOptions.push({
      label: `#progress ${index}`,
      value: index,
    });
  });

  const PointButtons = buttons.map(point => (
    <Button
      key={point}
      className="barAction"
      onClick={() => onChangePoint(point)}
    >
      {point}
    </Button>
  ));

  return (
    <div className="appContainer">
      <h1>Progress Bars Demo</h1>
      <h3 style={{ color: 'gray', marginBottom: '5%' }}>Limit: {limit}</h3>
      <div className="barContainer">{BarComponents}</div>
      <div className="barActions">
        <Cascader
          value={[currentBarIndex]}
          options={barOptions}
          onChange={onChangeCurrentBar}
          placeholder="Please select"
          style={{ marginRight: 10 }}
        />
        {PointButtons}
      </div>
    </div>
  );
};

const mapStateToProps = ({
  bar: { bars, limit, buttons, currentBarIndex },
}) => ({
  bars,
  buttons,
  currentBarIndex,
  limit,
});

export default connect(mapStateToProps)(ProgressBars);
