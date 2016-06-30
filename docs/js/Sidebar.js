import React from 'react';
import {
  Link,
} from 'react-router';

const components = [
  {
    category: 'CSS',
    title: '样式',
    components: [
      {
        name: 'Normalize',
        title: '基础样式'
      },
      {
        name: 'Typography',
        title: '排版'
      },
      {
        name: 'Utility',
        title: '辅助类'
      }
    ]
  },
  {
    category: 'Layout',
    title: '布局组件',
    components: [
      {
        name: 'Grid',
        title: '网格'
      },
      {
        name: 'Container',
        title: '容器'
      }
    ]
  },
  {
    category: 'Components',
    title: '常用组件',
    components: [
      {
        name: 'Accordion',
        title: '手风琴'
      },
      {
        name: 'Badge',
        title: '小徽章'
      },
      {
        name: 'Button',
        title: '按钮'
      },
      {
        name: 'Card',
        title: '卡片'
      },
      {
        name: 'Form',
        title: '表单'
      },
      {
        name: 'Group',
        title: '分组'
      },
      {
        name: 'Icon',
        title: '图标'
      },
      {
        name: 'List',
        title: '列表'
      },
      {
        name: 'Loader',
        title: '加载图标'
      },
      {
        name: 'Modal',
        title: '模态窗'
      },
      {
        name: 'NavBar',
        title: '导航条'
      },
      {
        name: 'Notification',
        title: '通知'
      },
      {
        name: 'OffCanvas',
        title: '侧边栏'
      },
      {
        name: 'Popover',
        title: '弹出层'
      },
      {
        name: 'Slider',
        title: '轮播'
      },
      {
        name: 'TabBar',
        title: '工具栏'
      },
      {
        name: 'Tabs',
        title: '选项卡'
      },
    ]
  },
];

const Sidebar = React.createClass({
  getInitialState() {
    return {
      filter: null
    };
  },

  applyFilter() {
    this.setState({
      filter: this.refs.filter.value,
    });
  },

  renderNav() {
    let cNav = [
      (
      <li key="gettingStarted">
        <Link
          activeClassName="active"
          to="/docs/getting-started"
        >
          开始使用
        </Link>
      </li>),
      (
        <li key="modular">
          <Link
            activeClassName="active"
            to="/docs/advanced"
          >
            进阶使用
          </Link>
        </li>
      )
    ];

    components.forEach((category, i) => {
      const {
        title: cTitle,
        components,
        } = category;

      cNav.push(
        <li
        key={`c${i}`}
        className="nav-header"
        >
          {cTitle}
        </li>
      );

      components.forEach((cpt, index) => {
        const {
          title,
          name,
          } = cpt;
        let filter = this.state.filter;
        filter = typeof filter === 'string' ?
          filter.toLowerCase() : null;

        if (!filter ||
          (name.toLowerCase().indexOf(filter) > -1) ||
          (title.toLowerCase().indexOf(filter) > -1)
        ) {
          let cptNav = (
            <li key={`c${i}-item${index}`}>
              <Link
                activeClassName="active"
                to={`/docs/${name.toLowerCase()}`}
              >
                {title} <span className="en">{name}</span>
              </Link>
            </li>);

          cNav.push(cptNav);
        }
      });
    });

    return (
      <ul>
        {cNav}
      </ul>
    );
  },

  render() {
    return (
      <div className={`amt-sidebar ${this.props.className}`}>
        <p className="am-margin-top am-margin-horizontal-sm">
          <input
            className="am-form-field am-input-sm"
            onChange={this.applyFilter}
            ref="filter"
            type="text"
            id="doc-filter"
            placeholder="查找组件" />
        </p>
        <hr className="am-margin-vertical-sm" />
        <nav
          role="navigation"
        >
          {this.renderNav()}
        </nav>
      </div>
    );
  }
});

export default Sidebar;
