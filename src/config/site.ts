// src/config/site.ts

export const siteConfig = {
  name: "Svingen Handel og Kafe`",
  contact: {
    address: "Ringdalslinna 96, 2750 Gran",
    phone: "12 34 56 78",
    email: "post@svingen.no",
  },
  hours: {
    weekdays: "Stengt",
    saturday: "11:00 - 16:00",
    sunday: "11:00-16:00"
  }
} as const;