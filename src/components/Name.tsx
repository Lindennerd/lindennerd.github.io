export default function Name({
  name,
  nickname,
}: {
  name: string | null | undefined;
  nickname: string | null | undefined;
}) {
  return (
    <div className="text-xl font-bold  p-2">
      {name}
      {nickname && <span className="text-gray-600"> (@{nickname})</span>}
    </div>
  );
}
