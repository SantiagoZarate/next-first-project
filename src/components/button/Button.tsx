"use client";

import { ComponentProps } from "react";

export function Button(args: ComponentProps<"button">) {
  return (
    <button
      className="px-4 py-2 rounded-full capitalize bg-muted font-bold duration-150 transition-all hover:-translate-y-1 hover:bg-stone-700 active:translate-y-1"
      {...args}
    />
  );
}
