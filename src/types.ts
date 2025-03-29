export interface ServiceOption {
  id: string;
  label: string;
  price: number;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface SelectedServices {
  [key: string]: boolean;
}

export interface ClientInfo {
  name: string;
  email: string;
  company: string;
  requirements: string;
}

export interface CustomFeature {
  name: string;
  price: number;
}