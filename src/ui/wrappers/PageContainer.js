import styled from 'styled-components';
import { media } from '@tds/core-responsive';

const PageContainer = styled.div({
  margin: '0px auto',
  'padding-top': '2rem',
  ...media.until('sm').css({
    margin: '0px 1rem',
  }),
  ...media.from('sm').css({
    'max-width': '36rem',
  }),
  ...media.from('md').css({
    'max-width': '48rem',
    'padding-top': '3rem',
  }),
  ...media.from('lg').css({
    'max-width': '62rem',
  }),
});

export default PageContainer;
