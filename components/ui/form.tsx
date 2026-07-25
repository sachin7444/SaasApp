"use client"

import * as React from "react"
import { FormProvider, Controller, UseFormReturn, FieldValues } from "react-hook-form"

type FormProps<T extends FieldValues> = {
  children: React.ReactNode
} & Partial<UseFormReturn<T>>

export function Form<T extends FieldValues>({ children, ...props }: FormProps<T>) {
  return <FormProvider {...(props as UseFormReturn<T>)}>{children}</FormProvider>
}

export function FormField<T>({ control, name, render }: any) {
  return <Controller control={control} name={name} render={render} />
}

export const FormItem = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
)

export const FormLabel = ({ children }: { children: React.ReactNode }) => (
  <label className="block text-sm font-medium">{children}</label>
)

export const FormControl = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
)

export const FormDescription = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm text-muted-foreground">{children}</p>
)

export const FormMessage = ({ children }: { children?: React.ReactNode; message?: string }) => (
  <p className="text-sm text-destructive">{children}</p>
)

export default Form
