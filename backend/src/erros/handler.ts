import { ErrorRequestHandler } from "express";
import {ValidationError} from 'yup';
import {QueryFailedError} from 'typeorm';


interface ValidationErros{
  [key:string]: string[]
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  if(error instanceof ValidationError){
    let errors: ValidationErros = {}

    error.inner.forEach(error=>{
      errors[error.path] = error.errors;
    })

    return response.status(400).json({message: "Validations Fails", errors});
  }
  if(error instanceof QueryFailedError){
    const msgError = error.message;
    return response.status(400).json({message: "Validations Fails", error:msgError});
  }


  console.error(error);

  return response.status(500).json({ message: "Internal server error" });
};
export default errorHandler;