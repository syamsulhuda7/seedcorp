import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "/assets/markerseed.svg",
  shadowUrl: "/leaflet/marker-shadow.png",
});

const icon = new L.Icon({
  iconUrl: "/assets/markerseed.svg",
  shadowUrl: "/leaflet/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export default function MapComponent({ markers }) {
  return (
    <MapContainer
      center={[-2.5, 117.5]}
      zoom={5}
      scrollWheelZoom={false}
      className="w-full h-full z-0"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers?.map((m, i) => (
        <Marker icon={icon} key={i} position={m.coords}>
          <Popup>
            <strong>{m.name}</strong>
            <br />
            {m.region}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
