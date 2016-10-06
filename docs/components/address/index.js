const fs = require('fs');
import React from 'react';
import {
  Doc,
  Markdown,
  Highlight,
} from '../../utils';

const AddressDoc = React.createClass({
  render() {
    return (
      <Doc>
        <Markdown>{require('./api.md')}</Markdown>
        <Highlight
          demo="address"
        >
          {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/AddressExample.js`, 'utf-8')}
        </Highlight>
      </Doc>
    );
  }
});

export default AddressDoc;
