"use client"; // because of setState
import * as Tooltip from "@radix-ui/react-tooltip";
import { EyeHide, EyeShow } from "../Icons";
import { useState } from "react";

export const ToggleVisibility = () => {
  const [isPublic, setIsPublic] = useState(true);

  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={0}>
        {isPublic ? (
          <>
            <Tooltip.Trigger>
              <EyeShow
                onClick={() => setIsPublic(false)}
                className={"opacity-40"}
              />
            </Tooltip.Trigger>
            <Tooltip.Content
              side={"right"}
              sideOffset={-4}
              className={
                "bg-white py-2 px-4 text-lg font-normal select-none rounded-lg shadow  "
              }
            >
              Make this private
            </Tooltip.Content>
          </>
        ) : (
          <>
            <Tooltip.Trigger>
              <EyeHide
                onClick={() => setIsPublic(true)}
                className={"opacity-40"}
              />
            </Tooltip.Trigger>
            <Tooltip.Content
              side={"right"}
              sideOffset={-4}
              className={
                "bg-white py-2 px-4 text-lg font-normal select-none rounded-lg shadow  "
              }
            >
              Make this public
            </Tooltip.Content>
          </>
        )}
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
