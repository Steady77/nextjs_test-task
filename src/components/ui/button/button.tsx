import { FC } from 'react';
import clsx from 'clsx';
import { ButtonProps } from './button.types';
import styles from './button.module.css';
import Link from 'next/link';

const Button: FC<ButtonProps> = ({
	children,
	color,
	display,
	size,
	href,
	...rest
}) => {
	return (
		<Link
			href={href ? href : ''}
			className={styles.link}
		>
			<button
				className={clsx(styles.button, {
					[styles.success]: color === 'success',
					[styles.danger]: color === 'danger',
					[styles.block]: display === 'block',
					[styles.large]: size === 'large',
				})}
				{...rest}
			>
				{children}
			</button>
		</Link>
	);
};

export default Button;
