export {};

declare module "*.glb" {
  const src: string;
  export default src;
}
declare module "*.png" {
  const src: string;
  export default src;
}

declare module "meshline" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const MeshLineGeometry: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const MeshLineMaterial: any;
}

import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      meshLineGeometry: any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      meshLineMaterial: any;
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      meshLineGeometry: any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      meshLineMaterial: any;
    }
  }
}
