import React, { useState, useEffect } from 'react';

// Määritellään City-tyyppi
interface City {
  name: string;
  timezone: string; // Käytetään vain aikavyöhyketunnistetta
}

// Kaikki tärkeimmät aikavyöhykkeet (IANA-aikavyöhyketunnisteet)
const cities: City[] = [
  { name: 'Helsinki', timezone: 'Europe/Helsinki' },
  { name: 'New York', timezone: 'America/New_York' },
  { name: 'Tokyo', timezone: 'Asia/Tokyo' },
  { name: 'London', timezone: 'Europe/London' },
  { name: 'Sydney', timezone: 'Australia/Sydney' },
  { name: 'Paris', timezone: 'Europe/Paris' },
  { name: 'Moscow', timezone: 'Europe/Moscow' },
  { name: 'Dubai', timezone: 'Asia/Dubai' },
  { name: 'Los Angeles', timezone: 'America/Los_Angeles' },
  { name: 'Mexico City', timezone: 'America/Mexico_City' },
  { name: 'Cape Town', timezone: 'Africa/Johannesburg' },
  { name: 'Sao Paulo', timezone: 'America/Sao_Paulo' },
  { name: 'Shanghai', timezone: 'Asia/Shanghai' },
  { name: 'Hong Kong', timezone: 'Asia/Hong_Kong' },
  { name: 'Singapore', timezone: 'Asia/Singapore' },
  { name: 'Seoul', timezone: 'Asia/Seoul' },
  { name: 'Istanbul', timezone: 'Europe/Istanbul' },
  { name: 'Berlin', timezone: 'Europe/Berlin' },
  { name: 'Rome', timezone: 'Europe/Rome' },
  { name: 'Jakarta', timezone: 'Asia/Jakarta' },
  { name: 'Buenos Aires', timezone: 'America/Argentina/Buenos_Aires' },
  { name: 'Kolkata', timezone: 'Asia/Kolkata' },
  { name: 'Cairo', timezone: 'Africa/Cairo' },
  { name: 'Karachi', timezone: 'Asia/Karachi' },
  { name: 'Chicago', timezone: 'America/Chicago' },
  { name: 'Toronto', timezone: 'America/Toronto' },
  { name: 'Vancouver', timezone: 'America/Vancouver' },
  { name: 'Beijing', timezone: 'Asia/Shanghai' }, // Käytetään samaa aikavyöhykettä kuin Shanghai
];

function WorldClock() {
  const [selectedCity, setSelectedCity] = useState<City>(cities[0]);
  const [time, setTime] = useState<Date>(new Date());

  // Päivitetään kellonaika kerran sekunnissa
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const cityTime = (city: City): string => {
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: city.timezone,
    };

    const formatter = new Intl.DateTimeFormat('en-GB', options);
    return formatter.format(time);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white">
      <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">World Clock</h1>
      <select
        className="p-3 mb-8 mt-8 bg-white text-black rounded-lg shadow-lg text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
        value={selectedCity.name}
        onChange={(e) =>
          setSelectedCity(cities.find((city) => city.name === e.target.value) as City)
        }
      >
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
      <p className="text-6xl font-mono font-bold mb-4 animate-pulse transition-all duration-1000 ease-in-out drop-shadow-xl">
        {cityTime(selectedCity)}
      </p>
    </div>
  );
}

export default WorldClock;










