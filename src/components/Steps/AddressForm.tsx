import React from 'react'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from '../ui/input';
import { Step1Props } from '@/lib/interface/Step1';



const AddressForm= ({form}:Step1Props) => {
  return (
    <div>
    <h2 className='text-base font-semibold leading-7 text-gray-900'>
      Address
    </h2>
    <p className='mt-1 text-sm leading-6 text-gray-600'>
      Address where you can receive mail.
    </p>
    <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
    <div className='sm:col-span-3'>
    <FormField control={form.control} name="country" render={({field}) =>{
            return <Select>
<SelectTrigger className="w-[180px]">
<SelectValue placeholder="Country" />
</SelectTrigger>
<SelectContent>
<SelectItem  id="UnitedStates" value="United States">United States</SelectItem>
<SelectItem id="United Kingdom" value="United Kingdom">United Kingdom</SelectItem>
<SelectItem id="Canada" value="Canada">Canada</SelectItem>
<SelectItem id="South Africa" value="South Africa">South Africa</SelectItem>
<SelectItem id="Ireland" value="Ireland">Ireland</SelectItem>
<SelectItem id="China" value="China">China</SelectItem>
<SelectItem id="Japan" value="Japan">Japan</SelectItem>
<SelectItem id="Pakistan" value="Pakistan">Pakistan</SelectItem>
</SelectContent>
</Select>
    }}/>
</div>
<div className='sm:col-span-6'>
<FormField control={form.control} name="street" render={({field}) =>{
            return <FormItem>
                <FormLabel>Street</FormLabel>
                <FormControl>
                    <Input type='street' {...field}/>
                </FormControl>
                <FormMessage/>
            </FormItem>
         }}/>
</div>
<div className='sm:col-span-2'>
<FormField control={form.control} name="city" render={({field}) =>{
            return <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                    <Input type='City' {...field}/>
                </FormControl>
                <FormMessage/>
            </FormItem>
         }}/>
</div>
<div className='sm:col-span-2'>
<FormField control={form.control} name="state" render={({field}) =>{
            return <FormItem>
                <FormLabel>State / Province</FormLabel>
                <FormControl>
                    <Input type='text' {...field}/>
                </FormControl>
                <FormMessage/>
            </FormItem>
         }}/>
</div>
<div className='sm:col-span-2'>
<FormField control={form.control} name="zip" render={({field}) =>{
            return <FormItem>
                <FormLabel>Postal Code</FormLabel>
                <FormControl>
                    <Input type='text' {...field}/>
                </FormControl>
                <FormMessage/>
            </FormItem>
         }}/>
</div>

    </div>
    </div>
  )
}

export default AddressForm;