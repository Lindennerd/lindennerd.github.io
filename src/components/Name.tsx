export default function Name({
  name,
  bio,
}: {
  name: string | null | undefined;
  bio: string | null | undefined;
}) {
  return (
    <div className="p-2">
      <div className="text-xl font-bold">{name}</div>
      <div className="font-mono text-slate-600 dark:text-slate-200 hidden md:block">
        {bio}
      </div>
    </div>
  );
}
