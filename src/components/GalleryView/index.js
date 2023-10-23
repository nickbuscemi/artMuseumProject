import React from "react";
import { useParams, Route } from 'react-router-dom'
import ArtImageTile from "../ArtImageTile/ArtImageTile";
import ArtDescription from "../ArtDescription/ArtDescription";
import { Container, Row } from 'react-bootstrap';



function GalleryView({ galleries }) {
    const { galleryId } = useParams();
    const gallery = galleries.find(g => g.id.toString() === galleryId)
    console.log(gallery);
    return (
        <Container>
            <h1>{gallery.name}</h1>

            <div className="gallery-description">
                <p>{gallery.labeltext}</p>
            </div>

            <Route exact path={`/galleries/${galleryId}`}>
                <div className="gallery-contents">
                    <Row>
                        {gallery.objects.map(artwork => (
                            <ArtImageTile key={artwork.id} art={artwork} galleryId={galleryId} />
                        ))}
                    </Row>
                </div>
            </Route>
            <Route path={`/galleries/:galleryId/art/:artId`}>
                <ArtDescription galleries={galleries} />
            </Route>
        </Container>
    );
}


export default GalleryView;