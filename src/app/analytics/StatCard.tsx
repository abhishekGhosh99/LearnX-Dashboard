interface Props {
  title: String;
  value: String;
}

const StatCard = ({ title, value }: Props) => {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <p className="text-zinc-400">{title}</p>
      <h2 className="mt-2 text-3xl font-bold">{value}</h2>
    </div>
  );
};

export default StatCard;
