## MERN Stack Boilerplate with JWT Authentication and Redux

This repository provides a boilerplate for building a full-stack MERN application with JWT authentication and Redux state management for the frontend. 

**Features:**

* Backend: Express.js, Node.js, MongoDB
* Frontend: React.js, Redux
* Authentication: JWT

**Getting Started:**

1. **Clone the repository:**

```bash
git clone https://github.com/mvaibhav77/mern-jwt-boiler.git
```

2. **Install dependencies:**

```bash
cd mern-jwt-boiler
npm install
cd frontend
npm install
```

3. **Configure environment variables:**

* Create a `.env` file in the root directory using `.env.example` file.

4. **Run the application:**

```bash
npm run dev
```
5. **Redux API Configure**
* Replace baseUrl with '', to point APIs to dev server. Rest vite is configured to handle the proxy.

**APIs:** (Replace `<placeholder>` with actual endpoint paths)

* **User registration:** POST `<placeholder>/users/register` (Body: { username, email, password })
* **User login:** POST `<placeholder>/users/auth` (Body: { email, password })
* **Protected routes:** GET `<placeholder>/users/something` (Requires JWT authorization)

**Google Docs For Step by Step Setup:**

[Open Doc](https://docs.google.com/document/d/1UYZRDj85LBIYR3q9EmLqlNUfpiB86EeDA6i-hmQQdbM/edit?usp=sharing)

**Postman Collection:**

The provided Postman collection ([Run In Postman](https://app.getpostman.com/run-collection/21234634-032220f9-8590-40b4-9364-3b2acf6a6f78?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D21234634-032220f9-8590-40b4-9364-3b2acf6a6f78%26entityType%3Dcollection%26workspaceId%3D7d018b0c-807a-46d8-be66-493fce1d7dfc#?env%5BMERN%20AUTH%5D=W3sia2V5IjoiYWNjZXNzX3Rva2VuIiwidmFsdWUiOiJzb21lX3Rva2VuIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiIiLCJzZXNzaW9uSW5kZXgiOjB9XQ==)) can be imported into your Postman environment to test the API endpoints. You can also update the environment variables within Postman to match your local setup.

**Note:**

* This is a boilerplate and needs further customization for your specific application needs.
* Refer to the documentation for Express.js, MongoDB, React.js, and Redux for more details on each framework.
