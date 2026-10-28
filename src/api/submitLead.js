export async function submitLead(formData) {
  const response = await fetch("/api/telecrm/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(
      result.message || "Unable to submit enquiry."
    );
  }

  return result;
}

export { sendLeadToTeleCRM } from './telecrm.js';
