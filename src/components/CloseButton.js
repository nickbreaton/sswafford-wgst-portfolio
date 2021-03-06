import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';
import {connect} from 'react-redux';
import close from '../actions/close';
import closeIcon from '../assets/icons/close.svg';

class CloseButton extends Component {
  get styles() {
    const numberOfHidden = this.props.entries.filter(entry => !entry.hidden).length;
    const hideOnOneHidden = (numberOfHidden === 1);
    return StyleSheet.create({
      button: {
        'position': 'absolute',
        'top': this.props.bottom ? 'default' : '1em',
        'bottom': this.props.bottom ? '1em' : 'default',
        'right': '1em',
        'border': 'none',
        'background': 'none',
        'font-family': 'Open Sans',
        'font-weight': 'bold',
        'font-size': '1.1em',
        'color': 'inherit',
        'display': hideOnOneHidden ? 'none' : 'flex',
        'align-items': 'center',
        'cursor': 'pointer',
        'flex-wrap': 'nowrap',
        ':hover': {
          'opacity': '0.5',
        }
      },
      icon: {
        'height': '1.25em',
        'opacity': '0.75',
        'margin-left': '0.4em',
      }
    });
  }

  click = () => {
    this.props.dispatch(close());
    window.scrollTo(0, 0);
  }

  render = () =>
    <a
      onClick={this.click}
      className={css(this.styles.button)}>
        <span>{'Back to Journals'}</span>
        <img src={closeIcon} className={css(this.styles.icon)}/>
    </a>
}

export default connect(stores => stores)(CloseButton);
