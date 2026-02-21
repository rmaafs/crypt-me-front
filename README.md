# crypt-me
Share information securely with client-side AES encryption.  
https://crypt.rmaafs.com

---

## How it works

1. You write a message and click **Share**.
2. A random 5-character secret is generated **locally in your browser**.
3. The message is encrypted with AES using that secret — **before leaving your device**.
4. Only the encrypted text is sent to the backend. The secret is **never** sent to the server.
5. You get a shareable link containing the `id` and `secret`.
6. When someone opens the link, the encrypted text is fetched and **decrypted locally** in their browser.

---

## Backend API

Base URL: `https://crypt-worker.rmaafs.com`

### Save an encrypted message

```bash
curl -X POST https://crypt-worker.rmaafs.com/ \
  -H "Content-Type: application/json" \
  -d '{"message": "U2FsdGVkX1+abc123..."}'
```

Response:
```json
{
  "id": "23n60"
}
```

### Retrieve an encrypted message

```bash
curl https://crypt-worker.rmaafs.com/23n60
```

Response:
```json
{
  "message": "U2FsdGVkX1+abc123..."
}
```

---

## Backend repository
https://github.com/rmaafs/crypt-api-worker
