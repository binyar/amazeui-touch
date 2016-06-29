import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import Clipboard from 'clipboard';
import Prism from './Prism';

const Highlight = React.createClass({
  propTypes: {
    language: React.PropTypes.string,
  },

  getInitialState() {
    return {
      copyStatus: null,
    };
  },

  getDefaultProps() {
    return {
      language: 'jsx',
    };
  },

  componentDidMount() {
    this._clipboard = new Clipboard('.code-copy', {
      target: () => {
        return this.refs.code;
      }
    });

    this._clipboard.on('success', (e) => {
      this.setCopyStatus('success');
      e.clearSelection();
    });

    this._clipboard.on('error', (e) => {
      this.setCopyStatus('error');
    });
  },

  componentWillUnmount() {
    this._clipboard && this._clipboard.destroy();
    this._clearTimeout();
  },

  setCopyStatus(status) {
    this.setState({
      copyStatus: status,
    });

    this._clearTimeout();

    this._timeout = setTimeout(() => {
      this._resetStatus();
    }, 3500);
  },

  _clearTimeout() {
    this._timeout && clearTimeout(this._timeout);
  },

  _resetStatus() {
    this.setState({
      copyStatus: null,
    });
  },

  // TODO: 显示一个 iframe 可能更优雅一些
  _openDemo(url, e) {
    e.preventDefault();
    window.open(url, '',
      'width=320px, height=568px, centerscreen=yes');
  },

  renderCopyStatus() {
    const status = this.state.copyStatus;
    const statusMap = {
      error: '拷贝失败',
      success: '拷贝成功',
    };

    return status ? (
      <div
        className={`code-status ${status}`}
        key="copyStatus"
      >
        {statusMap[status]}
      </div>
    ) : null;
  },

  renderDemoLink() {
    const {
      demo,
      } = this.props;
    const url = `/kitchen-sink/#/${demo}`;

    return demo ? (
      <a
        href={url}
        onClick={this._openDemo.bind(null, url)}
      >
        Demo
      </a>
    ) : null;
  },

  render() {
    const {
      className,
      language,
      children,
      ...props,
      } = this.props;
    const code = Prism.amtHighlight({text: children, language, ln: 1});

    return (
      <div
        className="doc-highlight"
      >
        <div ref="code" dangerouslySetInnerHTML={{__html: code}} />
        <div className="code-actions">
          {this.renderDemoLink()}
          <span className="code-copy" ref="copyBtn">Copy</span>
        </div>

        <CSSTransitionGroup
          transitionName="copy-status"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}
        >
          {this.renderCopyStatus()}
        </CSSTransitionGroup>
      </div>
    );
  }
});

export default Highlight;
