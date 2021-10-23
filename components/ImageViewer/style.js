import styled from 'styled-components/native';

export const ImageViewerContainer = styled.View`
  position: relative;
  border-width: 4px;
  border-style: solid;
  border-color: ${({ theme }) => theme.galleryBorder};
  margin: 10px;
  width: 400px;
  height: 300px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
