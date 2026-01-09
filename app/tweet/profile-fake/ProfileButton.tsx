import { PAGES } from "@/config/pages.config";
import { useRouter } from "next/navigation";

export function ProfileButton() {
  const router = useRouter();
  return <button onClick={() => router.push(PAGES.HOME)}>Go to home</button>;
}
