import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { Key } from 'react';

async function getPhotos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}


async function PhotoGrid() {
    const photos = await getPhotos();

    if (!photos) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <div className="grid-container">
                {photos.map((photo: { id: Key | null | undefined; thumbnailUrl: string | StaticImport; }) => (
                    <div key={photo.id} className="grid-item">
                        <Image
                            src={photo.thumbnailUrl}
                            alt={`Photo ${photo.id}`}
                            width={200}
                            height={200}
                        />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default PhotoGrid;
