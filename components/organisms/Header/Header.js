import React from 'react';
import PropTypes from 'prop-types';
import Anchor from '../../atoms/Anchor';
import withStyles from '../../../lib/withStyles';
import styles from './Header.style';

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.onscroll = function() {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        document.getElementById('navbar').style.padding = '10px 10px';
        document.getElementById('navbar').classList.add('fixed');
        document.getElementById('logo').style.height = '60px';
      } else {
        document.getElementById('navbar').classList.remove('fixed');
        document.getElementById('logo').style.height = '80px';
      }
    }
  }

  /**
   * renderMenuLinks
   * @method
   * @renderMenuLinks which returns the markup for the menu links
   * @param {renderLinks} Array containing the data for the links.
   */
  renderMenuLinks = renderLinks =>
    renderLinks.map(item => {
      return (
        <li className={item.name} aria-label={item.name} key={item.name}>
          {/* {item.url ? ( */}
          <Anchor to={item.url} title={item.name}>
            {item.name}
          </Anchor>
          {/* ) : ( */}
          {/* <>{item.name}</> */}
          {/* )} */}
        </li>
      );
    });

  myFunction = () => {
    let x = document.getElementById('navbar-right');
    console.log('hell');
    if (x.className === 'nav-con') {
      x.className += ' responsive';
    } else {
      x.className = 'nav-con';
    }
  };

  render() {
    const {
      pageData: { header },
      className,
    } = this.props;

    return (
      <header id="navbar" className={`${className} container `}>
        <div className="row middle-lg between-xs">
          <img id="logo" src={header.logo.image} className="" />
          <nav id="navbar-right" className="nav-con">
            <ul className="row">
              {this.renderMenuLinks(header.firstLevelMenu)}
            </ul>
            <a
              href="javascript:void(0);"
              className="icon"
              onClick={this.myFunction}>
              &#9776;
            </a>
          </nav>
        </div>
      </header>
    );
  }
}

Header.propTypes = {};

Header.defaultProps = {};

export default withStyles(Header, styles);

export { Header as HeaderVanilla };
