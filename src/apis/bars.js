import Request from './request';

const END_POINT = process.env.REACT_APP_END_POINT;

export const getBars = () => {
  return Request.get(`${END_POINT}/bars`);
};
