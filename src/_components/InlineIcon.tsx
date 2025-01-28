export interface InlineIconProps {
  src: string;
}

export default function InlineIcon({ src }: InlineIconProps) {
  return <img src={src} className="inline h-[1.4em] w-[1.4em] align-text-bottom" />;
}
