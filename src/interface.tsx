export interface FormData {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
  };
  selectedPlan: number;
  selectedTime: boolean;
  selectedAddOns: number[];
}