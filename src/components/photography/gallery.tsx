import Image from "next/image";

interface Image {
  alt: string;
  src: string;
}

interface Props {
  images: Image[];
}

export function Gallery(props: Readonly<Props>) {
  const imageSize = 350;
  return (
    <div className="flex flex-row flex-wrap gap-3 justify-between">
      {props.images.map((x) => (
        <Image
          key={x.src}
          src={x.src}
          className="aspect-square object-cover rounded"
          alt={x.alt}
          width={imageSize}
          height={imageSize}
        />
      ))}
    </div>
  );
}
