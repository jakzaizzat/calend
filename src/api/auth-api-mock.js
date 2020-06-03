const user = {
  username: "admin",
  password: "admin",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
};
export const login = payload => {
  if (
    payload.username !== user.username ||
    payload.password !== user.password
  ) {
    return new Promise((resolve, reject) => setTimeout(reject, 2000));
  }
  return new Promise(resolve => setTimeout(() => resolve(user), 1500));
};
