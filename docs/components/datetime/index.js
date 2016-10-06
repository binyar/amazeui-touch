const fs = require('fs');
import React from 'react';
import {
  Doc,
  Markdown,
  Highlight,
} from '../../utils';

const DatetimeDoc = React.createClass({
  render() {
    return (
      <Doc>
        <Markdown>{require('./api.md')}</Markdown>
        <Highlight
          demo="datetime"
        >
          {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/DatetimeExample.js`, 'utf-8')}
        </Highlight>
      </Doc>
    );
  }
});

export default DatetimeDoc;
