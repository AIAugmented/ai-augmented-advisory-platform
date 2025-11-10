import { Spinner } from "@/components/ui/spinner";

export default function Loader() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <Spinner className="h-12 w-12 text-primary" />
    </div>
  );
}
