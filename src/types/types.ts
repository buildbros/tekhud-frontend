import {
  AnimationControls,
  TargetAndTransition,
  Transition,
  VariantLabels,
} from "framer-motion";
import React from "react";

export interface SignUpFieldProps {
  username: string;
  email: string;
  password: string;
}
export interface SignInFieldProps {
  identifier: string;
  password: string;
}

export interface AnimationProps {
  children: React.ReactNode;
  initial?: boolean | TargetAndTransition | VariantLabels | undefined;
  animate?:
    | boolean
    | TargetAndTransition
    | VariantLabels
    | AnimationControls
    | undefined;
  transition?: Transition | undefined;
}
