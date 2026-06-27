"use client";

interface ToggleProps {
  enabled: boolean;
  onChange: () => void;
}

const Toggle = ({ enabled, onChange }: ToggleProps) => {
  return (
    <button
      onClick={onChange}
      className={`relative h-7 w-14 rounded-full transition-all ${enabled ? "bg-cyan-500" : "bg-zinc-700"}`}
    >
      <span
        className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${enabled ? "left-8" : "left-1"}`}
      />
    </button>
  );
};

export default Toggle;
