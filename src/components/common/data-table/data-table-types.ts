export type Payment = {
  id: string;
  email: string;
  status: "pending" | "processing" | "success" | "failed";
  amount: number;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  status: "Active" | "Inactive";
  role: "admin" | "super-admin";
};
export type Role = {
  id: string;
  roleName: string;
  roleDescription: string;
  status: "Active" | "Inactive";
};
export type DepartmentGroup = {
  id: string;
  name: string;
  description: string;
  head: string;
  status: "Active" | "Inactive";
};

export type ProductType = {
  id: string;
  productType: string;
  productDescription: string;
  status: "Active" | "Inactive";
};
export type FormFields = {
  id: string;
  formName: string;
  description: string;
  lastUpdate: string;
  created: string;
  status: "Active" | "Inactive";
  role: "admin" | "super-admin";
};
export type AwaitingAction = {
  id: string;
  caseId: string;
  product: string;
  department: string;
  assignedUser: string;
  zone: string;
  state: string;
  city: string;
  brand: string;
  fraudNature: string;
  caseStatus: string;
  internalStatus: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
};
