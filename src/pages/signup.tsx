import { useState } from "react";
import { useSignup } from "../hooks/signup/use-signup";

export function Signup() {
  const [username, setUsername] = useState("");
  const { mutate, isPending } = useSignup();

  function handleSubmit() {
    if (!username) return;
    localStorage.setItem("username", username);

    mutate(username, {
      onSuccess: () => {
        console.log("Signup success.");
      },
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#DDDDDD]">
      <div
        className="
          w-[500px]
          h-[205px]
          bg-white
          border
          border-[#CCCCCC]
          rounded-[16px]
          px-6
          py-5
          flex
          flex-col
          justify-between
        "
      >
        <div>
          <h1 className="text-[20px] font-black text-black pb-3">
            Welcome to CodeLeap network!
          </h1>

          <label className="block mt-3 text-[16px] text-black">
            Please enter your username
          </label>

          <input
            type="text"
            placeholder="John doe"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="
              mt-1
              w-full
              h-[32px]
              px-3
              border
              border-[#CCCCCC]
              rounded-[8px]
              text-[14px]
              focus:outline-none
            "
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            disabled={!username || isPending}
            className={`
              w-[111px]
              h-[32px]
              rounded-[8px]
              text-[14px]
              font-medium
              text-white
              ${
                !username
                  ? "bg-[#A0A0A0] cursor-not-allowed"
                  : "bg-[#7695EC] hover:opacity-90"
              }
            `}
          >
            ENTER
          </button>
        </div>
      </div>
    </div>
  );
}