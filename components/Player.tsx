"use client";

import useGetSongById from "@/hooks/useGetSongById";
import usePlayer from "@/hooks/usePlayer";

const Player = () => {
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);

  const songUrl = useLoadSongUrl;

  return <div>Player comp</div>;
};

export default Player;
