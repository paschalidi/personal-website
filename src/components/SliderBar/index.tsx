import * as S from "@radix-ui/react-slider";
import { useState } from "react";

export const SliderBar = ({ textTop }: { textTop: string }) => {
  const [value, setValue] = useState<number[]>([150]);
  return (
    <>
      <div className={"flex flex-row gap-x-2"}>
        <div className="opacity-60 text-white text-base font-normal">
          {textTop}
        </div>
        <div className={"text-green-300 text-base font-medium"}>{value}%</div>
      </div>
      <S.Root
        onValueChange={(value) => {
          setValue(value);
        }}
        className="relative flex items-center select-none touch-none h-5 py-4 lg:py-5"
        defaultValue={[150]}
        min={10}
        max={150}
        step={5}
      >
        <S.Track className="bg-gradient-to-l from-green-600 to-green-100 relative grow rounded-full h-[3px]">
          <S.Range className="absolute bg-teal-600 rounded-full h-full" />
        </S.Track>
        <S.Thumb
          className="block w-5 h-5 bg-white shadow-[0_1px_1px] shadow-teal-600 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_1px] focus:shadow-teal-600"
          aria-label="Volume"
        />
      </S.Root>
    </>
  );
};
