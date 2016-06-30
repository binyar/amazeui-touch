import React from 'react';
import {
  Doc,
  Markdown,
} from '../../utils';

const GettingStarted = React.createClass({
  render() {
    return (
      <Doc>
        <Markdown>{require('./README.md')}</Markdown>
      </Doc>
    );
  }
});

export default GettingStarted;
