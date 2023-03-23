import { FC } from 'react';
import { Badge } from './badge.types';
import styles from './badge.module.css';
import clsx from 'clsx';

const Badge: FC<Badge> = ({ text, className }) => {
	return <span className={clsx(styles.badge, className)}>{text}</span>;
};

export default Badge;
