import { FC } from "react";
import { IIconProps, SocialIconType } from "../models/IconsModel";
import IconGooglePlay from "../icons/GooglePlay";
import IconGithub from "../icons/Github";
import IconMail from "../icons/Mail";
import IconLink from "../icons/Link";
import IconLinkedIn from "../icons/LinkedIn";
import IconHeadHunter from "../icons/HeadHunter";
import IconTelegram from "../icons/Telegram";

export const socialIcons: Record<SocialIconType, FC<IIconProps>> = {
  googlePlay: IconGooglePlay,
  github: IconGithub,
  mail: IconMail,
  linkedIn: IconLinkedIn,
  link: IconLink,
  hh: IconHeadHunter,
  telegram: IconTelegram,
};
