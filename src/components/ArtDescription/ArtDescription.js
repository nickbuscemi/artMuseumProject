import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ArtDescription({ galleries }) {
    const { galleryId, artId } = useParams();
    const gallery = galleries.find(g => g.id.toString() === galleryId);
    const art = gallery.objects.find(a => a.id.toString() === artId);

    if (!art) return <h2>Art Not Found</h2>

    return (
        <div>
            <Link to={`/galleries/${galleryId}`}>Back to {gallery.name}</Link>
            <h2><a href={art.url} target="_blank" rel="noopener noreferrer">{art.title}</a></h2>

            <div>
                {art.images.map(image => (
                    <img key={image.imageid} src={image.baseimageurl} alt={art.title} />
                ))}
            </div>

            <p>{art.description}</p>
            <p><strong>Credit:</strong> {art.creditline}</p>
            <p><strong>Technique:</strong> {art.technique}</p>
        </div>
    );
}

export default ArtDescription;