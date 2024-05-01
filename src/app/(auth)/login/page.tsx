"use client";

import { Button } from "@/components/ui/button";
import { FormSchemaType, formSchema } from "@/utils/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { UsernameField } from "@/components/form/UsernameField";
import Link from "next/link";

export default function LoginForm() {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormSchemaType) => {
    form.reset();
  };

  return (
    <section className="flex flex-col gap-4">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <UsernameField />
          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
      <p>
        You dont have an account? create one{" "}
        <Link
          className="text-blue-600 font-bold hover:underline"
          href="/register"
        >
          here!
        </Link>
      </p>
    </section>
  );
}
