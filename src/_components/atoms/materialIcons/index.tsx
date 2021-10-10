import React from 'react'
import { Icon as MuiIcon, IconProps, makeStyles } from '@material-ui/core'
import { COLORS } from '../../../core-utils/theme'
export interface IconCompProps extends IconProps {
  icon?: string
  iconColor?: string
  type?:string
  className?: string
}
const getIconColor = (iconColor: string) => {
  switch (iconColor) {
    case "select":
      return COLORS.TERTIARY_GREY_500
    case "unselect":
      return COLORS.TERTIARY_GREY_50
    case "info":
      return COLORS.TERTIARY_GREY_300
    case  "success":
      return COLORS.TERTIARY_GREY_100
    default:
      return COLORS.TEXT_100
  }
}


const Icon: React.FC<IconCompProps> = ({iconColor,icon,className,type}) => {
  const color = iconColor ? iconColor : "default";
  return (
    <MuiIcon data-testid="icon"
    className={[
      className,
      type === "filled" ? "material-icons" : "material-icons-outlined",
    ].join(" ")}
    style={{ color: getIconColor(color) }}
  >
    {icon}
  </MuiIcon>
  );
};

export default Icon;
