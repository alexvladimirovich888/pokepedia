import { Pokemon, PokemonType } from './types';

// Use PokeAPI official artwork
const getImg = (id: number) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

const detailedList: Partial<Pokemon>[] = [
  {
    id: 1, name: "Bulbasaur", types: [PokemonType.Grass, PokemonType.Poison],
    description: "Bulbasaur (Japanese: フシギダネ Fushigidane) is a dual-type Grass/Poison Pokémon introduced in Generation I. It is known as the Seed Pokémon. A strange seed is planted on its back at birth, which sprouts and grows along with it, providing nourishment through photosynthesis. Bulbasaur can be seen napping in bright sunlight.",
    evolutions: [{ targetId: 2, targetName: "Ivysaur", condition: "Level 16" }],
    height: "0.7 m", weight: "6.9 kg", abilities: ["Overgrow", "Chlorophyll"]
  },
  {
    id: 4, name: "Charmander", types: [PokemonType.Fire],
    description: "Charmander (Japanese: ヒトカゲ Hitokage) is a Fire-type Pokémon introduced in Generation I. It is known as the Lizard Pokémon. The flame on its tail indicates its life force; if it is weak, the flame burns weakly. Charmander prefers hot places and is said to die if its flame goes out.",
    evolutions: [{ targetId: 5, targetName: "Charmeleon", condition: "Level 16" }],
    height: "0.6 m", weight: "8.5 kg", abilities: ["Blaze", "Solar Power"]
  },
  {
    id: 7, name: "Squirtle", types: [PokemonType.Water],
    description: "Squirtle (Japanese: ゼニガメ Zenigame) is a Water-type Pokémon introduced in Generation I. It is known as the Tiny Turtle Pokémon. Its shell is not just for protection; its rounded shape and grooves reduce water resistance, allowing it to swim at high speeds.",
    evolutions: [{ targetId: 8, targetName: "Wartortle", condition: "Level 16" }],
    height: "0.5 m", weight: "9.0 kg", abilities: ["Torrent", "Rain Dish"]
  },
  {
    id: 25, name: "Pikachu", types: [PokemonType.Electric],
    description: "Pikachu (Japanese: ピカチュウ Pikachu) is an Electric-type Pokémon introduced in Generation I. It is known as the Mouse Pokémon. It stores electricity in the pouches on its cheeks and releases it when agitated. Groups of Pikachu can generate powerful electrical storms.",
    evolutions: [{ targetId: 26, targetName: "Raichu", condition: "Thunder Stone" }],
    height: "0.4 m", weight: "6.0 kg", abilities: ["Static", "Lightning Rod"]
  },
  {
    id: 150, name: "Mewtwo", types: [PokemonType.Psychic],
    description: "Mewtwo (Japanese: ミュウツー Mewtwo) is a Psychic-type Legendary Pokémon introduced in Generation I. It is known as the Genetic Pokémon. Created by scientists through genetic manipulation of Mew's DNA, it possesses immense psychic powers and a savage heart.",
    evolutions: [],
    height: "2.0 m", weight: "122.0 kg", abilities: ["Pressure", "Unnerve"]
  },
  {
    id: 152, name: "Chikorita", types: [PokemonType.Grass],
    description: "Chikorita is a Grass-type Pokémon introduced in Generation II. It is known as the Leaf Pokémon. The leaf on its head releases a soothing aroma that calms aggression. It uses the leaf to gauge temperature and humidity.",
    evolutions: [{ targetId: 153, targetName: "Bayleef", condition: "Level 16" }],
    height: "0.9 m", weight: "6.4 kg", abilities: ["Overgrow"]
  },
  {
    id: 155, name: "Cyndaquil", types: [PokemonType.Fire],
    description: "Cyndaquil is a Fire-type Pokémon introduced in Generation II. It is known as the Fire Mouse Pokémon. Flames spout from its back when startled, but it keeps them dim when resting to conserve energy.",
    evolutions: [{ targetId: 156, targetName: "Quilava", condition: "Level 14" }],
    height: "0.5 m", weight: "7.9 kg", abilities: ["Blaze"]
  },
  {
    id: 158, name: "Totodile", types: [PokemonType.Water],
    description: "Totodile is a Water-type Pokémon introduced in Generation II. It is known as the Big Jaw Pokémon. Its powerful jaws can crush anything, and it often bites without thinking, even its Trainer.",
    evolutions: [{ targetId: 159, targetName: "Croconaw", condition: "Level 18" }],
    height: "0.6 m", weight: "9.5 kg", abilities: ["Torrent"]
  },
  {
    id: 175, name: "Togepi", types: [PokemonType.Fairy],
    description: "Togepi is a Fairy-type Pokémon introduced in Generation II. It is known as the Spike Ball Pokémon. It stores positive emotions in its shell and releases them to share happiness.",
    evolutions: [{ targetId: 176, targetName: "Togetic", condition: "High Friendship" }],
    height: "0.3 m", weight: "1.5 kg", abilities: ["Hustle", "Serene Grace"]
  },
  {
    id: 172, name: "Pichu", types: [PokemonType.Electric],
    description: "Pichu is an Electric-type Pokémon introduced in Generation II. It is known as the Tiny Mouse Pokémon. It is not yet skilled at storing electricity and often shocks itself when playing.",
    evolutions: [{ targetId: 25, targetName: "Pikachu", condition: "High Friendship" }],
    height: "0.3 m", weight: "2.0 kg", abilities: ["Static"]
  },
  {
    id: 252, name: "Treecko", types: [PokemonType.Grass],
    description: "Treecko is a Grass-type Pokémon introduced in Generation III. It is known as the Wood Gecko Pokémon. It climbs walls with hooks on its feet and senses humidity with its tail.",
    evolutions: [{ targetId: 253, targetName: "Grovyle", condition: "Level 16" }],
    height: "0.5 m", weight: "5.0 kg", abilities: ["Overgrow"]
  },
  {
    id: 255, name: "Torchic", types: [PokemonType.Fire],
    description: "Torchic is a Fire-type Pokémon introduced in Generation III. It is known as the Chick Pokémon. A fire sac in its belly keeps it warm, and it hugs Trainers to share the heat.",
    evolutions: [{ targetId: 256, targetName: "Combusken", condition: "Level 16" }],
    height: "0.4 m", weight: "2.5 kg", abilities: ["Blaze"]
  },
  {
    id: 258, name: "Mudkip", types: [PokemonType.Water],
    description: "Mudkip is a Water-type Pokémon introduced in Generation III. It is known as the Mud Fish Pokémon. It uses the fin on its head to sense changes in water currents.",
    evolutions: [{ targetId: 259, targetName: "Marshtomp", condition: "Level 16" }],
    height: "0.4 m", weight: "7.6 kg", abilities: ["Torrent"]
  },
  {
    id: 282, name: "Gardevoir", types: [PokemonType.Psychic, PokemonType.Fairy],
    description: "Gardevoir is a dual-type Psychic/Fairy Pokémon introduced in Generation III. It is known as the Embrace Pokémon. It will give its life to protect its Trainer, creating black holes with psychic power.",
    evolutions: [],
    height: "1.6 m", weight: "48.4 kg", abilities: ["Synchronize", "Trace"]
  },
  {
    id: 302, name: "Sableye", types: [PokemonType.Dark, PokemonType.Ghost],
    description: "Sableye is a dual-type Dark/Ghost Pokémon introduced in Generation III. It is known as the Darkness Pokémon. It eats gems and lurks in caves, with eyes that sparkle like jewels.",
    evolutions: [],
    height: "0.5 m", weight: "11.0 kg", abilities: ["Keen Eye", "Stall"]
  },
  {
    id: 387, name: "Turtwig", types: [PokemonType.Grass],
    description: "Turtwig is a Grass-type Pokémon introduced in Generation IV. It is known as the Tiny Leaf Pokémon. Its shell is made of hardened soil, and it photosynthesizes to make oxygen.",
    evolutions: [{ targetId: 388, targetName: "Grotle", condition: "Level 18" }],
    height: "0.4 m", weight: "10.2 kg", abilities: ["Overgrow"]
  },
  {
    id: 390, name: "Chimchar", types: [PokemonType.Fire],
    description: "Chimchar is a Fire-type Pokémon introduced in Generation IV. It is known as the Chimp Pokémon. The gas from its rear fuels the flame on its head, which never goes out even in rain.",
    evolutions: [{ targetId: 391, targetName: "Monferno", condition: "Level 14" }],
    height: "0.5 m", weight: "6.2 kg", abilities: ["Blaze"]
  },
  {
    id: 393, name: "Piplup", types: [PokemonType.Water],
    description: "Piplup is a Water-type Pokémon introduced in Generation IV. It is known as the Penguin Pokémon. Proud and independent, it doesn't like accepting food from people.",
    evolutions: [{ targetId: 394, targetName: "Prinplup", condition: "Level 16" }],
    height: "0.4 m", weight: "5.2 kg", abilities: ["Torrent"]
  },
  {
    id: 448, name: "Lucario", types: [PokemonType.Fighting, PokemonType.Steel],
    description: "Lucario is a dual-type Fighting/Steel Pokémon introduced in Generation IV. It is known as the Aura Pokémon. It senses auras to predict actions and can create waves of aura energy.",
    evolutions: [],
    height: "1.2 m", weight: "54.0 kg", abilities: ["Steadfast", "Inner Focus"]
  },
  {
    id: 445, name: "Garchomp", types: [PokemonType.Dragon, PokemonType.Ground],
    description: "Garchomp is a dual-type Dragon/Ground Pokémon introduced in Generation IV. It is known as the Mach Pokémon. It flies at sonic speeds with wings like jet engines.",
    evolutions: [],
    height: "1.9 m", weight: "95.0 kg", abilities: ["Sand Veil"]
  },
  {
    id: 495, name: "Snivy", types: [PokemonType.Grass],
    description: "Snivy is a Grass-type Pokémon introduced in Generation V. It is known as the Grass Snake Pokémon. It uses photosynthesis to boost its speed when healthy.",
    evolutions: [{ targetId: 496, targetName: "Servine", condition: "Level 17" }],
    height: "0.6 m", weight: "8.1 kg", abilities: ["Overgrow"]
  },
  {
    id: 498, name: "Tepig", types: [PokemonType.Fire],
    description: "Tepig is a Fire-type Pokémon introduced in Generation V. It is known as the Fire Pig Pokémon. It shoots fire from its snout when huffing, especially when it has a cold.",
    evolutions: [{ targetId: 499, targetName: "Pignite", condition: "Level 17" }],
    height: "0.5 m", weight: "9.9 kg", abilities: ["Blaze"]
  },
  {
    id: 501, name: "Oshawott", types: [PokemonType.Water],
    description: "Oshawott is a Water-type Pokémon introduced in Generation V. It is known as the Sea Otter Pokémon. It fights using the scalchop on its stomach as a blade.",
    evolutions: [{ targetId: 502, targetName: "Dewott", condition: "Level 17" }],
    height: "0.5 m", weight: "5.9 kg", abilities: ["Torrent"]
  },
  {
    id: 571, name: "Zoroark", types: [PokemonType.Dark],
    description: "Zoroark is a Dark-type Pokémon introduced in Generation V. It is known as the Illusion Fox Pokémon. It creates illusions to protect its den and can transform into people or other Pokémon.",
    evolutions: [],
    height: "1.6 m", weight: "81.1 kg", abilities: ["Illusion"]
  },
  {
    id: 494, name: "Victini", types: [PokemonType.Psychic, PokemonType.Fire],
    description: "Victini is a dual-type Psychic/Fire Mythical Pokémon introduced in Generation V. It is known as the Victory Pokémon. It brings victory to any Trainer who befriends it, filling them with infinite energy.",
    evolutions: [],
    height: "0.4 m", weight: "4.0 kg", abilities: ["Victory Star"]
  },
  {
    id: 650, name: "Chespin", types: [PokemonType.Grass],
    description: "Chespin is a Grass-type Pokémon introduced in Generation VI. It is known as the Spiny Nut Pokémon. The quills on its head harden when attacked, acting as a shield.",
    evolutions: [{ targetId: 651, targetName: "Quilladin", condition: "Level 16" }],
    height: "0.4 m", weight: "9.0 kg", abilities: ["Overgrow"]
  },
  {
    id: 653, name: "Fennekin", types: [PokemonType.Fire],
    description: "Fennekin is a Fire-type Pokémon introduced in Generation VI. It is known as the Fox Pokémon. It vents hot air from its ears to intimidate foes and enjoys twigs as snacks.",
    evolutions: [{ targetId: 654, targetName: "Braixen", condition: "Level 16" }],
    height: "0.4 m", weight: "9.4 kg", abilities: ["Blaze"]
  },
  {
    id: 656, name: "Froakie", types: [PokemonType.Water],
    description: "Froakie is a Water-type Pokémon introduced in Generation VI. It is known as the Bubble Frog Pokémon. It secretes flexible bubbles from its chest and back to reduce damage.",
    evolutions: [{ targetId: 657, targetName: "Frogadier", condition: "Level 16" }],
    height: "0.3 m", weight: "7.0 kg", abilities: ["Torrent"]
  },
  {
    id: 658, name: "Greninja", types: [PokemonType.Water, PokemonType.Dark],
    description: "Greninja is a dual-type Water/Dark Pokémon introduced in Generation VI. It is known as the Ninja Pokémon. It creates throwing stars out of compressed water that can split metal.",
    evolutions: [],
    height: "1.5 m", weight: "40.0 kg", abilities: ["Torrent", "Protean"]
  },
  {
    id: 700, name: "Sylveon", types: [PokemonType.Fairy],
    description: "Sylveon is a Fairy-type Pokémon introduced in Generation VI. It is known as the Intertwining Pokémon. Its ribbon-like feelers emit a soothing aura to calm fights.",
    evolutions: [],
    height: "1.0 m", weight: "23.5 kg", abilities: ["Cute Charm", "Pixilate"]
  },
  {
    id: 722, name: "Rowlet", types: [PokemonType.Grass, PokemonType.Flying],
    description: "Rowlet is a dual-type Grass/Flying Pokémon introduced in Generation VII. It is known as the Grass Quill Pokémon. It flies silently and shoots quills with precision.",
    evolutions: [{ targetId: 723, targetName: "Dartrix", condition: "Level 17" }],
    height: "0.3 m", weight: "1.5 kg", abilities: ["Overgrow"]
  },
  {
    id: 725, name: "Litten", types: [PokemonType.Fire],
    description: "Litten is a Fire-type Pokémon introduced in Generation VII. It is known as the Fire Cat Pokémon. It spits flammable fur balls and is aloof but bonds deeply once trusting.",
    evolutions: [{ targetId: 726, targetName: "Torracat", condition: "Level 17" }],
    height: "0.4 m", weight: "4.3 kg", abilities: ["Blaze"]
  },
  {
    id: 728, name: "Popplio", types: [PokemonType.Water],
    description: "Popplio is a Water-type Pokémon introduced in Generation VII. It is known as the Sea Lion Pokémon. It creates water balloons to juggle and attack foes.",
    evolutions: [{ targetId: 729, targetName: "Brionne", condition: "Level 17" }],
    height: "0.4 m", weight: "7.5 kg", abilities: ["Torrent"]
  },
  {
    id: 778, name: "Mimikyu", types: [PokemonType.Ghost, PokemonType.Fairy],
    description: "Mimikyu is a dual-type Ghost/Fairy Pokémon introduced in Generation VII. It is known as the Disguise Pokémon. It wears a rag resembling Pikachu to hide its true form, which causes death if seen.",
    evolutions: [],
    height: "0.2 m", weight: "0.7 kg", abilities: ["Disguise"]
  },
  {
    id: 26, name: "Raichu", types: [PokemonType.Electric],
    description: "Raichu is an Electric-type Pokémon introduced in Generation I. It is known as the Mouse Pokémon. It discharges electricity from its cheeks and can store over 100,000 volts.",
    evolutions: [],
    height: "0.8 m", weight: "30.0 kg", abilities: ["Static"]
  },
  {
    id: 810, name: "Grookey", types: [PokemonType.Grass],
    description: "Grookey is a Grass-type Pokémon introduced in Generation VIII. It is known as the Chimp Pokémon. It uses its stick to beat rhythms that revive withered plants.",
    evolutions: [{ targetId: 811, targetName: "Thwackey", condition: "Level 16" }],
    height: "0.3 m", weight: "5.0 kg", abilities: ["Overgrow"]
  },
  {
    id: 813, name: "Scorbunny", types: [PokemonType.Fire],
    description: "Scorbunny is a Fire-type Pokémon introduced in Generation VIII. It is known as the Rabbit Pokémon. It runs to heat up the pads on its feet, igniting its attacks.",
    evolutions: [{ targetId: 814, targetName: "Raboot", condition: "Level 16" }],
    height: "0.3 m", weight: "4.5 kg", abilities: ["Blaze"]
  },
  {
    id: 816, name: "Sobble", types: [PokemonType.Water],
    description: "Sobble is a Water-type Pokémon introduced in Generation VIII. It is known as the Water Lizard Pokémon. It secretes water from its skin to become invisible when nervous.",
    evolutions: [{ targetId: 817, targetName: "Drizzile", condition: "Level 16" }],
    height: "0.3 m", weight: "4.0 kg", abilities: ["Torrent"]
  },
  {
    id: 849, name: "Toxtricity", types: [PokemonType.Electric, PokemonType.Poison],
    description: "Toxtricity is a dual-type Electric/Poison Pokémon introduced in Generation VIII. It is known as the Punk Pokémon. It generates electricity by strumming its chest protrusions like a guitar.",
    evolutions: [],
    height: "1.6 m", weight: "40.0 kg", abilities: ["Punk Rock", "Plus"]
  },
  {
    id: 823, name: "Corviknight", types: [PokemonType.Flying, PokemonType.Steel],
    description: "Corviknight is a dual-type Flying/Steel Pokémon introduced in Generation VIII. It is known as the Raven Pokémon. Its gleaming wings intimidate foes, and it serves as a flying taxi in Galar.",
    evolutions: [],
    height: "2.2 m", weight: "75.0 kg", abilities: ["Pressure", "Unnerve"]
  }
];

// Generate stubs
const fullDatabase: Pokemon[] = [];

// Fill with detailed first
const detailedMap = new Map<number, Pokemon>();
detailedList.forEach(p => {
  const fullP: Pokemon = {
    ...p,
    biology: p.biology || `${p.name} is a unique creature found in the wild. Its biological distinctiveness makes it a subject of study for Professors worldwide.`,
    inTheGames: p.inTheGames || "Obtainable in various regions through events or wild encounters.",
    inTheAnime: p.inTheAnime || `Appears frequently in the anime series.`,
    trivia: "No additional trivia available.",
    evolutions: p.evolutions || [],
    isStub: false,
    imageUrl: getImg(p.id!),
    height: p.height || "Unknown",
    weight: p.weight || "Unknown",
    abilities: p.abilities || ["Unknown"],
  } as Pokemon;
  detailedMap.set(p.id!, fullP);
});

// Fill rest up to 1010
for (let i = 1; i <= 1010; i++) {
  if (detailedMap.has(i)) {
    fullDatabase.push(detailedMap.get(i)!);
  } else {
    // Generate stub
    const typeKeys = Object.keys(PokemonType);
    const randomType = typeKeys[i % typeKeys.length] as PokemonType;
    fullDatabase.push({
      id: i,
      name: `Pokémon #${i}`,
      types: [randomType],
      description: "This article is a stub. You can help the Pokémon Encyclopedia Hub by expanding it.",
      evolutions: [],
      isStub: true,
      imageUrl: getImg(i),
      height: "??",
      weight: "??",
      abilities: ["??"]
    });
  }
}

export const getAllPokemon = () => fullDatabase;
export const getPokemonById = (id: number) => fullDatabase.find(p => p.id === id);
export const searchPokemon = (query: string) => {
  const q = query.toLowerCase();
  return fullDatabase.filter(p => 
    p.name.toLowerCase().includes(q) || 
    p.id.toString() === q
  );
};