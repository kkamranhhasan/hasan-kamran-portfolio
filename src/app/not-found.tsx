import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] px-4 text-center">
      <div className="space-y-4">
        <h1 className="text-8xl font-extrabold tracking-tighter text-primary/20">404</h1>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Page Not Found</h2>
        <p className="text-muted-foreground max-w-[500px] mx-auto pb-6">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
