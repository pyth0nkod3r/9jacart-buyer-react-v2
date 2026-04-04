/* eslint-disable @typescript-eslint/no-explicit-any */
// Ticket API request types
export interface ContactAdminRequest {
  subject: string;
  message: string;
}
// Ticket API response types
export interface ContactAdminResponse {
  message?: string;
  data?: any;
  [key: string]: any;
}

// Helper function to simulate API delay
const simulateDelay = (ms: number = 300): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Ticket API functions - MOCK VERSION
export const ticketApi = {
  /**
   * Contact admin endpoint (mock)
   */
  contactAdmin: async (data: ContactAdminRequest): Promise<ContactAdminResponse> => {
    await simulateDelay(500);

    return {
      status: 200,
      error: false,
      message: 'Your message has been sent successfully! We will get back to you soon.',
      data: {
        ticketId: 'ticket_' + Math.random().toString(36).substring(2, 10),
        subject: data.subject,
        createdAt: new Date().toISOString(),
      },
    };
  },
};
