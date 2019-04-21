import { css } from 'styled-components';

export default css`
  &.single-box {
    display: flex;
  }

  .box-container {
    padding: 1rem;
    margin-top: 1.5rem;
    background: #f8f9fa;
    transition: 1.8s all;
    box-shadow: 7px 7px 10px 0 rgba(76, 110, 245, 0.1);
    position: relative;

    @media ${props => props.theme.largeMediaQuery} {
      padding: 3rem;

      &:hover {
        /* background: #0be881; */

        &::after {
          transform-origin: bottom left;
          transform: scaleX(1);
        }
      }

      &::after {
        transition: transform 0.45s ease-out;
        transform: scaleX(0);
        transform-origin: bottom right;
        content: '';
        position: absolute;
        height: 6px;
        bottom: 0;
        left: -2px;
        right: 2px;
        background-color: ${props => props.theme.brandPrimaryColor};
      }
    }

    h2 {
      margin: 1rem 0;
      position: relative;
      display: block;
    }

    p {
      color: ${props => props.theme.textColorMildGrey};
      font-family: ${props => props.theme.fontFamilyPrimaryLight};
      font-weight: 200;
    }

    [class^='icon-'],
    [class*=' icon-'] {
      color: ${props => props.theme.brandPrimaryColor};
      transition: 1s all;

      &::before {
        font-size: 30px;
      }
    }
  }
`;
