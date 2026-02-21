const API_URL = "https://crypt-worker.rmaafs.com";

/**
 * Sends an encrypted message to the API and returns the generated id.
 */
export const saveMessage = async (encryptedMessage) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: encryptedMessage }),
  });
  return response.json();
};

/**
 * Retrieves an encrypted message from the API by id.
 */
export const getMessage = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};
