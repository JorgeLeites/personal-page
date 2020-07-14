import React, { PropsWithChildren } from 'react';

import './html_tag.scss';

interface Props {
  tagName: string;
  fullPage?: boolean;
}

export default function HtmlTag(props: PropsWithChildren<Props>) {
  const { tagName, fullPage, children } = props;

  const getClosingTagClass = () => {
    const classes = ['html-tag'];

    if (fullPage) {
      classes.push('closing-tag');
    }

    return classes.join(' ');
  };

  return (
    <div>
      <div className="html-tag">{`<${tagName}>`}</div>
      <div className="ml-4">{children}</div>
      <div className={getClosingTagClass()}>{`</${tagName}>`}</div>
    </div>
  );
}
