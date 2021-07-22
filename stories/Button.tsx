import React from "react";
import { styled } from "../stitches.config";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  color?: "primary" | "secondary";
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string | undefined;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction, this documentation is also found in storybook!
 */
export const Button = ({
  color = "primary",
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  const Button = styled("button", {
    // base styles
    fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: 700,
    border: 0,
    borderRadius: "3em",
    cursor: "pointer",
    display: "inline-block",
    lineHeight: 1,
    // variants
    variants: {
      color: {
        primary: {
          backgroundColor: "$purple500",
          color: "$lightTextColor",
          "&:hover": {
            backgroundColor: "$purple700",
          },
        },
        secondary: {
          backgroundColor: "$gray500",
          "&:hover": {
            backgroundColor: "$gray300",
          },
        },
      },
      size: {
        small: {
          fontSize: "$1",
          padding: "$2 $3",
        },
        medium: {
          fontSize: "$2",
          padding: "$2 $4",
        },
        large: {
          fontSize: "$3",
          padding: "$2 $5",
        },
      },
    },
  });
  return (
    <Button type="button" color={color} size={size} {...props}>
      {label}
    </Button>
  );
};
