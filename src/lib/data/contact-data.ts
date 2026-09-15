export interface ContactItem {
  label: string
  type: string
  placeholder: string
  name: string
  required: boolean
}

export const ContactItems: ContactItem[] = [
  {
    label: "Full Name:",
    type: "text",
    placeholder: "John Smith",
    name: "name",
    required: true
  },
  {
    label: "Email Address:",
    type: "email",
    placeholder: "john.smith@example.com",
    name: "email",
    required: true
  },
  {
    label: "Phone Number:",
    type: "tel",
    placeholder: "(555) 555-5555",
    name: "phone",
    required: false
  }
]