import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';

interface Meta {
	title: string;
	description?: string;
}

const Meta: FC<PropsWithChildren<Meta>> = ({
	title,
	description,
	children,
}) => {
	return (
		<>
			<Head>
				<title itemProp="headline">{title}</title>
				{description && (
					<meta
						itemProp="description"
						name="description"
						content={description}
					/>
				)}
			</Head>
			{children}
		</>
	);
};

export default Meta;
