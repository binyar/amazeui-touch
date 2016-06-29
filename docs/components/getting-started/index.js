const fs = require('fs');
import React from 'react';
import {
  Doc,
  Markdown,
  Highlight,
} from '../../utils';

const GettingStarted = React.createClass({
  render() {
    return (
      <Doc>
        <Markdown>{require('./getting-started.md')}</Markdown>
      </Doc>
    );
  }
});

export default GettingStarted;
