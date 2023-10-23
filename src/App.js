
/*import React from 'react';
import { Route, Switch } from 'react-router-dom';
import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <div className="page-wrapper">
            <GalleryNavigation galleries={harvardArt.records} />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/galleries/:galleryId">
                <GalleryView galleries={harvardArt.records} />
              </Route>
              <Route path="*">
                <NotFoundPage />
              </Route>
            </Switch>
        </div>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <h2>Harvard Art Museum</h2>
      <p>Look, but Don't Touch. Please select a Gallery in the navigation bar</p>
    </div>
  );
}

function NotFoundPage() {
  return <h2>Page Not Found</h2>;
}

export default App;*/


import React from 'react';
import { Route, Switch } from 'react-router-dom';
import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

console.log(harvardArt);

function App() {
  return (
    <Container className="App">
      <Row>
        <Col>
          <div className="page-wrapper">
            <GalleryNavigation galleries={harvardArt.records} />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/galleries/:galleryId">
                <GalleryView galleries={harvardArt.records} />
              </Route>
              <Route path="*">
                <NotFoundPage />
              </Route>
            </Switch>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

function HomePage() {
  return (
    <div>
      <h2>Harvard Art Museum</h2>
      <p>Look, but Don't Touch. Please select a Gallery in the navigation bar</p>
    </div>
  );
}

function NotFoundPage() {
  return <h2>Page Not Found</h2>;
}

export default App;
