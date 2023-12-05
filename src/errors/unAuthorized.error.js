import httpStatus from "http-status";

export default function unAuthorizedError(){
    return {
        name: "unAuthorizedError",
        message: {message: "Senha incorreta."},
        status: httpStatus.UNAUTHORIZED
    }
}