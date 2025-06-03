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
import { SignInWithCredentials } from "@/lib/actions/auth";
import config from "@/lib/config";
import { cn } from "@/lib/utils";
import { signInSchema } from "@/lib/validations";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className={cn("w-1/3 m-auto flex flex-col gap-6")}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button variant="link" className="cursor-pointer">
              <Link href={`${config.env.apiEndPoint}/sign-up`}>Sign Up</Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <AuthForm
            type="SIGN_IN"
            defaultValues={{ email: "", password: "" }}
            schema={signInSchema}
            onSubmit={SignInWithCredentials}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
