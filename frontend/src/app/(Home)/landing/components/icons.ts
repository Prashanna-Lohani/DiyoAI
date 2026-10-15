import type { IconType } from "react-icons";
import {
  FiBriefcase,
  FiCpu,
  FiFileText,
  FiFlag,
  FiGlobe,
  FiLayout,
  FiMessageSquare,
  FiMic,
  FiPhoneCall,
  FiShield,
  FiUsers,
  FiVolume2,
} from "react-icons/fi";

import type { IconName } from "@/content";

export const ICONS: Record<IconName, IconType> = {
  message: FiMessageSquare,
  cpu: FiCpu,
  layout: FiLayout,
  phone: FiPhoneCall,
  globe: FiGlobe,
  flag: FiFlag,
  mic: FiMic,
  file: FiFileText,
  volume: FiVolume2,
  briefcase: FiBriefcase,
  users: FiUsers,
  shield: FiShield,
};
