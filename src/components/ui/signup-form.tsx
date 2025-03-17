
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Mail, Github, Palette } from 'lucide-react';

export function SignupForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Forward to pari2798@gmail.com
    console.log("Form submitted");
    window.location.href = `mailto:pari2798@gmail.com?subject=${encodeURIComponent("New Signup from Website")}&body=${encodeURIComponent("A new user has signed up on the website.")}`;
  };
  
  return (
    <div className="max-w-md w-full mx-auto rounded-none p-4 md:p-8 glass-card border border-white/10">
      <h2 className="font-serif text-xl text-white">
        Stay Updated
      </h2>
      <p className="text-slate text-sm max-w-sm mt-2 font-serif">
        Sign up to receive updates on AI strategy and consulting
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname" className="font-serif">First name</Label>
            <Input id="firstname" placeholder="John" type="text" className="bg-black border-white/10 text-white rounded-none font-serif" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname" className="font-serif">Last name</Label>
            <Input id="lastname" placeholder="Doe" type="text" className="bg-black border-white/10 text-white rounded-none font-serif" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="font-serif">Email Address</Label>
          <Input id="email" placeholder="email@example.com" type="email" className="bg-black border-white/10 text-white rounded-none font-serif" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="company" className="font-serif">Company (optional)</Label>
          <Input id="company" placeholder="Your company" type="text" className="bg-black border-white/10 text-white rounded-none font-serif" />
        </LabelInputContainer>

        <button
          className="relative group/btn font-serif bg-white text-black w-full rounded-none h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] hover:bg-white/90 transition-colors"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-white/10 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-white rounded-none h-10 font-serif font-medium border border-white/10 hover:bg-white/5 transition-colors"
            type="button"
          >
            <Github className="h-4 w-4 text-white" />
            <span className="text-white text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-white rounded-none h-10 font-serif font-medium border border-white/10 hover:bg-white/5 transition-colors"
            type="button"
          >
            <Mail className="h-4 w-4 text-white" />
            <span className="text-white text-sm">
              Email
            </span>
            <BottomGradient />
          </button>
          <button
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-white rounded-none h-10 font-serif font-medium border border-white/10 hover:bg-white/5 transition-colors"
            type="button"
          >
            <Palette className="h-4 w-4 text-white" />
            <span className="text-white text-sm">
              Creative
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-white to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-white to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
