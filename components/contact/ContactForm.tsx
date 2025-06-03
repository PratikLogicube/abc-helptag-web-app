"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

// Define the schema for the contact form
const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  mobile: z.string().regex(/^[0-9]{10}$/, {
    message: "Mobile number must be exactly 10 digits.",
  }),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .regex(/^[a-zA-Z0-9\s.,!?]*$/, {
      message: "Message must not contain special characters.",
    }),
});

// Define the field names and types for the form
const FIELD_NAMES = {
  name: { label: "Name", placeholder: "Enter your name" },
  email: { label: "Email", placeholder: "Enter your email" },
  mobile: { label: "Mobile", placeholder: "Enter your mobile number" },
  message: {
    label: "Message (DO not include special characters)",
    placeholder: "Enter your message",
  },
  captcha: {
    label: "Enter the number below: 6490",
    placeholder: "Enter above number",
  },
};

const FIELD_TYPES = {
  name: "text",
  email: "email",
  mobile: "tel",
  message: "text",
  captcha: "text",
};

// Define the form data type
type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const router = useRouter();

  // Initialize the form with react-hook-form and zod
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
  });

  // Handle form submission
  const handleSubmit: SubmitHandler<ContactFormData> = async (data) => {
    // Simulate form submission (replace with actual API call if needed)
    try {
      // Simulate success for now
      toast.success("Success!", {
        description: "Your message has been sent successfully!",
      });
      router.push("/"); // Redirect to home page on success
    } catch (error) {
      toast.error("Error submitting form", {
        description: "An error occurred while sending your message.",
      });
    }
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-black mb-6">Contact Form</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="w-full max-w-lg space-y-6"
          >
            {Object.keys(FIELD_NAMES).map((field) => (
              <FormField
                key={field}
                control={form.control}
                name={field as keyof ContactFormData}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">
                      {
                        FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]
                          .label
                      }
                    </FormLabel>
                    <FormControl>
                      {field.name === "message" ? (
                        <textarea
                          className="w-full px-3 py-2 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                          rows={4}
                          placeholder={
                            FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]
                              .placeholder
                          }
                          {...field}
                        />
                      ) : (
                        <Input
                          required
                          type={
                            FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]
                          }
                          placeholder={
                            FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]
                              .placeholder
                          }
                          autoComplete="off"
                          className="text-black bg-white border-gray-300 focus:ring-purple-400"
                          {...field}
                        />
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
