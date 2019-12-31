import React from "react";

import MenuItem from "../menu-item/menu-item.component";
import SECTIONS_DATA from "../../data/sections.data";

export default class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: SECTIONS_DATA
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSecionProps }) => (
          <MenuItem
            key={id}
            {...otherSecionProps}
          />
        ))}
      </div>
    );
  }
}