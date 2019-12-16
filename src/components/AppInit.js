import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Spin, Button, Result } from 'antd';

import { getBarData } from '../redux/barSlice';

const AppInit = ({ dispatch, loading }) => {
  useEffect(() => {
    dispatch(getBarData());
  }, []);

  const onRetry = () => {
    dispatch(getBarData());
  };

  if (loading)
    return (
      <div className="appContainer">
        <Spin size="large" />
      </div>
    );

  return (
    <div className="appDefaultContainer">
      <Result
        status="warning"
        title="There are some problems with your connection."
        extra={
          <Button
            type="primary"
            key="retry"
            style={{ width: 100 }}
            onClick={onRetry}
          >
            Retry
          </Button>
        }
      />
    </div>
  );
};

const mapStateToProps = ({ bar }) => ({
  loading: bar.loading,
});

export default connect(mapStateToProps)(AppInit);
