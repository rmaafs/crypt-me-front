import CryptoJS from "crypto-js";

const CHARS = "abcdefghijklmnopqrstuvwxyz0123456789";
const SECRET_LENGTH = 5;

/**
 * Generates a random secret string of 5 alphanumeric characters.
 */
export const generateSecret = () => {
  let secret = "";
  for (let i = 0; i < SECRET_LENGTH; i++) {
    secret += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
  }
  return secret;
};

/**
 * Encrypts a plaintext message using AES with the given secret.
 */
export const encrypt = (message, secret) => {
  return CryptoJS.AES.encrypt(message, secret).toString();
};

/**
 * Decrypts an AES-encrypted message using the given secret.
 */
export const decrypt = (ciphertext, secret) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, secret);
  return bytes.toString(CryptoJS.enc.Utf8);
};
