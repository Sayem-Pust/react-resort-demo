import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
function Error() {
    return (
      <Hero>
        <Banner
          tittle="404"
          subtitle="page not found"
        >
          <Link to="/" className="btn-primary">
            return hoom
          </Link>
        </Banner>
      </Hero>
    );
}
export default Error;