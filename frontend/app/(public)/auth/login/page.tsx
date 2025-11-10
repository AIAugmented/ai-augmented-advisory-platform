"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useStore } from "@/store";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";

import { LoginRequest } from "@/services/authService";

import { ROUTES } from "@/routes";

// Zod schema for login validation
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
  const router = useRouter();

  const { login } = useStore();

  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  // Handle login submission
  async function handleLogin(values: LoginFormData) {
    try {
      const loginData: LoginRequest = {
        email: values.email,
        password: values.password,
      };
      
      const response = await login(loginData);
      // Response has user, access_token, refresh_token - not success
      if (response.access_token) {
        router.push(ROUTES.dashboard);
      }
    } catch (error) {
      // Error already shown by toast in authService
      console.error('Login failed:', error);
    }
  }

  return (
    <Card className="mx-auto w-full max-w-md p-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-5"
      >
        {/* Heading */}
        <div className="space-y-2.5 text-center">
          <h3>Welcome back</h3>
          <p className="text-small text-muted-foreground">
            Log in to your account to continue.
          </p>
        </div>

        {/* ShadCN Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-5">
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <div className="relative">
                    <Mail className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        className="pl-9"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Password</FormLabel>
                    <Link
                      href={ROUTES.forgotPassword}
                      className="text-small underline-offset-4 hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <FormControl>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="pr-9 pl-9"
                        {...field}
                      />
                    </FormControl>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground hover:cursor-pointer"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={!form.formState.isValid || form.formState.isSubmitting}
              className="w-full"
            >
              {form.formState.isSubmitting ? (
                <>
                  <Spinner />
                  Logging In...
                </>
              ) : (
                "Log In"
              )}
            </Button>
          </form>
        </Form>

        {/* Footer Link */}
        <div className="text-small flex items-center justify-center gap-1">
          <p className="text-muted-foreground">Don&apos;t have an account?</p>
          <Link
            href={ROUTES.register}
            className="font-medium underline-offset-4 hover:underline"
          >
            Register
          </Link>
        </div>
      </motion.div>
    </Card>
  );
}
