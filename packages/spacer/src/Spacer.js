import React, { Component } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "@hig/themes-poc";

import { cx, css } from "emotion";

import stylesheet from "./Spacer.stylesheet";
import { AVAILABLE_SIZES } from "./availableSizes";

export default class Spacer extends Component {
  static propTypes = {
    /** Used for passing custom values to the spacer, in lieu of a fixed amount */
    size: PropTypes.string,
    /** Sets the size of the spacer */
    spacing: PropTypes.oneOf(AVAILABLE_SIZES)
  };

  static defaultProps = {
    spacing: "m"
  };

  render() {
    const { size, spacing } = this.props;
    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => {
          const styles = stylesheet({ size, spacing }, resolvedRoles);
          return <div className={cx(css(styles.spacer), "hig__spacer-v1")} />;
        }}
      </ThemeContext.Consumer>
    );
  }
}
