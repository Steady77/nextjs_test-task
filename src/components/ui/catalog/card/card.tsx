import { Product } from '@/shared/types/product';
import Image from 'next/image';
import { FC } from 'react';
import Badge from '../../badge/badge';
import Heading from '../../headings/heading';
import Subheading from '../../headings/subheading';
import styles from './card.module.css';

interface CardProps {
	product: Product;
}

const Card: FC<CardProps> = ({ product }) => {
	const { badge, brand, imageUrl, name } = product;

	return (
		<li className={styles.card}>
			<Image
				className={styles.image}
				src={imageUrl}
				alt={name}
				fill
				priority
			/>
			<Heading
				title={name}
				className={styles.heading}
			/>
			{badge && (
				<Badge
					text={badge}
					className={styles.badge}
				/>
			)}
			<Subheading
				text={brand}
				className={styles.brand}
			/>
		</li>
	);
};

export default Card;
