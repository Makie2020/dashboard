import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ListItem = styled.li `
    display: inline-block;
    list-style: none;
    margin-bottom: -1px;
    padding: 0.5rem 0.75rem;
    color: #6E6E6E;
    &:active{
      color: #135846;
      border-bottom: 2px solid #135846; 
    }
  `


class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label },
    } = this;

    let className = "tab-list-item";

    if (activeTab === label) {
      className += " tab-list-active";
    }

    return (
      <ListItem className={className} onClick={onClick}>
        {label}
      </ListItem>
    );
  }
}

export default Tab;