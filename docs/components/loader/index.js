const fs = require('fs');
import React from 'react';
import {
  Doc,
  Markdown,
  Highlight,
} from '../../utils';

const LoaderDoc = React.createClass({
  render() {
    return (
      <Doc>
        <Markdown>{require('./api.md')}</Markdown>
        <Highlight
          demo="loader"
        >
          {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/LoaderExample.js`, 'utf-8')}
        </Highlight>
      </Doc>
    );
  }
});

export default LoaderDoc;
