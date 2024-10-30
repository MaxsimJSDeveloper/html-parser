function errorHandler(parseFunction) {
  return function (...args) {
    try {
      return parseFunction(...args);
    } catch (error) {
      const position =
        error.position !== undefined ? `at position ${error.position}` : "";
      const errorMessage = error.message || "Unknown parsing error";

      error.message = position ? `${errorMessage} (${position})` : errorMessage;

      throw error;
    }
  };
}

export default errorHandler;
