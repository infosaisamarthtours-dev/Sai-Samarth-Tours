export interface LeadData {
  name?: string | null;
  phone?: string | null;
  email?: string | null;
  message?: string | null;
  source?: string | null;
  [key: string]: any;
}

export interface LeadResponse {
  success: boolean;
  status?: string;
  message: string;
  [key: string]: any;
}

export function submitLead(formData: LeadData): Promise<LeadResponse>;
