import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';

import './App.scss';
import AppInit from './components/AppInit';
import ProgressBars from './components/ProgressBars';

const App = ({ bars }) => {
  if (bars.length === 0) return <AppInit />;
  return <ProgressBars />;
};

const mapStateToProps = ({ bar }) => ({
  bars: bar.bars,
});

export default connect(mapStateToProps)(App);
