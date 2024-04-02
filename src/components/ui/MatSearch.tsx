import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
interface ChildProps {
  search: string;
  setSearch: (search: string) => void;
  fetchGames: (search: string) => void;
}

export default function FreeSolo({
  search,
  setSearch,
  fetchGames,
}: ChildProps) {
  
  return (
    <Stack
      spacing={2}
      sx={{ width: 300, color: "white" }}
      className="text-white m-auto"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchGames(search);
        }}
      >
        <Autocomplete
          onClose={() => {}}
          autoComplete
          freeSolo
          onChange={(e, newVal: string) => setSearch(newVal)}
          sx={{
            ".MuiOutlinedInput-root": {
              color: "white",
            },
            ".MuiInputLabel-root": {
              color: "white",
            },
          }}
          id="free-solo-2-demo"
          disableClearable
          options={games.map((option) => {
            return option.name;
          })}
          renderInput={(params) => (
            <TextField
              // autoComplete='true'
              sx={{ text: "white" }}
              {...params}
              label="Search input"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
              value={search}
            />
          )}
        />
      </form>
    </Stack>
  );
}

// Top games
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
