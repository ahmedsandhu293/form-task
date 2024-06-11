export interface FormDataInterface {
        firstName: string;
        lastName: string;
        email: string;
        street: string;
        city: string;
        state: string;
        zip: string;
        dob: Date;
        gender: "Male" | "Female" | "Other";
        country?: string | undefined;
        company?: string | undefined;

}