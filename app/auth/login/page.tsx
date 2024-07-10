"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const response = await signIn("credentials", {
      username: email,
      password: password,
      redirect: false,
    });

    if (!response.error) {
      console.log("successfull sign in");
      router.push("/");
    } else {
      console.log(response.error);
    }
  };

  return (
    <div className="container max-w-[568px] mx-auto px-3 py-5">
      <div className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
        <form onSubmit={handleSubmit}>
          {/* Add form fields with Tailwind CSS styles here */}
          <h2 className="h2 text-center">Welcome BacK.</h2>
          <p className="text-lg text-center mt-2">
            We are happy to help member of{" "}
            <span className="text-accent underline">Our Community</span>.
          </p>
          <div className="flex flex-col gap-4 mt-4">
            <div>
              <Label htmlFor="email" className="text-lg">
                Email
              </Label>
              <Input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
              />
            </div>
            <div className="">
              <Label htmlFor="password" className="text-lg">
                Password
              </Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              type="submit"
              className="text-xl bg-accent hover:bg-accent/90 rounded-full my-3 hover:scale-125 transition-all"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
