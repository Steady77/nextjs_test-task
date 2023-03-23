import { axiosApi } from '@/config/api';
import { Product } from '@/shared/types/product';
import { getProductsUrl } from '@/shared/utils/url';

export const ProductService = {
	async getAll() {
		try {
			const { data } = await axiosApi.get<Product[]>(getProductsUrl());

			return data;
		} catch (error) {
			console.log(error);
		}
	},
};
