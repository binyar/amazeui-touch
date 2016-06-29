const fs = require('fs');
import React from 'react';
import {
  Doc,
  Markdown,
  Highlight,
} from '../../utils';

const ListDoc = React.createClass({
  render() {
    return (
      <Doc>
        <Markdown>{require('./api.md')}</Markdown>
        <Highlight
          demo="list"
        >
          {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/ListExample.js`, 'utf-8')}
        </Highlight>
      </Doc>
    );
  }
});

export default ListDoc;
