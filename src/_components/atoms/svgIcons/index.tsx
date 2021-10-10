import React from 'react'
import {SvgIcon as MuiSvgIcon} from '@material-ui/core'
export interface IconCompProps  {
  icon?: string
  iconColor?:string
  sx?:object
}

const SvgIcon: React.FC<IconCompProps> = ({icon,iconColor,sx}) => {
  return (
    
    <MuiSvgIcon  htmlColor={iconColor} classes={sx} data-testid="svgicon">
    <path d={icon} />
    </MuiSvgIcon>
  );
};

export default SvgIcon;