export const FIELD_NAMES = {
  firstName: { label: "First name", placeholder: "Enter firstname" },
  lastName: { label: "Last name", placeholder: "Enter lastname" },
  email: { label: "Email", placeholder: "Enter your email" },
  bikerId: { label: "Biker ID", placeholder: "Enter your biker ID" },
  password: { label: "Password", placeholder: "Enter your password" },
  phoneNumber: {
    label: "Phone Number",
    placeholder: "Enter your phone number",
  },
  address: { label: "Address", placeholder: "Enter your address" },
  dateOfBirth: { label: "Date of Birth", placeholder: "D.O.B in dd/mm/yyyy" },
  bloodGroup: { label: "Blood Group", placeholder: "Select your blood group" },
  digitalIdentity: {
    label: "Upload Biker ID Card",
    placeholder: "Upload your ID card",
  },
};

export const FIELD_TYPES = {
  firstName: "text",
  lastName: "text",
  email: "email",
  bikerId: "number",
  password: "password",
  phoneNumber: "tel",
  address: "text",
  dateOfBirth: "date",
  bloodGroup: "select",
  digitalIdentity: "file",
};
