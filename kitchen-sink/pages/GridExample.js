import React from 'react';
import {
  Container,
  Group,
  Grid,
  Col
} from 'amazeui-touch';

const GridExample = React.createClass({
  render() {
    return (
      <Container
        {...this.props}
        className={this.props.className + ' ks-grid'}
      >
        <h2>基本演示</h2>

        <Group
          header="演示说明"
        >
          <p>为方便查看效果，添加了线框边距，实际使用时没有：</p>
          <ul>
            <li>Grid: 虚线框</li>
            <li>Col: 灰色线框</li>
          </ul>
        </Group>

        <Group
          header="基本网格"
          footer="列分布在一行上"
        >
          <Grid>
            <Col>col</Col>
            <Col>col</Col>
          </Grid>
        </Group>

        <Group
          header="指定列所占比例"
          footer="在 Col 上通过 cols 属性指定列所占比例（总数为 6）"
        >
          <Grid>
            <Col cols={4}>cols: 4</Col>
            <Col cols={2}>cols: 2</Col>
          </Grid>
        </Group>

        <Group
          header={`换行：wrap="wrap"`}
          footer="通过 Grid 的 wrap 属性设置列是否换行"
        >
          <Grid
            wrap="wrap"
          >
            <Col cols={4}>cols: 4</Col>
            <Col cols={2}>cols: 2</Col>
            <Col cols={2}>cols: 2</Col>
            <Col cols={4}>cols: 4</Col>
          </Grid>
        </Group>

        <Group
          header={`换行：wrap="wrap-reverse"`}
          footer="没有反转时的顺序为 5-1-2"
        >
          <Grid
            wrap="wrap-reverse"
          >
            <Col cols={5}>cols: 5</Col>
            <Col cols={1}>cols: 1</Col>
            <Col cols={2}>cols: 2</Col>
          </Grid>
        </Group>

        <Group
          header="等分网格"
          footer="超出等分数的将分布到下一行（上面的示例中为 4 等分）"
        >
          <Grid avg={4}>
            <Col>col</Col>
            <Col>col</Col>
            <Col>col</Col>
            <Col>col</Col>
            <Col>col</Col>
            <Col>col</Col>
            <Col>col</Col>
            <Col>col</Col>
            <Col>col</Col>
          </Grid>
        </Group>

        <Group
          header="收缩的列"
          footer="Col 指定 shrink 属性后自动收缩到内容所占宽"
        >
          <Grid>
            <Col shrink>Shrink me</Col>
            <Col>col</Col>
          </Grid>
        </Group>

        <Group
          header="列偏移"
        >
          <Grid>
            <Col cols={3} offset={1}>cols: 3, offset: 1</Col>
          </Grid>
        </Group>


        <h2>网格嵌套</h2>

        <Group>
          <Grid>
            <Col>
              <Grid>
                <Col>col</Col>
                <Col>col</Col>
              </Grid>
            </Col>
            <Col>
              <Grid>
                <Col>col</Col>
                <Col>col</Col>
              </Grid>
            </Col>
          </Grid>
        </Group>

        <h2>不足 6 时对齐方式</h2>

        <Group
          header="默认：左对齐"
        >
          <Grid>
            <Col cols={2}>cols: 2</Col>
            <Col cols={2}>cols: 2</Col>
          </Grid>
        </Group>

        <Group
          header="居中对齐"
        >
          <Grid align="center">
            <Col cols={2}>cols: 2</Col>
            <Col cols={2}>cols: 2</Col>
          </Grid>
        </Group>

        <Group
          header="右对齐"
        >
          <Grid align="right">
            <Col cols={2}>cols: 2</Col>
            <Col cols={2}>cols: 2</Col>
          </Grid>
        </Group>

        <Group
          header="左右分布"
          footer="justify-content: space-between"
        >
          <Grid align="between">
            <Col cols={2}>cols: 2</Col>
            <Col cols={2}>cols: 2</Col>
          </Grid>
        </Group>

        <Group
          header="平均分布"
        >
          <Grid align="around">
            <Col cols={2}>cols: 2</Col>
            <Col cols={2}>cols: 2</Col>
          </Grid>
        </Group>
      </Container>
    );
  }
});

export default GridExample;
