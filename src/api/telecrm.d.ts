export interface TeleCRMLead {
  name?: string | null;
  phone?: string | null;
  email?: string | null;
  message?: string | null;
  source?: string | null;
  [key: string]: any;
}

export interface TeleCRMResponse {
  success: boolean;
  message: string;
  [key: string]: any;
}

export function sendLeadToTeleCRM(lead: TeleCRMLead): Promise<TeleCRMResponse>;
export const submitLead: typeof sendLeadToTeleCRM;
