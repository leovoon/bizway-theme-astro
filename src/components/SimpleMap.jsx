import GoogleMapReact from "google-map-react";

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 2.9300191,
      lng: 101.628153,
    },
    zoom: 11,
  };
  return (
    <div className="container">
      <div style={{ height: "400px", width: "100%", maxWidth: "500px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        />
      </div>
    </div>
  );
}
