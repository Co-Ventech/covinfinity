type SectionBgLinesProps = {
  imageUrl: string;
  className?: string;
};

export default function SectionBgLines({ imageUrl, className = '' }: SectionBgLinesProps) {
  return (
    <div
      className={`!pointer-events-none absolute top-10 left-1/2 mx-auto -ml-1.5 size-full w-[calc(100%+8rem)] -translate-x-1/2 bg-[url('${imageUrl}')] bg-contain bg-top-left bg-no-repeat ${className}`}
    />
  );
}
