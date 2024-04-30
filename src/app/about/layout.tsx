import { PropsWithChildren } from "react";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "My about page"
}

export default function AboutLayout({ children }: PropsWithChildren) {
  return (
    <section className="p-4 rounded-md bg-stone-900 border border-stone-700">
      {children}
    </section>
  )
}