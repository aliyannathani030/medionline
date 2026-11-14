export const PHONE_DISPLAY = "0336-8526999";
export const PHONE_TEL = "tel:03368526999";
export const WHATSAPP_NUMBER = "923368526999";

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function productEnquiry(productName: string) {
  return `Hello medionline, I would like to know the price of: ${productName}`;
}

export const GENERAL_ENQUIRY = "Hello medionline, I would like some information.";
