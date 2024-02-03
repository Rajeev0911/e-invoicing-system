"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const ProfileForm = () => {
  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    mobileNo: z.string(),
    email: z.string(),
    productId: z.string(),
    invoiceNo: z.string(),
    invoiceDate: z.string(),
    salespersonName: z.string(),
    state: z.string(),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      mobileNo: "",
      email: "",
      productId: "",
      invoiceNo: "",
      invoiceDate: "",
      salespersonName: "",
      state: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // This will be type-safe and validated.
    console.log(values);
    values.username = "";
    values.mobileNo = "";
    values.email = "";
    values.productId = "";
    values.invoiceNo = "";
    values.invoiceDate = "";
    values.salespersonName = "";
    values.state = "";
  }

  const formInputs = [
    {
      formname: "username",
      formlabel: "Username",
      placeholder: "Enter your name",
    },
    {
      formname: "mobileNo",
      formlabel: "Mobile No",
      placeholder: "Enter your mobile No",
    },
    {
      formname: "email",
      formlabel: "E-mail",
      placeholder: "Enter your E-mail",
    },
    {
      formname: "productId",
      formlabel: "Product ID",
      placeholder: "Enter the product ID",
    },
    {
      formname: "invoiceNo",
      formlabel: "Invoice No",
      placeholder: "Enter the invoice number",
    },
    {
      formname: "invoiceDate",
      formlabel: "Invoice Date",
      placeholder: "Enter the invoice date",
    },
    {
      formname: "salespersonName",
      formlabel: "Sales Person Name",
      placeholder: "Enter the sales person name",
    },
    {
      formname: "state",
      formlabel: "State",
      placeholder: "Enter your state",
    },
  ];

  return (
    <div className="flex justify-center items-center w-screen bg-white border-black	">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="form p-5"
          method="post"
        >
          {formInputs.map((forminput) => (
            <div key={forminput.formname} className="h-24 w-96">
              <FormField
                control={form.control}
                name={forminput.formname}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{forminput.formlabel}</FormLabel>
                    <FormControl>
                      <Input placeholder={forminput.placeholder} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ))}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      ;
    </div>
  );
};

export default ProfileForm;
