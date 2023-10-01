import { FC } from "react";

export const TextWithSmallUnit: FC<{ text: string }> = ({ text }) => {
  // Use a regular expression to match the numeric part and the unit part
  const regex = /([\d,]+)([^\d,]*)$/;
  const match = text.match(regex);

  if (match) {
    const mainText = match[1]; // The numeric part
    const unit = match[2]; // The non-numeric part

    return (
      <>
        <span className="text-6xl md:text-7xl">{mainText}</span>
        <span className="text-4xl md:text-5xl">{unit}</span>
      </>
    );
  }

  // If there's no match, just display the text as is
  return <div>{text}</div>;
};
