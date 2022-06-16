import client from "../../../axios-config";
export const login = (data) => {
  return client.post("/api/Authorization/login", data);
};
export const registerUser = (data) => {
  return client.post("/api/Accounts/users", data);
};
export const forgotPassword = (data) => {
  return client.post("/api/Authorization/reset/password", data);
};
export const imageUpload = (data) => {
  return client.post("/api/Accounts/upload/image", data);
};
export const recoveryEmail = (payload) => {
  return client.post(
    `/api/Authorization/send/recovery/email?email=${payload.email}`
  );
};
export const confirmEmail = (id) => {
  return client.post("/api/Authorization/validate", {
    resetToken: id,
  });
};
