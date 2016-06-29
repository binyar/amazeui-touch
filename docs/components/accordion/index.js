// @see https://github.com/substack/brfs/issues/39#issuecomment-77368613
const fs = require('fs');
import React from 'react';
import {
  Doc,
  Markdown,
  Highlight,
} from '../../utils';

const AccordionDoc = React.createClass({
  render() {
    return (
      <Doc>
        <Markdown>{require('./api.md')}</Markdown>
        <Highlight
          demo="accordion"
        >
          {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/AccordionExample.js`, 'utf-8')}
        </Highlight>
      </Doc>
    );
  }
});

export default AccordionDoc;
