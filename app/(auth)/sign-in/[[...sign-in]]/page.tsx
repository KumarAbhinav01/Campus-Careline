import { SignIn } from "@clerk/nextjs/app-beta";
 
export default function Page() {
  return (
    <div className="flex justify-center align-middle h-full mt-32 mb-32">
      <SignIn signUpUrl="/sign-up" />
    </div>
  );
}