import React from 'react';
import ReactPlayer from 'react-player';
import styles from './Video.module.css';


const sizeHandler = (ref: any) => {
  return ref / 100 * 56.25;
};

export default function Video({ url }: any) {
  const ref: any = React.createRef();

  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    function hightSetter() {
      if (ref.current) {
        const refWidth = sizeHandler(ref.current.clientWidth);
        setHeight(refWidth);
      }
    }
    window.addEventListener('resize', hightSetter);
    return () => { window.removeEventListener('resize', hightSetter); };
  }, [ref]);

  React.useEffect(() => {
    if (ref.current) {
      const refWidth = sizeHandler(ref.current.clientWidth);
      setHeight(refWidth);
    }
  }, []);

  return (
    <div ref={ref} className={styles['player-wrapper']}>
      <ReactPlayer width="100%"
        height={`${height}px`} controls url={url} playing={true} />
    </div>
  );
}
