import Image from "next/image";

export default function Avatar({
  avatarUrl,
  alt,
}: {
  avatarUrl: string | null | undefined;
  alt: string;
}) {
  return (
    <div>
      <Image
        src={avatarUrl || ""}
        alt={alt}
        height={200}
        width={200}
        className="rounded-full"
      />
    </div>
  );
}
