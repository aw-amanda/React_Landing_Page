interface ContactItem {
    label: string
    type: string
    placeholder: string
    required: boolean
}

export const ContactItems: ContactItem[] = [
    {
        label: "Name: ",
        type: "text",
        placeholder: "First and last name",
        required: true, 
    },
    {
        label: "Location: ",
        type: "text",
        placeholder: "City name",
        required: false, 
    },
    {
        label: "Phone: ",
        type: "tel",
        placeholder: "(555) 555-5555",
        required: true,
    },
    {
        label: "Email: ",
        type: "email",
        placeholder: "email@address.com",
        required: false,
    },
]