### Reproduction case

Nhost storage upload fails locally in Vercel edge functions.

1. Install dependencies

```sh
npm install
```

2. Start next server

```sh
npm run dev
```

3. Send test event

```sh
curl http://localhost:3000/api/hello
```

4. Response should have the following error in the body:

```json
{
  "fileMetadata": null,
  "error": {
    "status": 0,
    "message": "XMLHttpRequest is not a constructor",
    "error": "XMLHttpRequest is not a constructor"
  }
}
```
