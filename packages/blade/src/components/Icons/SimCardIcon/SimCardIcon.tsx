import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';

const SimCardIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.13744 2.06217C8.70738 1.3886 9.54483 1 10.4274 1H18C19.6569 1 21 2.34315 21 4V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V9.23262C3 8.52305 3.25151 7.83646 3.70984 7.29479L8.13744 2.06217ZM10.4274 3C10.1334 3 9.85429 3.12942 9.66421 3.35406L5.23661 8.58667C5.08384 8.76723 5 8.9961 5 9.23262V20C5 20.5523 5.44771 21 6 21H18C18.5523 21 19 20.5523 19 20V4C19 3.44772 18.5523 3 18 3H10.4274Z"
        fill={iconColor}
      />
      <Path
        d="M8.71103 18.7118C8.51937 18.9034 8.28187 18.9993 7.99854 18.9993C7.7152 18.9993 7.4777 18.9034 7.28604 18.7118C7.09437 18.5201 6.99854 18.2826 6.99854 17.9993C6.99854 17.7159 7.09437 17.4784 7.28604 17.2868C7.4777 17.0951 7.7152 16.9993 7.99854 16.9993C8.28187 16.9993 8.51937 17.0951 8.71103 17.2868C8.9027 17.4784 8.99854 17.7159 8.99854 17.9993C8.99854 18.2826 8.9027 18.5201 8.71103 18.7118Z"
        fill={iconColor}
      />
      <Path
        d="M8.71103 14.7118C8.51937 14.9034 8.28187 14.9993 7.99854 14.9993C7.7152 14.9993 7.4777 14.9034 7.28604 14.7118C7.09437 14.5201 6.99854 14.2826 6.99854 13.9993V11.9993C6.99854 11.7159 7.09437 11.4784 7.28604 11.2868C7.4777 11.0951 7.7152 10.9993 7.99854 10.9993C8.28187 10.9993 8.51937 11.0951 8.71103 11.2868C8.9027 11.4784 8.99854 11.7159 8.99854 11.9993V13.9993C8.99854 14.2826 8.9027 14.5201 8.71103 14.7118Z"
        fill={iconColor}
      />
      <Path
        d="M12.711 18.7118C12.5194 18.9034 12.2819 18.9993 11.9985 18.9993C11.7152 18.9993 11.4777 18.9034 11.286 18.7118C11.0944 18.5201 10.9985 18.2826 10.9985 17.9993V15.9993C10.9985 15.7159 11.0944 15.4784 11.286 15.2868C11.4777 15.0951 11.7152 14.9993 11.9985 14.9993C12.2819 14.9993 12.5194 15.0951 12.711 15.2868C12.9027 15.4784 12.9985 15.7159 12.9985 15.9993V17.9993C12.9985 18.2826 12.9027 18.5201 12.711 18.7118Z"
        fill={iconColor}
      />
      <Path
        d="M12.711 12.7118C12.5194 12.9034 12.2819 12.9993 11.9985 12.9993C11.7152 12.9993 11.4777 12.9034 11.286 12.7118C11.0944 12.5201 10.9985 12.2826 10.9985 11.9993C10.9985 11.7159 11.0944 11.4784 11.286 11.2868C11.4777 11.0951 11.7152 10.9993 11.9985 10.9993C12.2819 10.9993 12.5194 11.0951 12.711 11.2868C12.9027 11.4784 12.9985 11.7159 12.9985 11.9993C12.9985 12.2826 12.9027 12.5201 12.711 12.7118Z"
        fill={iconColor}
      />
      <Path
        d="M16.711 18.7118C16.5194 18.9034 16.2819 18.9993 15.9985 18.9993C15.7152 18.9993 15.4777 18.9034 15.286 18.7118C15.0944 18.5201 14.9985 18.2826 14.9985 17.9993C14.9985 17.7159 15.0944 17.4784 15.286 17.2868C15.4777 17.0951 15.7152 16.9993 15.9985 16.9993C16.2819 16.9993 16.5194 17.0951 16.711 17.2868C16.9027 17.4784 16.9985 17.7159 16.9985 17.9993C16.9985 18.2826 16.9027 18.5201 16.711 18.7118Z"
        fill={iconColor}
      />
      <Path
        d="M16.711 14.7118C16.5194 14.9034 16.2819 14.9993 15.9985 14.9993C15.7152 14.9993 15.4777 14.9034 15.286 14.7118C15.0944 14.5201 14.9985 14.2826 14.9985 13.9993V11.9993C14.9985 11.7159 15.0944 11.4784 15.286 11.2868C15.4777 11.0951 15.7152 10.9993 15.9985 10.9993C16.2819 10.9993 16.5194 11.0951 16.711 11.2868C16.9027 11.4784 16.9985 11.7159 16.9985 11.9993V13.9993C16.9985 14.2826 16.9027 14.5201 16.711 14.7118Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default SimCardIcon;