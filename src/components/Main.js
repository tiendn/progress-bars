import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';

import AppInit from './AppInit';
import ProgressBars from './ProgressBars';

const Main = ({ bars }) => {
  if (bars.length === 0) return <AppInit />;
  return <ProgressBars />;
};

const mapStateToProps = ({ bar }) => ({
  bars: bar.bars,
});

export default connect(mapStateToProps)(Main);
