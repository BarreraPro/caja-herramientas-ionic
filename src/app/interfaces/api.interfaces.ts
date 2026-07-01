export interface GenderPrediction {
  count: number;
  name: string;
  gender: 'male' | 'female' | null;
  probability: number;
}

export interface AgePrediction {
  count: number;
  name: string;
  age: number | null;
}

export interface University {
  name: string;
  domains: string[];
  web_pages: string[];
  country: string;
  alpha_two_code?: string;
  'state-province'?: string | null;
}

export interface CurrentWeather {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
  is_day: number;
  time: string;
}

export interface WeatherResponse {
  latitude: number;
  longitude: number;
  timezone: string;
  current_weather: CurrentWeather;
}

export interface PokemonResponse {
  name: string;
  base_experience: number;
  abilities: Array<{
    ability: {
      name: string;
      url: string;
    };
  }>;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string | null;
      };
    };
  };
  cries: {
    latest: string | null;
    legacy?: string | null;
  };
}

export interface WordPressPost {
  id: number;
  link: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
}
