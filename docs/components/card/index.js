const fs = require('fs');
import React from 'react';
import {
  Doc,
  Markdown,
  Highlight,
} from '../../utils';

const CardDoc = React.createClass({
  render() {
    return (
      <Doc>
        <Markdown>{require('./api.md')}</Markdown>
        <Highlight
          demo="card"
        >
          {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/CardExample.js`, 'utf-8')}
        </Highlight>
      </Doc>
    );
  }
});

export default CardDoc;
