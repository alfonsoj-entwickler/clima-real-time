import Form from "./components/Form";
import useWeather from "./hooks/useWeather";

function App() {
  const { fetchWeather } = useWeather();

  return (
    <div className="flex flex-col gap-10 justify-center items-center text-white">
      <h1 className="mt-10 text-6xl  text-center">Weather real time</h1>
      <div className="sm:grid grid-cols-2 gap-10 max-w-7xl w-full mx-auto mt-10">
        <Form fetchWeather={fetchWeather} />
        <div>2</div>
      </div>
    </div>
  );
}

export default App;
