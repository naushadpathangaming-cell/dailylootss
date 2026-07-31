export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full mt-6 p-3 border rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mt-4 p-3 border rounded-lg"
        />

        <button className="w-full mt-6 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
          Login
        </button>
      </div>
    </main>
  );
}