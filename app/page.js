'use client';

import Image from "next/image";
import ProfileCard from "./components/ProfileCard";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center items-center overflow-x-hidden">
      <ProfileCard
        name="Anwar Faiz"
        title="Your Title"
        handle="yourhandle"
        status="Online"
        avatarUrl="public/assets/images/avatar.png"
        contactText="Contact Me"
        onContactClick={() => console.log('Contact clicked')}
      />
    </div>
  );
}