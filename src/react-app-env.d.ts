/// <reference types="react-scripts" />

import "react";
declare module "react" {
  interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
      jsx?: string | boolean;
      global?: boolean;
  }
}