import { css } from 'styled-components';

export default css`
  hr {
    border-top: 1px solid rgba(251, 247, 247, 0.1);
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
  }

  &.footer-content {
    background: #fff;
    .container {
      padding-bottom: 1rem !important;
      padding-top: 1rem !important;

      .footer-top {
        h2 {
          a {
            padding-bottom: 3rem;
            padding-top: 1em;
            font-size: 1.2em;
            color: #333;
            padding: 0;
            font-weight: 700;
            margin: 0;
            letter-spacing: 1px;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.37);
            position: relative;
            text-transform: uppercase;
          }
        }
      }
    }
  }

  .footer-bottom {
    padding: 2em 0;
  }

  .navbar-brand {
    text-align: center;
    text-decoration: none;
  }

  &.footer-content .footer-top {
    margin-bottom: 3rem !important;
  }

  &.footer-content h2 a span {
    color: #ff0084;
  }

  .con-gd .form-control {
    width: 100%;
    padding: 15px 0px;
    border: 0;
    border-bottom: 1px solid #7e8bf3;
    outline: none;
    background: transparent;
    color: #fff;
    border-radius: 0;
    font-size: 0.9em;
    letter-spacing: 5px;
  }

  .con-gd button.btn {
    margin-left: auto;
    background: #fff;
    margin-bottom: 0;
    border-radius: 4px;
    padding: 15px 5px;
    border: 0px;
    color: #4759d8;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 600;
    outline: none;
    cursor: pointer;
    width: 100%;
  }

  /*--placeholder-color--*/

  .con-gd ::-webkit-input-placeholder {
    color: #a2a9dc;
  }

  .con-gd :-moz-placeholder {
    /* Firefox 18- */
    color: #a2a9dc;
  }

  .con-gd ::-moz-placeholder {
    /* Firefox 19+ */
    color: #a2a9dc;
  }

  .con-gd :-ms-input-placeholder {
    color: #a2a9dc;
  }

  ul.list-info {
    padding: 0;
    list-style: none;
  }

  ul.list-info li {
    list-style: none;
    margin: 0.8em 0;
  }

  .footer p a {
    color: #777;
    text-decoration: underline;
  }

  .last-w3layouts-contact p {
    display: inline-block;
    vertical-align: middle;
    font-size: 0.85em;
    letter-spacing: 1px;
  }

  .footer-top p {
    color: #777;
  }

  .list-info li a {
    color: #777;
    font-size: 0.85em;
    letter-spacing: 1px;
    text-decoration: none;
  }

  .footer-links {
    h3.title {
      font-size: 1.2em;
      color: #333;
      font-weight: 600;
    }
    .list-info {
      span {
        &:before {
          transform: rotate(95deg);
          display: inline-block;
        }
      }
    }
  }

  .last-w3layouts-contact a {
    color: #777;
  }

  .subscribe-sec {
    padding: 60px 80px;
    border-radius: 4px;
    background: ${props => props.theme.textColorSecondary};
    -moz-box-shadow: 10px 10px 30px rgba(68, 79, 173, 0.35);
    -webkit-box-shadow: 10px 10px 30px rgba(68, 79, 173, 0.35);
    box-shadow: 10px 10px 30px rgba(68, 79, 173, 0.35);
  }

  ul.list-info span {
    margin-right: 0.5em;
    color: #0062cc;
  }
`;
