export interface InlineIconProps {
  src: string;
  alt: string | undefined;
  style: any | undefined;
}

export default function InlineIcon({ src, alt, style }: InlineIconProps) {
  return (
    <img
      src={src}
      className="inline h-[1.4em] w-[1.4em] align-text-bottom"
      alt={alt}
      style={style}
    />
  );
}
