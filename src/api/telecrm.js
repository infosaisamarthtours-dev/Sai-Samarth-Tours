export async function sendLeadToTeleCRM(lead) {
  const response = await fetch("/api/telecrm/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(lead)
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Enquiry submission failed.");
  }

  return result;
}

export const submitLead = sendLeadToTeleCRM;
