import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Title = styled.span`
  display: block;
  font-size: 1.6rem;
  margin: 1rem 0 1rem;
`;

export const Copy = styled.p`
  color: #757575;
  margin: 0;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
