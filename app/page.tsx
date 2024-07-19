import LoginButton from "@/components/loginButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="border-b">
      <div className="h-[38px] flex justify-between items-center mx-10">
        <div>Todos </div>
        <div className="flex">
          <LoginButton title="sign in" color="red" isBorder={true} />
          <LoginButton title="sign up" />
        </div>
      </div>
    </div>
  );
}
