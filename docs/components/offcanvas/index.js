const fs = require('fs');
import React from 'react';
import {
  Doc,
  Markdown,
  Highlight,
} from '../../utils';

const OffCanvasDoc = React.createClass({
  render() {
    return (
      <Doc>
        <Markdown>{require('./api.md')}</Markdown>
        <Highlight
          demo="offcanvas"
        >
          {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/OffcanvasExample.js`, 'utf-8')}
        </Highlight>
      </Doc>
    );
  }
});

export default OffCanvasDoc;
