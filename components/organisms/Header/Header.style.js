import { css } from 'styled-components';

export default css`
  /* Create a sticky/fixed navbar */
  &#navbar {
    overflow: hidden;
    /* background-color: #f1f1f1; */
    position: absolute;
    padding: 40px 10px; /* Large padding which will shrink on scroll (using JS) */
    transition: 0.4s; /* Adds a transition effect when the padding is decreased */
    width: 100%;
    top: 0; /* At the top */
    z-index: 99;

    a {
      float: left;
      color: white;
      text-align: center;
      padding: 12px;
      text-decoration: none;
      font-size: 18px;
      line-height: 25px;
      border-radius: 4px;
      transition: 0.4s;

      &:hover {
        transition: 0.4s;
        color: ${props => props.theme.brandPrimaryColor};
      }

      &.active {
        background-color: dodgerblue;
        color: white;
      }
    }

    #logo {
      font-size: 35px;
      font-weight: bold;
      transition: 0.4s;
      height: 70px;
    }
  }

  nav {
    ul {
      margin: 0;
      text-decoration: none;
      list-style-type: none;
    }
    .icon {
      display: none;
    }
  }

  &#navbar.fixed {
    position: fixed;
    background-color: rgba(24, 25, 26, 0.93);
    background-size: cover;
  }

  /* Add responsiveness - on screens less than 580px wide, display the navbar vertically instead of horizontally */
  @media screen and (max-width: 580px) {
    &#navbar {
      padding: 20px 10px !important; /* Use !important to make sure that JavaScript doesn't override the padding on small screens */
      a {
        float: none;
        display: block;
        text-align: right;
      }
    }

    #navbar-right {
      float: none;
    }
  }

  @media screen and (max-width: 600px) {
    &#navbar {
      ul {
        flex-direction: column;
      }
      li {
        display: none;
      }
      li.icon {
        float: right;
        display: block;
      }
    }
    .responsive {
      position: relative;
    }
    .responsive .icon {
      position: absolute;
      right: 0;
      top: 0;
    }
    &#navbar {
      .responsive {
        li {
          float: none;
          display: block;
          text-align: right;

          &:first-child {
            visibility: hidden;
          }
        }
      }
    }
    .responsive {
      float: none;
    }
    .responsive {
      position: relative;
    }
    .responsive {
      display: block;
      /* width: 100%; */
      text-align: left;
    }
  }
`;
