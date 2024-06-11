import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { CalendarIcon } from '@radix-ui/react-icons'
import { Calendar } from '../ui/calendar'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'
import { format } from 'date-fns'
import { cn } from "@/lib/utils"
import { Step1Props } from '@/lib/interface/Step1'

const PersonalInfoForm = ({form}:Step1Props) => {
  return (
    <>
     <div>
            <h2 className='text-base font-semibold leading-7 text-gray-900'>
              Personal Information
            </h2>
            <p className='mt-1 text-sm leading-6 text-gray-600'>
              Provide your personal details.
            </p>
            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-3'>
                 <FormField control={form.control} name="firstName" render={({field}) =>
                    ( <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                            <Input type='firstname' {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                 )}/>

            </div>
            <div className='sm:col-span-3'>
                 <FormField control={form.control} name="lastName" render={({field}) =>{
                    return <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                            <Input type='lastname' {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                 }}/>

            </div>
            <div className='sm:col-span-3'>
                 <FormField control={form.control} name="email" render={({field}) =>{
                    return <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input type='email' {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                 }}/>

            </div>
            <div className='sm:col-span-3'>
                 <FormField control={form.control} name="company" render={({field}) =>{
                    return <FormItem>
                        <FormLabel>Company </FormLabel>
                        <FormControl>
                            <Input type='company' {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                 }}/>

            </div>
            <div className='sm:col-span-2'>
            <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />


            </div>
            <div className='sm:col-span-2'>
                  <FormField control={form.control} name="gender" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender</FormLabel>
                      <FormControl>
                        <RadioGroup  defaultValue="Male" {...field} className="flex space-x-4">
                          <RadioGroupItem id='Male' value="Male"/>
                          <Label htmlFor="Male">Male</Label>
                        <RadioGroupItem id='Female' value="Female" />
                          <Label htmlFor="Male">Female</Label>
                          
                          <RadioGroupItem id="Other" value="Other"/>
                          <Label htmlFor="Male">Others</Label>
                          
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                </div>
            </div>
    </>
  )
}

export default PersonalInfoForm;