const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_ORIGIN || "http://localhost:5173"
}));

app.use(express.json({ limit: "20kb" }));

const handleLeadSubmission = async (req, res) => {
  try {
    const { name, phone, email, message, source } = req.body || {};

    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof phone !== "string" ||
      !phone.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Name and phone are required."
      });
    }

    const enterpriseId = process.env.TELECRM_ENTERPRISE_ID;
    const token = process.env.TELECRM_ASYNC_TOKEN;

    if (!enterpriseId || !token) {
      return res.status(500).json({
        success: false,
        message: "TeleCRM is not configured."
      });
    }

    const fields = {
      name: name.trim(),
      phone: phone.trim()
    };

    if (typeof email === "string" && email.trim()) {
      fields.email = email.trim();
    }

    // Include only if "message" is a valid field API name
    // in your TeleCRM workspace.
    if (typeof message === "string" && message.trim()) {
      fields.message = message.trim();
    }

    if (typeof source === "string" && source.trim()) {
      fields.source = source.trim();
    }

    const url =
      `https://next-api.telecrm.in/enterprise/` +
      `${encodeURIComponent(enterpriseId)}/autoupdatelead`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ fields }),
      signal: AbortSignal.timeout(15000)
    });

    const body = await response.text();
    let result;

    try {
      result = JSON.parse(body);
    } catch {
      result = {};
    }

    if (!response.ok || result.status === "Error") {
      console.error("TeleCRM request failed:", response.status, body);
      return res.status(502).json({
        success: false,
        message: "TeleCRM could not process the enquiry."
      });
    }

    return res.json({
      success: true,
      message: "Enquiry sent to TeleCRM."
    });
  } catch (error) {
    console.error("TeleCRM integration error:", error.message);

    return res.status(502).json({
      success: false,
      message: "Unable to submit the enquiry."
    });
  }
};

app.post("/api/telecrm/leads", handleLeadSubmission);
app.post("/api/leads", handleLeadSubmission);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
