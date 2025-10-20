import { useState, type ChangeEvent, type FormEvent } from "react";
import { countries } from "../../data/countries";
import type { SearchType } from "../../types";
import Alert from "../Alert";

type Props = {
  fetchWeather: (search: SearchType) => Promise<void>;
};

export default function Form({ fetchWeather }: Props) {
  const [search, setSearch] = useState<SearchType>({
    city: "",
    country: "",
  });
  const [alert, setAlert] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    if (Object.values(search).includes("")) {
      setAlert("Empty form");
      return;
    }
    fetchWeather(search);
    setAlert("");
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
      {alert && <Alert>{alert}</Alert>}
      <div className="flex flex-col gap-2">
        <label htmlFor="city">City:</label>
        <input
          id="city"
          type="text"
          name="city"
          placeholder="City"
          className="p-4 bg-transparent border-2 border-solid border-white rounded-lg text-white font-normal placeholder:text-white "
          value={search.city}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="country">Country</label>
        <select
          id="country"
          className="p-4 bg-transparent border-2 border-solid border-white rounded-lg text-white font-normal placeholder:text-white"
          value={search.country}
          onChange={handleChange}
        >
          <option value={""}>Select a country</option>
          {countries.map((country) => (
            <option key={`select-${country.code}`} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <input
        type="submit"
        value={"Search Weather"}
        className="px-4 py-2 text-lg text-white font-bold uppercase transition-colors bg-blue-600 hover:bg-blue-800 rounded-lg cursor-pointer"
      />
    </form>
  );
}
