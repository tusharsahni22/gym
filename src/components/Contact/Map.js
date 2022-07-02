/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const Map = () => (
  <div css={styles} className="mapouter">
    <iframe
      id="gmap_canvas"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.0450026892336!2d77.37375101503758!3d28.688300382395894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfa5c42ee4661%3A0x2ffccb6fab1d385c!2sAmit%20fitness%20(Unisex%20Gym)!5e0!3m2!1sen!2sin!4v1656786814743!5m2!1sen!2sin"
      
    ></iframe>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 50%;
  min-height: 60vh;
  iframe {
    width: 100%;
    height: 100%;
    display: block;
    border: none;
  }
  @media (max-width: 1200px) {
    max-width: 100%;
    height: 60vh;
  }
`;

export default Map;
