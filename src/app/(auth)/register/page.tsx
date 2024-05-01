"use client";

import { PasswordField } from "@/components/form/PasswordField";
import { UsernameField } from "@/components/form/UsernameField";
import { Button } from "@/components/ui/button";
import { RegisterSchemaType, formSchema } from "@/utils/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

export default function RegisterForm() {
  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: RegisterSchemaType) => {
    form.reset();
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <UsernameField />
        <PasswordField />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
}
