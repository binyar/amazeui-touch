const fs = require('fs');
import React from 'react';
import {
  Doc,
  Markdown,
  Highlight,
} from '../../utils';

const TypographyDoc = React.createClass({
  render() {
    return (
      <Doc>
        <Markdown>{require('./api.md')}</Markdown>
        <Highlight
          demo="typography"
        >
          {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/TypographyExample.js`, 'utf-8')}
        </Highlight>
      </Doc>
    );
  }
});

export default TypographyDoc;
