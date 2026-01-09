"use client";
// import { ProfileButton } from "./ProfileButton"
import dynamic from "next/dynamic";
const DynamicProfileButton = dynamic(
  () => import("./ProfileButton").then((mod) => mod.ProfileButton),
  { ssr: false, loading: () => <div>Loading button...</div> }
);

export function ProfileFake() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Profile (Fake)</h1>

      <DynamicProfileButton />
    </div>
  );
}
