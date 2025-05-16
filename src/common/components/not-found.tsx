import { Link } from "react-router-dom";

export default function NotFoundComponent() {
  return (
    <main className="grid h-screen place-items-center bg-secondary px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-blue-800">404</p>
        <h1 className="text-primary">Page not found</h1>
        <p className="text-primary mt-6 text-foreground">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-blue-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-offset-2"
          >
            Go back home
          </Link>
          <Link to="#" className="text-sm font-semibold text-primary">
            Contact support
          </Link>
        </div>
      </div>
    </main>
  );
}
