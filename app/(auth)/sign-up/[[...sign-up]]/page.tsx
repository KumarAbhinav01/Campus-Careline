import { SignUp } from "@clerk/nextjs/app-beta";
 
export default function Page() {
  return (
  <div className="flex justify-center align-middle h-full mt-32 mb-32">
    <SignUp signInUrl="/sign-in" />
  </div> 
  );
}