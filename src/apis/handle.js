const ERROR_MESSAGE = `API request failed.`;

const returnError = message => {
  throw new Error(message);
};

export const parseResponse = response => {
  try {
    const { status, statusText, data } = response;
    if (status === 200) {
      return data;
    } else {
      return returnError(statusText || ERROR_MESSAGE);
    }
  } catch (e) {
    return returnError(ERROR_MESSAGE);
  }
};

export const handleError = error => {
  try {
    const { response } = error;
    return returnError(response.data.message || ERROR_MESSAGE);
  } catch (e) {
    return returnError(ERROR_MESSAGE);
  }
};
