import React from 'react';
import { connect } from 'react-redux';
import { Button, Select } from 'antd';

import BarItem from './BarItem';
import { changeBarValue, changeActiveBar } from '../redux/barSlice';

const { Option } = Select;

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
    barOptions.push(<Option value={index}>#progress {index + 1}</Option>);
  });

  const PointButtons = buttons.map(point => (
    <Button
      data-testid="barButton"
      key={point}
      className="barAction"
      onClick={() => onChangePoint(point)}
    >
      {point > 0 ? `+${point}` : point}
    </Button>
  ));

  return (
    <div className="appContainer" data-testid="progressBars">
      <h1>Progress Bars Demo</h1>
      <h3 style={{ color: 'gray' }}>Author: Dao Nam Tien</h3>
      <h3 style={{ color: 'gray', marginBottom: '5%' }}>Limit: {limit}</h3>
      <div className="barContainer">{BarComponents}</div>
      <div className="barActions">
        <Select
          value={currentBarIndex}
          onChange={onChangeCurrentBar}
          placeholder="Please select"
          style={{ marginRight: 10 }}
          className="barAction"
        >
          {barOptions}
        </Select>
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
