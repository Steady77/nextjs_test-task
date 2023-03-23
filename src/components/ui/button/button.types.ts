import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	color?: 'default' | 'success' | 'danger';
	size?: 'standard' | 'large';
	display?: 'block' | 'inline';
	href?: string;
}
