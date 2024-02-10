class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success =
      statusCode < 400; /** all the success status code in range [<400].  */
  }
}

export { ApiResponse };
