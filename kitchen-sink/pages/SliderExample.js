import React from 'react';
import {
  Container,
  Group,
  Button,
  Slider,
} from 'amazeui-touch';

const onAction = function(index, direction) {
  console.log('激活的幻灯片编号：', index, '，滚动方向：', direction);
};

const sliderIntance = (
  <Slider
    onAction={onAction}
  >
    <Slider.Item>
      <img
        src="http://s.amazeui.org/media/i/demos/bing-1.jpg" />
    </Slider.Item>
    <Slider.Item><img
      src="http://s.amazeui.org/media/i/demos/bing-2.jpg" /></Slider.Item>
    <Slider.Item>
      <img
        src="http://s.amazeui.org/media/i/demos/bing-3.jpg" /></Slider.Item>
    <Slider.Item>
      <img
        src="http://s.amazeui.org/media/i/demos/bing-4.jpg" /></Slider.Item>
  </Slider>
);

const data = [
  {
    thumb: 'http://s.amazeui.org/media/i/demos/bing-1.jpg',
    img: 'http://s.amazeui.org/media/i/demos/bing-1.jpg'
  },
  {
    thumb: 'http://s.amazeui.org/media/i/demos/bing-2.jpg',
    img: 'http://s.amazeui.org/media/i/demos/bing-2.jpg'
  },
  {
    thumb: 'http://s.amazeui.org/media/i/demos/bing-3.jpg',
    img: 'http://s.amazeui.org/media/i/demos/bing-3.jpg'
  },
  {
    thumb: 'http://s.amazeui.org/media/i/demos/bing-4.jpg',
    img: 'http://s.amazeui.org/media/i/demos/bing-4.jpg'
  }];

const data2 = [
  {
    img: 'http://s.amazeui.org/media/i/demos/bing-1.jpg',
    desc: '这是标题标题标题标题标题标题标题0'
  },
  {
    img: 'http://s.amazeui.org/media/i/demos/bing-2.jpg',
    desc: '这是标题标题标题标题标题标题标题1'
  },
  {
    img: 'http://s.amazeui.org/media/i/demos/bing-3.jpg',
    desc: '这是标题标题标题标题标题标题标题2'
  },
  {
    img: 'http://s.amazeui.org/media/i/demos/bing-4.jpg',
    desc: '这是标题标题标题标题标题标题标题3'
  }
];

const sliderCaption = (
  <Slider>
    {data2.map(function(item, i) {
      return (
        <Slider.Item
          key={i}
        >
          <img src={item.img} />
          <div className="slider-caption">
            {item.desc}
          </div>
        </Slider.Item>
      );
    })}
  </Slider>
);


const sliderThumbs = (
  <Slider
    controls={false}
  >
    {data.map(function(item, i) {
      return (
        <Slider.Item
          key={i}
          thumbnail={item.thumb}
        >
          <img src={item.img} />
        </Slider.Item>
      );
    })}
  </Slider>
);

const SliderExample = React.createClass({
  render() {
    return (
      <Container {...this.props}>
        <Group
          header="默认"
          noPadded
        >
          {sliderIntance}
        </Group>

        <Group
          header="缩略图"
          noPadded
        >
          {sliderThumbs}
        </Group>

        <Group
          header="标题"
          noPadded
        >
          {sliderCaption}
        </Group>
      </Container>
    );
  }
});

export default SliderExample;
