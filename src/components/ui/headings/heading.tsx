import { FC } from 'react';

interface Heading {
	title: string;
	className?: string;
}

const Heading: FC<Heading> = ({ title, className }) => {
	return <h1 className={className}>{title}</h1>;
};

export default Heading;
