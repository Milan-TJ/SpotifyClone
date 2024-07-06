import { createContext } from "react";
import cover1 from './covers/1.png';
import cover2 from './covers/2.png';
import cover3 from './covers/3.jpeg';
import cover4 from './covers/4.jpeg';
import cover5 from './covers/5.jpeg';
import cover6 from './covers/6.jpeg';
import cover7 from './covers/7.jpeg';
import cover8 from './covers/8.jpeg';
import cover9 from './covers/9.jpeg';
import cover10 from './covers/10.jpeg';
import cover11 from './covers/11.jpeg';
import cover12 from './covers/12.jpeg';

export const SongContext = createContext([
  { songName: "24k Magic", filePath: "songs/1.m4a", coverPath: cover1 },
  { songName: "Immortals", filePath: "songs/2.m4a", coverPath: cover2 },
  { songName: "INDUSTRY BABY", filePath: "songs/3.m4a", coverPath: cover3 },
  { songName: "INFERNO", filePath: "songs/4.m4a", coverPath: cover4 },
  { songName: "Jujutsu Kaisen- Kaikai Kitan ", filePath: "songs/5.m4a", coverPath: cover5 },
  { songName: "It Ain't Me", filePath: "songs/6.m4a", coverPath: cover6 },
  { songName: "Loverboy", filePath: "songs/7.m4a", coverPath: cover7 },
  { songName: "LSD - Audio - Salam-e-Ishq", filePath: "songs/8.m4a", coverPath: cover8 },
  { songName: "LSD - Genius", filePath: "songs/9.m4a", coverPath: cover9 },
  { songName: "LSD - No New Friends", filePath: "songs/10.m4a", coverPath: cover10 },
  { songName: "LSD - Thunderclouds", filePath: "songs/11.m4a", coverPath: cover11 },
  { songName: "Sia - Snowman", filePath: "songs/12.m4a", coverPath: cover12 },
])
