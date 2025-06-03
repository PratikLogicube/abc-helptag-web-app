"use client";

import AuthForm from "@/components/AuthForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signUp } from "@/lib/actions/auth";
import config from "@/lib/config";
import { cn } from "@/lib/utils";
import { signUpSchema } from "@/lib/validations";
import Link from "next/link";
import React from "react";

const FIELD_NAMES = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
} as const;

const Page = () => {
  return (
    <div className={cn("w-1/3 m-auto flex flex-col gap-6")}>
      <Card>
        <CardHeader>
          <CardTitle>Create account</CardTitle>
          <CardDescription>
            Enter details below to register your account
          </CardDescription>
          <CardAction>
            <Button variant="link" className="cursor-pointer">
              <Link href={`${config.env.apiEndPoint}/sign-in`}>Sign In</Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <AuthForm
            defaultValues={FIELD_NAMES}
            onSubmit={signUp}
            schema={signUpSchema}
            type="SIGN_UP"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
