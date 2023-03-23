import { Product } from '../types/product';

export const paginate = (
	items: Product[],
	pageNumber: number,
	pageSize: number,
) => {
	const startIndex = (pageNumber - 1) * pageSize;
	return items.slice(startIndex, startIndex + pageSize);
};
