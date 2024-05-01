import { Input } from "@/components/ui/input";
import { FormSchemaType, RegisterSchemaType } from "@/utils/loginSchema";
import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";

export function PasswordField() {
  const { control, register } = useFormContext<RegisterSchemaType>();

  return (
    <FormField
      control={control}
      name="password"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input
              type="password"
              placeholder="shadcn"
              {...register("password")}
            />
          </FormControl>
          <FormDescription>This is gonna be your password.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
