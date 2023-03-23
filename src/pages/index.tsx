import Home, { HomeProps } from '@/components/screens/home';
import { ProductService } from '@/services/product.service';
import { GetStaticProps, NextPage } from 'next';

const HomePage: NextPage<HomeProps> = ({ products }) => {
	return <Home products={products} />;
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const products = await ProductService.getAll();

		return {
			props: {
				products,
			},
		};
	} catch (error) {
		return {
			props: {
				products: [],
			},
		};
	}
};

export default HomePage;
