import React from "../../_snowpack/pkg/react.js";
import {
  alignItems,
  backgroundColor,
  classnames,
  display,
  flexDirection,
  fontSize,
  fontWeight,
  gap,
  height,
  justifyContent,
  padding,
  textAlign,
  textColor,
  width
} from "../tailwindcss-classnames-cli.js";
export default function Projects() {
  return /* @__PURE__ */ React.createElement("div", {
    className: classnames(backgroundColor("bg-white"), textAlign("text-center"), display("flex"), justifyContent("justify-center"), alignItems("items-center"), flexDirection("flex-col"), gap("gap-y-4"), padding("py-52"), width("w-full"), height("h-full"))
  }, /* @__PURE__ */ React.createElement("div", {
    className: classnames(fontSize("text-4xl"), textColor("text-gray-800"), fontWeight("font-bold"))
  }, "Projects"), /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, "Click here"));
}
