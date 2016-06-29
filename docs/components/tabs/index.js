const fs = require('fs');
import React from 'react';
import {
  Doc,
  Markdown,
  Highlight,
} from '../../utils';

const TabsDoc = React.createClass({
  render() {
    return (
      <Doc>
        <Markdown>{require('./api.md')}</Markdown>
        <Highlight
          demo="tabs"
        >
          {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/TabsExample.js`, 'utf-8')}
        </Highlight>
      </Doc>
    );
  }
});

export default TabsDoc;
