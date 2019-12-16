const ERROR_MESSAGE = `API request failed.`;

const returnError = err => {
  return {
    errorMessage: err,
  };
};

export const parseResponse = response => {
  try {
    const { meta } = response.data;
    if (meta.status === 200) {
      return response.data;
    } else {
      return returnError(meta.msg || ERROR_MESSAGE);
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
