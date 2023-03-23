import { Product } from '@/shared/types/product';
import { PER_PAGE } from '@/shared/utils/consts';
import { paginate } from '@/shared/utils/paginate';
import { FC, useState } from 'react';
import Heading from '../headings/heading';
import Pagination from '../pagination/pagination';
import Card from './card/card';
import styles from './catalog.module.css';

interface CatalogProps {
	products: Product[];
}

const Catalog: FC<CatalogProps> = ({ products }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const paginatedProducts = paginate(products, currentPage, PER_PAGE);

	return (
		<>
			<Heading
				title="Каталог"
				className={styles.heading}
			/>
			<ul className={styles.list}>
				{products.length > 0 &&
					paginatedProducts.map((product) => (
						<Card
							key={product.id}
							product={product}
						/>
					))}
			</ul>
			<Pagination
				items={products}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</>
	);
};

export default Catalog;
