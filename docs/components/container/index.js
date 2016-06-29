import React from 'react';
import {
  Doc,
  Markdown,
  Highlight,
} from '../../utils';

const ModalDoc = React.createClass({
  render() {
    return (
      <Doc>
        <Markdown>{require('./api.md')}</Markdown>
      </Doc>
    );
  }
});

export default ModalDoc;
