"use client";

import { Song } from "@/types";

interface LikedContentProps {
  songs: Song[];
}
const LikedContent: React.FC<LikedContentProps> = ({ songs }) => {
  return <div>LikedContent</div>;
};

export default LikedContent;
