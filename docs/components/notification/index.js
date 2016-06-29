const fs = require('fs');
import React from 'react';
import {
  Doc,
  Markdown,
  Highlight,
} from '../../utils';

const NotificationDoc = React.createClass({
  render() {
    return (
      <Doc>
        <Markdown>{require('./api.md')}</Markdown>
        <Highlight
          demo="notification"
        >
          {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/NotificationExample.js`, 'utf-8')}
        </Highlight>
      </Doc>
    );
  }
});

export default NotificationDoc;
