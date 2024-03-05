"use client";
import "leaflet/dist/leaflet.css";
import Link from "next/link";
import L from "leaflet";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerIcon from "../node_modules/leaflet/dist/images/marker-icon.png";
import MarkerShadow from "../node_modules/leaflet/dist/images/marker-shadow.png";

function OpenStreetMap() {
  const position = [-7.58464, 110.20227];
  return (
    <MapContainer
      className="h-full w-full"
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        icon={
          new L.Icon({
            iconUrl: MarkerIcon.src,
            iconRetinaUrl: MarkerIcon.src,
            iconSize: [25, 41],
            iconAnchor: [12.5, 41],
            popupAnchor: [0, -41],
            shadowUrl: MarkerShadow.src,
            shadowSize: [41, 41],
          })
        }
        position={position}
      >
        <Popup>
          <Link
            rel="noopener"
            target="_blank"
            href="https://www.google.com/maps/place/7%C2%B035'04.6%22S+110%C2%B012'07.5%22E/@-7.584607,110.2014423,19z/data=!3m1!4b1!4m12!1m7!3m6!1s0x2e7a8d7d5a072ef7:0xbfbf3b9cb724b14c!2sBOROBUDUR+GADGET!8m2!3d-7.5846603!4d110.2019964!16s%2Fg%2F11p3m5vt7b!3m3!8m2!3d-7.584607!4d110.202086?entry=ttu"
          >
            <Button variant="link" className="gap-1">
              VINDDRONE
              <ArrowUpRight size={15} />
            </Button>
          </Link>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default OpenStreetMap;
