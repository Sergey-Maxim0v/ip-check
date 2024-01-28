import { memo } from "react";

import styles from "./styles.module.scss";
import { Map, Placemark } from "@pbe/react-yandex-maps";

export interface IInfoMap {
  coordinates: [number, number];
  ip?: string | boolean;
}

const InfoMap = ({ coordinates, ip }: IInfoMap) => {
  const mapState = {
    center: coordinates,
    zoom: 12,
    controls: ["zoomControl", "fullscreenControl"],
  };

  return (
    <Map
      state={mapState}
      className={styles.map}
      modules={["control.ZoomControl", "control.FullscreenControl"]}
    >
      {ip && (
        <Placemark
          modules={["geoObject.addon.balloon"]}
          geometry={coordinates}
          properties={{
            balloonContentBody: ip,
          }}
        />
      )}
    </Map>
  );
};

export default memo(InfoMap);
