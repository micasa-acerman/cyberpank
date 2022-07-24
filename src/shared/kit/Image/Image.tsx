import React, { FC } from 'react'
import ImageFilter, { ImageFilterProps } from 'react-image-filter'

type ImageProps = {
  image: string
  type: 'duotone-br' | 'duotone-bo' | 'duotone-gp' | 'duotone-rb'
}

const getParameters = (
  type: 'duotone-br' | 'duotone-bo' | 'duotone-gp' | 'duotone-rb',
): Pick<ImageFilterProps, 'filter' | 'colorOne' | 'colorTwo'> => {
  switch (type) {
    case 'duotone-bo':
      return {
        filter: 'duotone',
        colorOne: [40, 70, 200],
        colorTwo: [220, 30, 70],
      }
    case 'duotone-rb':
      return {
        filter: 'duotone',
        colorOne: [250, 50, 50],
        colorTwo: [20, 20, 100],
      }
    case 'duotone-gp':
      return {
        filter: 'duotone',
        colorOne: [50, 250, 50],
        colorTwo: [250, 20, 220],
      }
    case 'duotone-br':
      return {
        filter: 'duotone',
        colorOne: [40, 70, 200],
        colorTwo: [220, 30, 70],
      }
  }
}

export const Image: FC<ImageProps> = ({ image, type }) => {
  return <ImageFilter image={image} {...getParameters(type)} />
}
