import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Catalyst — Career guidance that works</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              Take a short diagnostic, get a personalized growth plan, and connect with advisors who help you land better opportunities faster.
            </p>

            <div className="mt-8 flex gap-4">
              <Link href="/onboarding" className="inline-flex items-center px-5 py-3 bg-primary text-primary-foreground rounded-md shadow-sm">
                Start Assessment
              </Link>
              <Link href="/signup" className="inline-flex items-center px-5 py-3 border rounded-md">
                Create Account
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">5k+</div>
                <div className="text-sm text-muted-foreground">Students onboarded</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm text-muted-foreground">Success rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-muted-foreground">Advisors</div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
              <div className="h-64 bg-white/80 rounded-md flex items-center justify-center text-xl font-medium text-muted-foreground">
                Preview: Personalized growth plan
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h3 className="text-2xl font-semibold">What you'll get</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg">
              <h4 className="font-medium">Personalized Plan</h4>
              <p className="text-sm text-muted-foreground mt-2">A step-by-step plan tailored to your background and goals.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h4 className="font-medium">Expert Advisors</h4>
              <p className="text-sm text-muted-foreground mt-2">Book sessions with vetted career mentors and coaches.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h4 className="font-medium">Progress Tracking</h4>
              <p className="text-sm text-muted-foreground mt-2">Track your learning and celebrate milestones.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}