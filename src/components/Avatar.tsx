import Image from "next/image";

export default function Avatar({
  avatarUrl,
  alt,
}: {
  avatarUrl: string | null | undefined;
  alt: string;
}) {
  return (
    <div className="">
      <Image
        src={avatarUrl || ""}
        alt={alt}
        height={150}
        width={150}
        className="rounded-full shadow-lg"
      />
    </div>
  );
}
