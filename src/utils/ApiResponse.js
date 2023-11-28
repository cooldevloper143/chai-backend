class ApiResponse {
    constructor(data, message, status, code , statuscode) {
        this.data = data;
        this.message = message;
        this.status = status;
        this.code = code;
        this.statuscode = statuscode;
        this.success = true;
    }
}


export default ApiResponse;