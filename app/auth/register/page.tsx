"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { toast } = useToast();
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!username || !email || !password) {
      toast({
        variant: "destructive",
        description: "All fields are Required",
      });
      return;
    }

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await res.json();

    if (data.status === 201) {
      console.log("user created with email");
      toast({
        variant: "default",
        description: data.message,
      });
    } else {
      toast({
        variant: "destructive",
        description: data.message,
      });
      console.log({ data });
    }
    router.push("/auth/login");
  };

  return (
    <div className="max-w-[648px] container mx-auto py-3 px-5">
      <div className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
        <form className="" onSubmit={handleSubmit}>
          <h2 className="h2 text-center">Register with Us.</h2>
          <p className="text-lg text-center mt-2">
            We are so happy to for you to be a member of{" "}
            <span className="text-accent underline">our Community</span>.
          </p>
          <div>
            <div className="mt-4">
              <Label htmlFor="username" className="text-lg">
                Username
              </Label>
              <Input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
              />
            </div>
            <div className="mt-4">
              <Label htmlFor="email" className="text-lg">
                Email
              </Label>
              <Input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email address"
              />
            </div>
            <div className="mt-4">
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
              className="text-xl bg-accent rounded-lg my-3"
              disabled={
                (username || email || password) && isDisabled ? false : true
              }
            >
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
