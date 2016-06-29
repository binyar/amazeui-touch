import marked from 'marked';
import Prism from './Prism';

let renderer = new marked.Renderer();
renderer.code = function(code, lang) {
  return Prism.amtHighlight({
    text: code,
    language: lang,
    ln: 1
  });
};

export default {
  renderer: renderer,
  gfm: true
};
