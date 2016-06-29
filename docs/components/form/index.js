const fs = require('fs');
import React from 'react';
import {
  Doc,
  Markdown,
  Highlight,
} from '../../utils';

const FormDoc = React.createClass({
  render() {
    return (
      <Doc>
        <Markdown>{require('./api.md')}</Markdown>
        <Highlight
          demo="form"
        >
          {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/FormExample.js`, 'utf-8')}
        </Highlight>
      </Doc>
    );
  }
});

export default FormDoc;
