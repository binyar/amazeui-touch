const fs = require('fs');
import React from 'react';
import {
  Doc,
  Markdown,
  Highlight,
} from '../../utils';

const ModalDoc = React.createClass({
  render() {
    return (
      <Doc>
        <Markdown>{require('./api.md')}</Markdown>
        <Highlight
          demo="grid"
        >
          {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/GridExample.js`, 'utf-8')}
        </Highlight>
      </Doc>
    );
  }
});

export default ModalDoc;
