import { ImageGalleryItem } from "components/ImageGalleryItem";

import { ImageGalleryList } from "./ImageGallery.styled";

export const ImageGallery = ({ images }) => {
    return (
        <ImageGalleryList>
            {images &&
                images.map(({ id, webformatURL, largeImageURL, tags }) => {
                    return (
                        <ImageGalleryItem
                            key={id}
                            webformatURL={webformatURL}
                            alt={tags}
                        />
                    )
                })}
        </ImageGalleryList>
    )

}