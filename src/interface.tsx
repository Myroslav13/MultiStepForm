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

export interface Plan {
  name: string;
  monthlyPayment: number;
  yearlyPayment: number;
}

export interface AddOn {
  name: string;
  monthlyPayment: number;
  yearlyPayment: number;
}

export interface Props {
  data: FormData;
  setData: React.Dispatch<React.SetStateAction<FormData>>;
}