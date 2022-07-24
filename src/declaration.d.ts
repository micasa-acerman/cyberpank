declare module 'react-image-filter' {
    import { CSSProperties, FC } from 'react'
    export interface ImageFilterProps {
        image: string;
        filter: 'duotone' | 'invert' | 'grayscale' | 'sepia' | number[][];
        colorOne?: [number, number, number];
        colorTwo?: [number, number, number];
        preserveAspectRatio?: string = 'none'
        className?: string;
        style?: CSSProperties;
    }
    const ImageFilter: FC<ImageFilterProps>;
    export default ImageFilter
}

declare module '*.jpg';
declare module '*.png' {
    export default '' as string
}
declare module '*.svg' {
    export default '' as string
}
declare module '*.jpeg';
declare module '*.gif';