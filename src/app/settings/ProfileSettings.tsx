"use client";

const ProfileSettings = () => {
  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-6 text-2xl font-semibold">Profile</h2>

      <div className="space-y-4">
        <input
          defaultValue="Abhishek"
          className="w-full rounded-xl border bourder-zinc-800 bg-black px-4 py-3"
        />
        <input
          defaultValue="abhishek@example.com"
          className="w-full rounded-xl border bourder-zinc-800 bg-black px-4 py-3"
        />
      </div>
    </section>
  );
};

export default ProfileSettings;
