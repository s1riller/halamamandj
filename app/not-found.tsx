import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-6 text-7xl font-bold">404</h1>
      <p className="mb-6 text-neutral-600">This page doesn't exist. Or maybe it moved</p>
      <Link className="text-sm text-blue-500 hover:underline" href={"/"}>
        ← Back to home
      </Link>
    </div>
  );
}
