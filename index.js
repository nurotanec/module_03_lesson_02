'use strict';

{
  const writeToParagraph = (text, paragraph) => {
    paragraph.textContent = text;
  };

  const init = () => {
    const container = document.querySelector('.container');

    const input = document.createElement('input');
    const paragraph = document.createElement('div');
    paragraph.style.wordBreak = 'break-all';

    container.append(input);
    container.append(paragraph);

    container.addEventListener('keyup', e => {
      const text = e.target.value;
      setTimeout(writeToParagraph, 2000, text, paragraph);
    });
  };

  init();
}
