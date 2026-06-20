const WORD_STAGGER_MS = 60;

const AnimatedParagraph = ({ segments, className = '' }) => {
  const words = segments.flatMap((segment) =>
    segment.text.split(' ').filter(Boolean).map((word) => ({ word, className: segment.className }))
  );

  return (
    <p className={className}>
      {words.map(({ word, className: wordClassName }, index) => (
        <span
          key={index}
          className={`inline-block animate-blur-in ${wordClassName}`}
          style={{ animationDelay: `${index * WORD_STAGGER_MS}ms` }}
        >
          {word}&nbsp;
        </span>
      ))}
    </p>
  );
};

export default AnimatedParagraph;
