"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { ZodType } from "zod";

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

import { FIELD_NAMES, FIELD_TYPES } from "@/constants";

import ImageUpload from "@/components/ImageUpload";
import { useRouter } from "next/navigation";

interface Props<T extends FieldValues> {
  type: "SIGN_IN" | "SIGN_UP";
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
}

const AuthForm = <T extends FieldValues>({
  type,
  schema,
  defaultValues,
  onSubmit,
}: Props<T>) => {
  const router = useRouter();
  const isSignIn = type === "SIGN_IN";

  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {
    const result = await onSubmit(data);

    if (result.success) {
      toast.success("Success!", {
        description: isSignIn
          ? "You've successfully Signed In!"
          : "You've successfully Signed Up!",
      });

      router.push("/");
    } else {
      toast.error(`Error ${isSignIn ? "signing In" : "signing Up"}`, {
        description: result.error ?? "An error occurred",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="w-2/3 space-y-6"
      >
        {Object.keys(defaultValues).map((field) => (
          <FormField
            key={field}
            control={form.control}
            name={field as Path<T>}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]?.label}
                </FormLabel>
                <FormControl>
                  {field.name === "digitalIdentity" ? (
                    <ImageUpload />
                  ) : (
                    <Input
                      required
                      type={FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]}
                      placeholder={
                        FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]
                          ?.placeholder
                      }
                      autoComplete="off"
                      {...field}
                    />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default AuthForm;
