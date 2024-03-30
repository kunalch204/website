export default function Title({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <h1 className="text-3xl font-bold text-white group-hover:text-white">
        {text.split(" ").map((word, index) => (
          <span key={index} className="border-b-2 border-blue-500 mr-2">
            {word}
          </span>
        ))}
      </h1>
    </div>
  );
}
