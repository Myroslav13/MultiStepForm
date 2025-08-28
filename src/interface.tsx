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

export interface Props {
    data: FormData;
    setData: React.Dispatch<React.SetStateAction<FormData>>;
}