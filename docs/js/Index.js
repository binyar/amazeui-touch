import React from 'react';
import {
  Link,
} from 'react-router';
import Container from '../../js/Container';
import {
  QRCode,
} from '../utils';

const Index = React.createClass({
  componentDidMount() {
    const {
      host,
      } = global.location;
    this._qrcode = new QRCode(this.refs.qrcode, {
      text: `http://${host}/kitchen-sink/`,
      width: 80,
      height: 80,
    });
  },

  render() {
    const year = new Date().getFullYear();

    return (
      <Container scrollable>
        <div className="amt-banner">
          <div className="am-container">
            <div className="amt-sk">
              <iframe
                src="kitchen-sink"
                frameBorder="0"
                scrolling="no"></iframe>
            </div>

            <div className="amt-intro">
              <h1>Amaze UI Touch</h1>
              <h2>基于 React.js 的移动端 Web 组件库</h2>
              <div className="amt-ghbtns">
                <iframe
                  src="https://ghbtns.com/github-btn.html?user=amazeui&repo=amazeui-touch&type=star&count=true"
                  frameBorder="0" scrolling="0" width="120px"
                  height="20px"></iframe>
                <iframe
                  src="https://ghbtns.com/github-btn.html?user=amazeui&repo=amazeui-touch&type=fork&count=true"
                  frameBorder="0" scrolling="0" width="120px"
                  height="20px"></iframe>
              </div>
              <div className="am-btn-toolbar">
                <a
                  className="am-btn am-btn-success am-btn-lg sk-link"
                  href="kitchen-sink"
                >查看演示</a>
                <Link className="am-btn am-btn-secondary am-btn-lg" to="/docs">开始使用</Link>
                <a
                  className="am-btn am-btn-default am-btn-lg"
                  href="https://github.com/amazeui/amazeui-touch"
                  target="_blank"
                >贡献代码</a>
              </div>
              <div ref="qrcode" className="ks-qrcode am-hide-sm-only"></div>
            </div>
          </div>
        </div>
        <div className="amt-features">
          <div className="am-g am-g-fixed">
            <div className="am-u-md-6">
              <span className="am-icon-mobile" />
              <h2>专属于移动</h2>
              <p>Amaze UI Touch 专为移动打造，在技术实现、交互设计上只考虑主流移动设备，保证代码轻、性能高。</p>
            </div>
            <div className="am-u-md-6">
              <span className="am-icon-paint-brush" />
              <h2>专注于 UI</h2>
              <p>只提供 UI 组件（View），对配套技术不做限定，方便用户与现有技术栈快速整合，降低使用成本。</p>
            </div>
          </div>
          <div className="am-g am-g-fixed">
            <div className="am-u-md-6">
              <span className="am-icon-building" />
              <h2>采用 Flexbox 布局</h2>
              <p>使用 Flexbox 技术，灵活自如地对齐、收缩、扩展元素，轻松搞定移动页面布局。</p>
            </div>
            <div className="am-u-md-6">
              <span className="am-icon-server" />
              <h2>基于 React.js</h2>
              <p>基于风靡社区的 React.js 封装组件，沿袭高性能、可复用、易扩展、一处学习多端编写特性。</p>
            </div>
          </div>
        </div>
        <footer className="amt-footer">
          <div className="am-g am-g-fixed">
            <div className="am-u-md-4 am-u-md-push-8">
              <ul className="amt-footer-socials">
                <li>
                  <a
                    href="http://amazeui.org/about/contact"
                    target="_blank"
                    className="am-icon-qq am-icon-btn"
                  />
                </li>
                <li>
                  <a
                    href="http://weibo.com/amazeui"
                    target="_blank"
                    className="am-icon-weibo am-icon-btn" />
                </li>
                <li>
                  <span className="am-icon-wechat am-icon-btn" />
                </li>
              </ul>
            </div>
            <div className="am-u-md-8 am-u-md-pull-4">
              <h2 className="amt-footer-fd">
                <a href="http://www.yunshipei.com" target="_blank">云适配</a>
              </h2>
              <p className="amt-cp">© {year} AllMobilize, Inc. Licensed under <a
                href="http://opensource.org/licenses/MIT" target="_blank">MIT
                license</a>. Developed with <a
                href="http://www.jetbrains.com/webstorm/" target="_blank">WebStorm</a>.
              </p>
            </div>
          </div>
        </footer>
      </Container>
    );
  }
});

export default Index;
