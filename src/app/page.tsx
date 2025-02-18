export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0F172A] text-[#CBD5E1]">
      <div className="text-center p-6 sm:p-10 bg-[#1E293B] rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md lg:max-w-lg">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Welcome to the site</h1>
        <div className="space-y-4">
          <a
            href="/signin"
            className="block w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition"
          >
            Go to Sign In
          </a>
          <a
            href="/signup"
            className="block w-full py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500 transition"
          >
            Go to Sign Up
          </a>
        </div>
      </div>
    </main>
  );
}