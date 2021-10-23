import React from 'react';
import { Image, ImageViewerContainer } from './style';

const ImageViewer = ({ src }) => {
  return (
    <ImageViewerContainer>
      <Image source={src} />
    </ImageViewerContainer>
  );
};

export default ImageViewer;
