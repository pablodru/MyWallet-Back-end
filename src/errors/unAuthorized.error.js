import httpStatus from 'http-status';

export default function unAuthorizedError(message) {
  return {
    name: 'unAuthorizedError',
    message: { message },
    status: httpStatus.UNAUTHORIZED,
  };
}
