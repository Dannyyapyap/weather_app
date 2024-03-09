import { Suspense } from "react";
import Spinner from "./components/animations";
import WeatherApplication from "./pages";

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div id="preloader">
            <Spinner />
          </div>
        }
      >
        <WeatherApplication />
      </Suspense>
    </>
  );
}

export default App;
