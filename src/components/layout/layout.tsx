import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<main>
			<section>
				<div className="container">{children}</div>
			</section>
		</main>
	);
};

export default Layout;
