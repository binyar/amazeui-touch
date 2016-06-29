const fs = require('fs');
import React from 'react';
import {
  Doc,
  Markdown,
  Highlight,
} from '../../utils';

const IconDoc = React.createClass({
  render() {
    return (
      <Doc>
        <Markdown>{require('./api.md')}</Markdown>
        <Highlight
          demo="icon"
        >
          {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/IconExample.js`, 'utf-8')}
        </Highlight>
      </Doc>
    );
  }
});

export default IconDoc;
