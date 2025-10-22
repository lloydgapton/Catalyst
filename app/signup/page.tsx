import { SignupForm } from "@/components/signup-form"

export default async function Page({ searchParams }: { searchParams?: { next?: string } | Promise<{ next?: string }> }) {
  // Next.js may provide a Promise-like searchParams in some runtimes; await safely
  const params = await Promise.resolve(searchParams as unknown as { next?: string } | undefined);
  const next = params?.next;

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignupForm next={next} />
      </div>
    </div>
  )
}
