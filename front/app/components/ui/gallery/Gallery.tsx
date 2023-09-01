import { FC } from 'react'
import { IGallaryItem } from './gallery.interface'
import GalleryItem from './GalleryItem'
import styles from './Gallery.module.scss'

const Gallery: FC<{ items: IGallaryItem[] }> = ({ items }) => {
	return (
		<div className={styles.gallery}>
			{items.map((item) => (
				<GalleryItem
					item={item}
					key={item.name}
					variant="vertical"
				/>
			))}
		</div>
	)
}

export default Gallery
