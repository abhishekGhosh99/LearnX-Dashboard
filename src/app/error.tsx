"use client";

const error = ({ reset }: { reset: () => void }) => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="mb-4 text-xl">Failed to load dashboard</h2>

        <button
          onClick={() => reset()}
          className="rounded-lg bg-cyan-500 px-4 py-2"
        >
          Try again
        </button>
      </div>
    </div>
  );
};

export default error;
