import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

export default function MapComponent({ markers }) {
  return (
    <MapContainer
      center={[-2.5, 117.5]}
      zoom={5}
      scrollWheelZoom={false}
      className="w-full h-full"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers?.map((m, i) => (
        <Marker key={i} position={m.coords}>
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
