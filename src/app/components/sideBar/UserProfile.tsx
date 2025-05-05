import * as React from "react";

interface UserProfileProps {
  imageUrl: string;
  name: string;
  email: string;
}

export const UserProfile: React.FC<UserProfileProps> = ({
  imageUrl,
  name,
  email,
}) => {
  return (
    <header className="flex flex-col items-center">
      <img
        src={imageUrl}
        alt={name}
        className="object-contain rounded-full aspect-[1.02] bg-zinc-300 h-[138px] stroke-[6px] stroke-slate-500 w-[138px]"
      />
      <h2 className="mt-9 font-semibold tracking-tight text-center">{name}</h2>
      <p className="mt-4 text-base tracking-tight text-center">{email}</p>
    </header>
  );
};
