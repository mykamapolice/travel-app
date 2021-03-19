import React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import styles from './Footer.module.css';

const Footer = function() {
  return <div className={styles.footer}><span>2021</span>
    <a className={styles.footer__authorLink} style={{ color: "#241624" }} href='https://github.com/vladstepway'target='_blank'> <GithubOutlined /> Vladislav</a>
    <a className={styles.footer__authorLink} style={{ color: "#241624" }}  href='https://github.com/mykamapolice' target='_blank'> <GithubOutlined /> Ilya</a>
    <a className={styles.footer__authorLink} style={{ color: "#241624" }}  href='https://github.com/SixStringer91' target='_blank'> <GithubOutlined /> Danik</a>
    <a className={styles.footer__authorLink} style={{ color: "#241624" }}  href='https://github.com/svdfsdev' target='_blank'> <GithubOutlined /> Vasiliy</a>
    <img
      style={{ height: "2rem" }}
      className={styles.imgFooter}
      src="https://rs.school/images/rs_school_js.svg"
      alt="rs-logo"
    />
</div>;
};

export default Footer;
