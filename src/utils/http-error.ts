class HttpError extends Error {
    status: number;
  
    constructor(message: string, status: number) {
      super(message);
      this.status = status;
      this.name = this.constructor.name;
    }
  }
  
  export { HttpError };
  