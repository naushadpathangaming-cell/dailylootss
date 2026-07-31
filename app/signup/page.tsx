export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full mt-6 p-3 border rounded-lg"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mt-4 p-3 border rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mt-4 p-3 border rounded-lg"
        />

        <button className="w-full mt-6 bg-green-600 text-white p-3 rounded-lg hover:bg-green-700">
          Create Account
        </button>
      </div>
    </main>
  );
}