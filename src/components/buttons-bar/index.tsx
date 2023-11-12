import { useEffect, useState, useRef } from "react";
import ButtonTop from "../button-top";
import { CaretCircleUp, PauseCircle, PlayCircle } from "@phosphor-icons/react";

function usePLayerState($audioPlayer: any) {
  const [isPlaying, setIsPlaying] = useState({ playing: false });
  useEffect(() => {
    isPlaying.playing
      ? $audioPlayer.current.play()
      : $audioPlayer.current.pause();
  }, [isPlaying.playing]);
  const handlePlayPause = () => {
    console.log();
    setIsPlaying({ ...isPlaying, playing: !isPlaying.playing });
  };

  return {
    isPlaying,
    handlePlayPause,
  };
}

function useButtonScroll() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const triggerHeight = 400;

    setIsVisible(scrollY > triggerHeight);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return {
    isVisible,
    scrollToTop,
  };
}

function ButtonBar() {
  const audioUrl = "./audio/Lofi.mp3";
  const $audioPlayer = useRef<HTMLAudioElement | null>(null);
  const { isVisible, scrollToTop } = useButtonScroll();
  const { isPlaying, handlePlayPause } = usePLayerState($audioPlayer);

  return (
    <div className="fixed bottom-4 right-4 flex gap-[10px] items-center">
      <ButtonTop
        className={isVisible ? "visible" : "invisible"}
        children={<CaretCircleUp size={48} color="#167d7f" weight="bold" />}
        onClick={scrollToTop}
      />
      <audio ref={$audioPlayer} src={audioUrl} typeof="audio/mp3" />
      <audio></audio>
      {isPlaying.playing ? (
        <ButtonTop
          onClick={handlePlayPause}
          children={<PauseCircle size={48} color="#167d7f" weight="bold" />}
        />
      ) : (
        <ButtonTop
          onClick={handlePlayPause}
          children={<PlayCircle size={48} color="#167d7f" weight="bold" />}
        />
      )}
    </div>
  );
}

export default ButtonBar;
