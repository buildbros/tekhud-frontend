"use client";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import AnimationWrapper from "../../../components/AnimationWrapper";
import { SignInFieldProps } from "../../../types/types";
// import { useRouter } from "next/navigation";
// import { useToast } from "../../../hooks/use-toast";
// import { signIn } from "next-auth/react";

export default function SignIn() {
  // const router = useRouter();
  // const { toast } = useToast();

  const form = useForm({
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<SignInFieldProps> = async data => {
    /*  const result = await signIn("credentials", {
      identifier: data.identifier,
      password: data.password,
      redirect: false,
    });

    if (result?.error) {
      if (result.error === "CredentialsSignin") {
        toast({
          title: "Login Failed",
          description: "Incorrect username or password",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        });
      }
    }

    if (result?.url) {
      router.replace("/dashboard");
    } */
    console.log(data, "Sign In");
  };

  return (
    <AnimationWrapper
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      <div className="flex justify-center items-center min-h-screen bg-[#0F172A]">
        <div className="w-full max-w-md p-8 space-y-8 bg-[#1E293B] rounded-lg shadow-md">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
              Welcome Back to TekHud
            </h1>
            <p className="mb-4">Sign in to continue your explorations</p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6">
              <FormField
                name="identifier"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email/Username</FormLabel>
                    <Input {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="w-full bg-[#0F172A] hover:bg-[#0F172A]"
                type="submit">
                Sign In
              </Button>
            </form>
          </Form>
          <div className="text-center mt-4">
            <p>
              Not a member yet?
              <Link
                href="/signup"
                className="text-[#CBD5E1] ml-1">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </AnimationWrapper>
  );
}
