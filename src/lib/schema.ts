import { z } from 'zod'

export const FormDataSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email(),
country:z.string().optional(),
  company: z.string().optional(),
  street: z.string().min(1, 'Street is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  zip: z.string().min(1, 'Zip is required'),
  dob: z.date({
    required_error: "Date of birth is required",
    invalid_type_error: "Invalid date format"
  }).refine((date) => date <= new Date(), {
    message: "Date of birth must be in the past"
  }),
  gender: z.enum(['Male', 'Female', 'Other'], {
    required_error: 'Gender is required'
  })
})