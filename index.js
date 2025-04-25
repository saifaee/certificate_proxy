// index.js
import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

// Proxy all requests to your Vercel app
app.use(
  "/",
  createProxyMiddleware({
    target: "https://certificate-generator-five-kappa.vercel.app", // Your Vercel URL
    changeOrigin: true,
    secure: false, // Allow connections without strict TLS 1.3
  })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
