import { Product } from '@/shared/types/product';
import { FC } from 'react';
import Layout from '../layout/layout';
import Catalog from '../ui/catalog/catalog';
import Meta from '../ui/meta';

export interface HomeProps {
	products: Product[];
}

const Home: FC<HomeProps> = ({ products }) => {
	return (
		<Meta title="Home">
			<Layout>
				<Catalog products={products} />
			</Layout>
		</Meta>
	);
};

export default Home;
