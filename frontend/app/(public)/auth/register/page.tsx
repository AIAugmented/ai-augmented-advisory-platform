"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useStore } from "@/store";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordStrength } from "@/components/ui/password-strength";
import { Spinner } from "@/components/ui/spinner";

import { RegisterRequest } from "@/services/authService";

import { ROUTES } from "@/routes";

// Zod schema for register validation
const registerSchema = z
  .object({
    name: z.string().trim().min(1, "Name is required"),
    email: z.email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/\d/, "Password must contain at least one number")
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character",
      ),
    confirmPassword: z
      .string()
      .min(8, "Confirm password must be at least 8 characters long"),
    acceptTerms: z.boolean().refine(val => val === true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // This sets which field the error appears on
  });

type RegisterFormData = z.infer<typeof registerSchema>;

export default function Register() {
  const router = useRouter();

  const { register } = useStore();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
    mode: "onChange",
  });

  // Handle register submission
  async function handleRegister(values: RegisterFormData) {
    // Extract only the fields needed for the backend (excluding confirmPassword and acceptTerms)
    const registerData: RegisterRequest = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    const response = await register(registerData);
    if (response.success) {
      router.push(ROUTES.dashboard); // Auto-login after successful registration
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
          <h3>Create an account</h3>
          <p className="text-small text-muted-foreground">
            Join us today! It&apos;s quick and easy.
          </p>
        </div>

        {/* ShadCN Form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleRegister)}
            className="space-y-5"
          >
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <div className="relative">
                    <User className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter your full name"
                        className="pl-9"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

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
                  <FormLabel>Password</FormLabel>
                  <div className="relative">
                    <Lock className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <FormControl>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="pr-9 pl-9"
                        {...field}
                        onChange={e => {
                          field.onChange(e);
                          // Revalidate confirmPassword when password changes
                          form.trigger("confirmPassword");
                        }}
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
                  <PasswordStrength password={field.value} />
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm Password Field */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <div className="relative">
                    <Lock className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <FormControl>
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Re-enter your password"
                        className="pr-9 pl-9"
                        {...field}
                      />
                    </FormControl>
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground hover:cursor-pointer"
                    >
                      {showConfirmPassword ? (
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

            {/* Terms and Conditions Checkbox */}
            <FormField
              control={form.control}
              name="acceptTerms"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-start space-x-2.5">
                    <FormControl>
                      <Checkbox
                        id="acceptTerms"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-2">
                      <FormLabel
                        htmlFor="acceptTerms"
                        className="cursor-pointer gap-1"
                      >
                        Accept
                        <Link
                          href={ROUTES.termsOfService}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium underline underline-offset-4 hover:text-muted-foreground"
                        >
                          terms and conditions
                        </Link>
                      </FormLabel>
                      <p className="text-xs text-muted-foreground">
                        By clicking this checkbox, you agree to the terms and
                        conditions.
                      </p>
                    </div>
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
                  Creating Account...
                </>
              ) : (
                "Create Account"
              )}
            </Button>
          </form>
        </Form>

        {/* Footer Link */}
        <div className="text-small flex items-center justify-center gap-1">
          <p className="text-muted-foreground">Already have an account?</p>
          <Link
            href={ROUTES.login}
            className="font-medium underline-offset-4 hover:underline"
          >
            Log In
          </Link>
        </div>
      </motion.div>
    </Card>
  );
}
