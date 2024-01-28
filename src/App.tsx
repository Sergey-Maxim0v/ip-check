import "./assets/styles/index.scss";
import Page from "./components/Page";
import { YMaps } from "@pbe/react-yandex-maps";

const App = () => {
  return (
    <YMaps
      query={{ lang: "ru_RU", apikey: "0006a148-e60c-4cfa-9083-f37045dd9702" }}
    >
      <Page />
    </YMaps>
  );
};

export default App;
