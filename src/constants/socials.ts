import { FC } from "react";
import { IIconProps, SocialIconType } from "../models/IconsModel";
import IconGooglePlay from "../icons/GooglePlay";
import IconGithub from "../icons/Github";
import IconMail from "../icons/Mail";
import IconLink from "../icons/Link";
import IconInstagram from "../icons/Instagram";

export const socialIcons: Record<SocialIconType, FC<IIconProps>> = {
  googlePlay: IconGooglePlay,
  github: IconGithub,
  mail: IconMail,
  instagram: IconInstagram,
  link: IconLink,
};
