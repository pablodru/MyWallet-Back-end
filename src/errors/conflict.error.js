import httpStatus from "http-status";

export default function conflictError(){
    return {
        name: "conflictError",
        message: {message: "Este email já está em uso"},
        status: httpStatus.CONFLICT
    }
}