import { memo } from "react";

import styles from "./styles.module.scss";
import { Map, Placemark } from "@pbe/react-yandex-maps";

export interface IInfoMap {
  coordinates: [number, number];
  ip?: string | boolean;
}

const InfoMap = ({ coordinates, ip }: IInfoMap) => {
  const mapState = { center: coordinates, zoom: 12 };

  return (
    <Map state={mapState} className={styles.map}>
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
