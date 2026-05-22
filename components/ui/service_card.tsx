import Image from "next/image";

type ServiceCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
};

export default function ServiceCard({
  imageSrc,
  imageAlt,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center bg-white rounded-2xl shadow-md px-6 py-8 w-52 text-center gap-4">
      <div className="relative w-32 h-24">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="128px"
          className="object-contain"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-gray-900 text-sm leading-snug">
          {title}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
