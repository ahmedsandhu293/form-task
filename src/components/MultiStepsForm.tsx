"use client";
import { useState } from "react";
import { z } from "zod";
import { FormDataSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/ui/form";

import { useForm } from "react-hook-form";
import PersonalInfoForm from "./Steps/PersonalInfoForm";
import AddressForm from "./Steps/AddressForm";
import CompletionForm from "./Steps/CompletionForm";

const steps = [
  {
    id: "Step 1",
    name: "Personal Information",
    fields: ["firstName", "lastName", "email"],
  },
  {
    id: "Step 2",
    name: "Address",
    fields: ["country", "state", "city", "street", "zip", "company"],
  },
  { id: "Step 3", name: "Complete" },
];

export default function MultiStepsForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const form = useForm<z.infer<typeof FormDataSchema>>({
    resolver: zodResolver(FormDataSchema),
    defaultValues: {
      email: "",
    },
  });

  const onNext = async () => {
    const valid = await form.trigger(steps[currentStep].fields as any);
    console.log("is valid", valid);
    if (valid) {
      setCurrentStep((prevStep) => prevStep + 1);
      console.log("click");
    }
  };

  const onPrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const onSubmit = (data: z.infer<typeof FormDataSchema>) => {
    console.log("Form Data:", data);
  };

  return (
    <section className="flex flex-col justify-between">
      {/* steps */}
      <nav aria-label="Progress">
        <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
          {steps.map((step, index) => (
            <li key={step.name} className="md:flex-1">
              {currentStep > index ? (
                <div className="group flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-sky-600 transition-colors ">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : currentStep === index ? (
                <div
                  className="flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                  aria-current="step"
                >
                  <span className="text-sm font-medium text-sky-600">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : (
                <div className="group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-gray-500 transition-colors">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <Form {...form}>
        <form className="mt-12 py-6" onSubmit={form.handleSubmit(onSubmit)}>
          {currentStep === 0 && <PersonalInfoForm form={form} />}
          {currentStep === 1 && <AddressForm form={form} />}
          {currentStep === 2 && <CompletionForm />}
        </form>
      </Form>
      {/* Navigation */}
      <div className="mt-6">
        <div className="flex justify-between">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={onPrev}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
              disabled={currentStep === 0}
            >
              Back
            </button>
          )}
          {currentStep === 2 ? (
            <>
              <button
                type="button"
                onClick={form.handleSubmit(onSubmit)}
                className="bg-green-500 text-white py-2 px-4 rounded"
              >
                Submit
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={onNext}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Next
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
