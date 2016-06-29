const fs = require('fs');
import React from 'react';
import {
  Doc,
  Markdown,
  Highlight,
} from '../../utils';

const NavBarDoc = React.createClass({
  render() {
    return (
      <Doc>
        <Markdown>{require('./api.md')}</Markdown>
        <Highlight
          demo="navbar"
        >
          {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/NavbarExample.js`, 'utf-8')}
        </Highlight>
      </Doc>
    );
  }
});

export default NavBarDoc;
