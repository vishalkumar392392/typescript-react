import { ComponentPropsWithoutRef } from "react";

type AnchorProps = ComponentPropsWithoutRef<"a"> & {
  href?: never;
};
type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: never;
};

const isAnchorTag = (
  props: AnchorProps | ButtonProps
): props is AnchorProps => {
  return "href" in props;
};

export const Button = (props: AnchorProps | ButtonProps) => {
  if (isAnchorTag(props)) {
    return (
      <p>
        <a className="button" {...props}></a>
      </p>
    );
  }

  return (
    <div>
      <button className="button" {...props}></button>
    </div>
  );
};
