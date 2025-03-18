declare module 'cobe' {
  export interface COBEOptions {
    width: number;
    height: number;
    onRender: (state: Record<string, any>) => void;
    devicePixelRatio?: number;
    phi?: number;
    theta?: number;
    dark?: number;
    diffuse?: number;
    mapSamples?: number;
    mapBrightness?: number;
    baseColor?: number[];
    markerColor?: number[];
    glowColor?: number[];
    markers?: Array<{ location: number[]; size: number }>;
  }

  export interface Globe {
    destroy: () => void;
  }

  export default function createGlobe(canvas: HTMLCanvasElement, options: COBEOptions): Globe;
}
