"use client";
import { useState } from "react";
import { useDebounceCallback } from "usehooks-ts";
import { useToast } from "@/hooks/use-toast";
// import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
// import axios from "axios";
import Link from "next/link";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignUpFieldProps } from "../../../types/types";
import AnimationWrapper from "../../../components/AnimationWrapper";

export default function SignIn() {
  const [username, setUsername] = useState("");
  // const [usernameMessage, setUsernameMessage] = useState("");
  // const [isCheckingUsername, setIsCheckingUsername] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const debounced = useDebounceCallback(setUsername, 300);
  const { toast } = useToast();
  // const router = useRouter();

  // ZOD IMPLEMENTATION
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  // CHECK USERNAME API
  /* useEffect(() => {
    const checkUsernameUnique = async () => {
      if (username) {
        setIsCheckingUsername(true);
        setUsernameMessage("");
        try {
          // const response = await axios.get(
          //   `/api/check-username-unique?username=${username}`,
          // );

          setUsernameMessage("response");
        } catch (error) {
          // const axiosError = error;
          console.log(error);
          setUsernameMessage("Something went wrong!");
        } finally {
          setIsCheckingUsername(false);
        }
      }
    };

    checkUsernameUnique();
  }, [username]); */

  const onSubmit: SubmitHandler<SignUpFieldProps> = async data => {
    setIsSubmitting(true);

    try {
      // const response = await axios.post("/api/sign-up", data);
      console.log(data);

      // toast({ title: "Success", description: response.data.message });

      // router.replace(`/verify/${username}`);

      setIsSubmitting(false);
    } catch (error) {
      console.error("Error in user sign-up", error);
      //       const axiosError = error;
      //
      //       let errorMessage = axiosError;

      toast({
        title: "Sign Up failed!",
        description: "Something went wrong!",
        variant: "destructive",
      });

      setIsSubmitting(false);
    }
  };

  console.log(username, "username");

  return (
    <AnimationWrapper
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      <div className="flex justify-center items-center min-h-screen bg-[#0F172A]">
        <div className="w-full max-w-md p-8 space-y-8 bg-[#1E293B] rounded-lg shadow-md">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
              Join TekHud
            </h1>
            <p className="mb-4">Sign up to start your adventure</p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6">
              <FormField
                name="username"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <Input
                      {...field}
                      name="username"
                      onChange={e => {
                        field.onChange(e);
                        debounced(e.target.value);
                      }}
                    />
                    {/* {isCheckingUsername && <Loader2 className="animate-spin" />}
                  {!isCheckingUsername && usernameMessage && (
                    <p
                      className={`text-sm ${
                        usernameMessage === "Username is available"
                        ? "text-green-500"
                        : "text-red-500"
                        }`}>
                      {usernameMessage}
                      </p>
                  )} */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <Input
                      {...field}
                      name="email"
                    />
                    <p className="text-muted text-gray-400 text-sm">
                      We will send you a verification code
                    </p>
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
                      name="password"
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-[#0F172A] hover:bg-[#0F172A]"
                disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </>
                ) : (
                  "Sign Up"
                )}
              </Button>
            </form>
          </Form>
          <div className="text-center mt-4">
            <p>
              Already a member?
              <Link
                href="/signin"
                className="text-[#CBD5E1] ml-1">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </AnimationWrapper>
  );
}
