import React from 'react';
import styles from './Eyebrow.module.css';

/* Reusable Eyebrow label component */
const Eyebrow = ({ children, className = '', variant = '', center = false, as: Tag = 'span' }) => {
  const classes = [styles.eyebrow];
  if (variant && styles[variant]) classes.push(styles[variant]);
  if (center) classes.push(styles.center);
  if (className) classes.push(className);
  return <Tag className={classes.join(' ')}>{children}</Tag>;
};

export default Eyebrow;
