import mock from "../config/mock";
const user = mock.user;
export const login = (payload) => {
  if (
    payload.username !== user.username ||
    payload.password !== user.password
  ) {
    return new Promise((resolve, reject) => setTimeout(reject, 2000));
  }
  return new Promise((resolve) => setTimeout(() => resolve(user), 1500));
};
