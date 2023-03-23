import { Product } from '@/shared/types/product';
import { PER_PAGE } from '@/shared/utils/consts';
import { Dispatch, FC, SetStateAction } from 'react';
import Button from '../button/button';
import styles from './pagination.module.css';

interface PaginationProps {
	items: Product[];
	currentPage: number;
	setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Pagination: FC<PaginationProps> = ({
	items,
	currentPage,
	setCurrentPage,
}) => {
	const pagesCount = Math.ceil(items.length / PER_PAGE);

	if (pagesCount === 1) return null;

	return (
		<div className={styles.pagination}>
			<p>
				Страница {currentPage} из {pagesCount}
			</p>
			<Button
				color="default"
				size="standard"
				onClick={() => setCurrentPage((prev) => prev - 1)}
				disabled={currentPage === 1}
			>
				Назад
			</Button>
			<Button
				color="default"
				size="standard"
				onClick={() => setCurrentPage((prev) => prev + 1)}
				disabled={currentPage === pagesCount}
			>
				Вперед
			</Button>
		</div>
	);
};

export default Pagination;
