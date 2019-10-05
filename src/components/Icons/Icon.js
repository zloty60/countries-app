import React from "react";
import { ReactComponent as Star } from "./../../assets/icons/star.svg";
import { ReactComponent as StartOutline } from "./../../assets/icons/starOutline.svg";
import { ReactComponent as Menu } from "./../../assets/icons/menuIcon.svg";
import { ReactComponent as Search } from "./../../assets/icons/searchIcon.svg";
import { ReactComponent as LeftArrow } from "./../../assets/icons/leftArrowIcon.svg";
import { ReactComponent as Globe } from "./../../assets/icons/globe.svg";
import { ReactComponent as SadIcon } from "./../../assets/icons/sadIcon.svg";
import { ReactComponent as CloseIcon } from "./../../assets/icons/closeIcon.svg";

export default function Icon(props) {
  switch (props.icon) {
    case "STAR":
      return <Star width={props.width} height={props.height} />;
    case "STAR-OUTLINE":
      return <StartOutline width={props.width} height={props.height} />;
    case "MENU":
      return <Menu width={props.width} height={props.height} />;
    case "SEARCH":
      return <Search width={props.width} height={props.height} />;
    case "LEFT_ARROW":
      return <LeftArrow width={props.width} height={props.height} />;
    case "GLOBE":
      return <Globe width={props.width} height={props.height} />;
    case "SAD":
      return <SadIcon width={props.width} height={props.height} />;
    case "CLOSE_ICON":
      return <CloseIcon width={props.width} height={props.height} />;
    default:
      return console.log("nie ma takiej ikony");
  }
}
