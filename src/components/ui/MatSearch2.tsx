import * as React from "react";
import Autocomplete, { autocompleteClasses } from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import {
  createTheme,
  useTheme,
  ThemeProvider,
  Theme,
} from "@mui/material/styles";

// Theme.ts
const customTheme = (outerTheme: Theme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiAutocomplete: {
        defaultProps: {
          renderOption: (props, option, state, ownerState) => (
            <Box
              sx={{
                borderRadius: "8px",
                margin: "5px",
                [`&.${autocompleteClasses.option}`]: {
                  padding: "8px",
                },
              }}
              component="li"
              {...props}
            >
              {ownerState.getOptionLabel(option)}
            </Box>
          ),
        },
      },
    },
  });

export default function GloballyCustomizedOptions() {
  // useTheme is used to determine the dark or light mode of the docs to maintain the Autocomplete component default styles.
  const outerTheme = useTheme();

  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <Stack spacing={5} sx={{ width: 300 }}>
        <MovieSelect />
      </Stack>
    </ThemeProvider>
  );
}

function MovieSelect() {
  return (
    <Autocomplete
      options={games}
      sx={{
        color: "white",
        ".MuiChip-root .green": {
          color: "white",
        },
      }}
      getOptionLabel={(option: Games) =>
        `${option.name} (${option.releaseDate})`
      }
      id="movie-customized-option-demo"
      disableCloseOnSelect
      renderInput={(params) => (
        <TextField {...params} label="Choose a movie" variant="standard" />
      )}
    />
  );
}

// function CountrySelect() {
//   return (
//     <Autocomplete
//       id="country-customized-option-demo"
//       options={countries}
//       disableCloseOnSelect
//       getOptionLabel={(option: CountryType) =>
//         `${option.label} (${option.code}) +${option.phone}`
//       }
//       renderInput={(params) => <TextField {...params} label="Choose a country" />}
//     />
//   );
// }

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
interface Games {
  name: string;
  releaseDate: string;
}
const games = [
  { name: "The Last of Us Part II", releaseDate: "2020" },
  { name: "God of War", releaseDate: "2018" },
  { name: "Spider-Man", releaseDate: "2018" },
  { name: "Halo 5: Guardians", releaseDate: "2015" },
  { name: "Gears 5", releaseDate: "2019" },
  { name: "Forza Horizon 4", releaseDate: "2018" },
  { name: "The Legend of Zelda: Breath of the Wild", releaseDate: "2017" },
  { name: "Animal Crossing: New Horizons", releaseDate: "2020" },
  { name: "Super Mario Odyssey", releaseDate: "2017" },
  // Add more games below
  { name: "Red Dead Redemption 2", releaseDate: "2018" },
  { name: "Call of Duty: Modern Warfare", releaseDate: "2019" },
  { name: "Cyberpunk 2077", releaseDate: "2020" },
  { name: "Assassin's Creed Odyssey", releaseDate: "2018" },
  { name: "FIFA 21", releaseDate: "2020" },
  { name: "Minecraft", releaseDate: "2011" },
  { name: "Grand Theft Auto V", releaseDate: "2013" },
  { name: "The Witcher 3: Wild Hunt", releaseDate: "2015" },
  { name: "Overwatch", releaseDate: "2016" },
  // Add more games
  { name: "Uncharted 4: A Thief's End", releaseDate: "2016" },
  { name: "Destiny 2", releaseDate: "2017" },
  { name: "Pokémon Sword and Shield", releaseDate: "2019" },
  { name: "Fortnite", releaseDate: "2017" },
  { name: "League of Legends", releaseDate: "2009" },
  { name: "DOTA 2", releaseDate: "2013" },
  { name: "Counter-Strike: Global Offensive", releaseDate: "2012" },
  { name: "Among Us", releaseDate: "2018" },
  // Add more games
  { name: "Mass Effect: Andromeda", releaseDate: "2017" },
  { name: "Battlefield 1", releaseDate: "2016" },
  { name: "Star Wars Jedi: Fallen Order", releaseDate: "2019" },
  { name: "Diablo III", releaseDate: "2012" },
  { name: "The Elder Scrolls V: Skyrim", releaseDate: "2011" },
  { name: "Borderlands 3", releaseDate: "2019" },
  { name: "Monster Hunter: World", releaseDate: "2018" },
  { name: "Sea of Thieves", releaseDate: "2018" },
  // Add more games
  { name: "Nier: Automata", releaseDate: "2017" },
  { name: "Super Smash Bros. Ultimate", releaseDate: "2018" },
  { name: "Death Stranding", releaseDate: "2019" },
  { name: "Resident Evil 7: Biohazard", releaseDate: "2017" },
  { name: "Final Fantasy XV", releaseDate: "2016" },
  { name: "Horizon Zero Dawn", releaseDate: "2017" },
  { name: "DOOM Eternal", releaseDate: "2020" },
  { name: "The Division 2", releaseDate: "2019" },
  //
  { name: "Ghost of Tsushima", releaseDate: "2020" },
  { name: "Deathloop", releaseDate: "2022" },
  { name: "Ratchet & Clank: Rift Apart", releaseDate: "2021" },
  { name: "Resident Evil Village", releaseDate: "2021" },
  { name: "Returnal", releaseDate: "2021" },
  { name: "Demon's Souls", releaseDate: "2020" },
  { name: "Marvel's Avengers", releaseDate: "2020" },
  { name: "Watch Dogs: Legion", releaseDate: "2020" },
  { name: "Sackboy: A Big Adventure", releaseDate: "2020" },
  { name: "Yakuza: Like a Dragon", releaseDate: "2020" },
  //
  { name: "Devil May Cry 5", releaseDate: "2019" },
  { name: "Assassin's Creed Valhalla", releaseDate: "2020" },
  { name: "Far Cry 5", releaseDate: "2018" },
  { name: "The Outer Worlds", releaseDate: "2019" },
  { name: "Tom Clancy's Rainbow Six Siege", releaseDate: "2015" },
  { name: "Godfall", releaseDate: "2020" },
  { name: "Mortal Kombat 11", releaseDate: "2019" },
  { name: "Bayonetta 2", releaseDate: "2014" },
  { name: "Hitman 3", releaseDate: "2021" },
  { name: "Watch Dogs 2", releaseDate: "2016" },
  { name: "Resident Evil 2", releaseDate: "2019" },
  { name: "Crash Bandicoot 4: It's About Time", releaseDate: "2020" },
  { name: "Control", releaseDate: "2019" },
  { name: "Death's Door", releaseDate: "2021" },
  { name: "Sekiro: Shadows Die Twice", releaseDate: "2019" },
  { name: "Half-Life: Alyx", releaseDate: "2020" },
  { name: "Marvel's Spider-Man: Miles Morales", releaseDate: "2020" },
  { name: "Demon's Souls", releaseDate: "2020" },
  { name: "The Medium", releaseDate: "2021" },
  { name: "Cuphead", releaseDate: "2017" },
  { name: "Dark Souls III", releaseDate: "2016" },
  //
  { name: "Persona 5", releaseDate: "2016" },
  { name: "Resident Evil Village", releaseDate: "2021" },
  { name: "The Witcher 3: Wild Hunt - Blood and Wine", releaseDate: "2016" },
  { name: "Final Fantasy VII Remake", releaseDate: "2020" },
  { name: "NieR Replicant ver.1.22474487139...", releaseDate: "2021" },
  { name: "Ghost of Tsushima: Director's Cut", releaseDate: "2021" },
  { name: "The Legend of Zelda: Skyward Sword HD", releaseDate: "2021" },
  { name: "Persona 5 Royal", releaseDate: "2019" },
  { name: "Super Mario 3D World + Bowser's Fury", releaseDate: "2021" },
  { name: "Monster Hunter Rise", releaseDate: "2021" },
];
