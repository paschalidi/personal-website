import {
  EnvelopeClosedIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

export const getSocialIcon = ({ url }: { url: string }) => {
  if (url.includes("instagram")) {
    return InstagramLogoIcon;
  }
  if (url.includes("linkedin")) {
    return LinkedInLogoIcon;
  }
  return EnvelopeClosedIcon;
};
