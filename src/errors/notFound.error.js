import httpStatus from "http-status";

export default function notFoundError(){
    return {
        name: "notFoundError",
        message: {message: "Email não encontrado"},
        status: httpStatus.NOT_FOUND
    }
}