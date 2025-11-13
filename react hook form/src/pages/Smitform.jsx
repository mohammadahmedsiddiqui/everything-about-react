import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {useForm}  from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
export function Smitform() {



const formSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  cnic: z
    .string()
    .regex(/^\d{13}$/, "CNIC must be exactly 13 digits"),
  phonenumber: z
    .string()
    .regex(/^\+92\d{10}$/, "Phone number must start with +92 and have 13 digits total"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})


const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  })

const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-900">
      <div className="w-full max-w-md space-y-6 p-6  text-gray-50 bg-zinc-800 rounded-2xl shadow-md">
      <FieldSet>
          <FieldLegend>Admission Information</FieldLegend>
          <FieldDescription>
            We need your details for academic purposes.
          </FieldDescription>

          <FieldGroup>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name */}
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input
                  id="name"
                  {...register("name")}
                  type="text"
                  placeholder="Enter full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </Field>

              {/* CNIC */}
              <Field>
                <FieldLabel htmlFor="cnic">CNIC</FieldLabel>
                <Input
                  id="cnic"
                  {...register("cnic")}
                  type="text"
                  placeholder="13-digit CNIC"
                />
                {errors.cnic && (
                  <p className="text-red-500 text-sm">{errors.cnic.message}</p>
                )}
              </Field>

              {/* Phone */}
              <Field>
                <FieldLabel htmlFor="phonenumber">Phone Number</FieldLabel>
                <Input
                  id="phonenumber"
                  {...register("phonenumber")}
                  type="text"
                  placeholder="+923001234567"
                />
                {errors.phonenumber && (
                  <p className="text-red-500 text-sm">
                    {errors.phonenumber.message}
                  </p>
                )}
              </Field>

              <div className="grid grid-cols-2 gap-4">
                {/* Email */}
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    {...register("email")}
                    type="email"
                    placeholder="example@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </Field>

                {/* Password */}
                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input
                    id="password"
                    {...register("password")}
                    type="password"
                    placeholder="Enter password"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </Field>
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
              >
                Submit
              </button>
            </form>
          </FieldGroup>
        </FieldSet>
      </div>
    </div>
  )
}
