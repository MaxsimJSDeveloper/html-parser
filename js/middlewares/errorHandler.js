function errorHandler(parseFunction) {
  return function (...args) {
    try {
      return parseFunction(...args);
    } catch (error) {
      console.error("Error parsing HTML:", error.message);
      throw error;
    }
  };
}

export default errorHandler;
