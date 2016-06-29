const fs = require('fs');
import React from 'react';
import {
  Doc,
  Markdown,
  Highlight,
} from '../../utils';

const ButtonDoc = React.createClass({
  render() {
    return (
      <Doc>
        <Markdown>{require('./api.md')}</Markdown>
        <Highlight
          demo="button"
        >
          {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/ButtonExample.js`, 'utf-8')}
        </Highlight>
      </Doc>
    );
  }
});

export default ButtonDoc;
