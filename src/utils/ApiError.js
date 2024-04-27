<<<<<<< HEAD
class ApiError extends Error{
    constructor(
       StatusCode,
       message= "Something went wrong",
       errors = [],
       stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null,
        this.message = message
        this.success = false
        this.errors = errors

        if(stack){
           this.stack = statck
        }
        else{
            Error.captureStackTrace(this, this.
                constructor)
        }

    }
}

export {ApiError}
=======
class ApiError extends Error{
    constructor(
       StatusCode,
       message= "Something went wrong",
       errors = [],
       statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null,
        this.message = message
        this.success = false
        this.errors = errors

        if(stack){
           this.stack = statck
        }
        else{
            Error.captureStackTrace(this, this.
                constructor)
        }

    }
}

export {ApiError}
>>>>>>> fec0c9769f5edfc4f1422d93f1f8a8309f0c200e
