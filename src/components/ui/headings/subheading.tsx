import { FC } from 'react';

export interface Subheading {
	text: string;
	className?: string;
}

const Subheading: FC<Subheading> = ({ text, className }) => {
	return <h4 className={className}>{text}</h4>;
};

export default Subheading;
