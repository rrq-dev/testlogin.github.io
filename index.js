import { qrController, deleteCookie } from "https://cdn.jsdelivr.net/gh/whatsauth/js@0.2.1/whatsauth.js";
import { wauthparam } from "https://cdn.jsdelivr.net/gh/whatsauth/js@0.2.1/config.js";

// WhatsApp auth parameter setup
wauthparam.auth_ws = "d3NzOi8vYXBpLndhLm15LmlkL3dzL3doYXRzYXV0aC9wdWJsaWM=";  // Set your auth WebSocket URL
wauthparam.keyword = "aHR0cHM6Ly93YS5tZS82Mjg5NTgwMDAwNjAwMD90ZXh0PXdoNHQ1YXV0aDA=";  // WhatsApp verification URL
wauthparam.tokencookiehourslifetime = 18;  // Token lifetime in hours
wauthparam.redirect = "/auth";  // Redirect after login

// Clear the existing auth cookie if any
deleteCookie(wauthparam.tokencookiename);

// Generate QR code for authentication
qrController(wauthparam);
