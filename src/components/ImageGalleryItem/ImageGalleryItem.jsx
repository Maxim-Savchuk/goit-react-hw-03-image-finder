import { GalleryItem, GalleryItemImage } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({ webformatURL, tag }) => {
    return (
        <GalleryItem >
            <GalleryItemImage src={webformatURL} alt={tag} />
        </GalleryItem>
    )
}