import axios from 'axios';

import { parseResponse, handleError } from './handle';

export default class Request {
  // Timeout request is 5s
  static defaultConfigs = { timeout: 5000 };

  static post(url, data, configs) {
    return axios
      .post(url, data, { ...Request.defaultConfigs, ...configs })
      .then(parseResponse)
      .catch(handleError);
  }

  static get(url, data, configs) {
    return axios
      .get(url, data, { ...Request.defaultConfigs, ...configs })
      .then(parseResponse)
      .catch(handleError);
  }
}
