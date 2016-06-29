const fs = require('fs');
import React from 'react';
import {
  Doc,
  Markdown,
  Highlight,
} from '../../utils';

const SliderDoc = React.createClass({
  render() {
    return (
      <Doc>
        <Markdown>{require('./api.md')}</Markdown>
        <Highlight
          demo="slider"
        >
          {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/SliderExample.js`, 'utf-8')}
        </Highlight>
      </Doc>
    );
  }
});

export default SliderDoc;
