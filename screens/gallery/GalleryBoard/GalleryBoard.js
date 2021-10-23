import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components';
import ImageViewer from '../../../components/ImageViewer/ImageViewer';
import { SCREEN_NAMES } from '../../../util/constants';
const GalleryBoardContainer = styled.View`
  flex: 1;
  background-color: powderblue;
`;

const images = {
  work: [
    require('../../../assets/images/work1.jpg'),
    require('../../../assets/images/work2.jpg'),
    require('../../../assets/images/work3.jpg'),
  ],
  life: [
    require('../../../assets/images/life1.jpg'),
    require('../../../assets/images/life2.jpg'),
  ],
  goal: [
    require('../../../assets/images/goal1.jpg'),
    require('../../../assets/images/goal2.jpg'),
  ],
};

const getImg = (type) => {
  switch (type) {
    case SCREEN_NAMES.WORK:
      return images.work;
    case SCREEN_NAMES.LIFE:
      return images.life;
    case SCREEN_NAMES.GOAL:
      return images.goal;
    default:
      return null;
  }
};

const GalleryBoard = ({ type }) => (
  <GalleryBoardContainer>
    <ScrollView>
      {getImg(type).map((src, idx) => {
        return <ImageViewer key={idx} src={src} />;
      })}
    </ScrollView>
  </GalleryBoardContainer>
);

export default GalleryBoard;
