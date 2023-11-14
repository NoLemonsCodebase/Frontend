import React, { useCallback, useEffect, useState } from "react";

interface IProps {
  src: string[];
  currentIndex?: number;
  backgroundStyle?: React.CSSProperties;
  disableScroll?: boolean;
  closeOnClickOutside?: boolean;
  onClose?: () => void;
}

const ReactSimpleImageViewer = (props: IProps) => {
  const [currentIndex, setCurrentIndex] = useState(props.currentIndex ?? 0);

  const changeImage = useCallback(
    (delta: number) => {
      let nextIndex = (currentIndex + delta) % props.src.length;
      if (nextIndex < 0) nextIndex = props.src.length - 1;
      setCurrentIndex(nextIndex);
    },
    [currentIndex]
  );

  const handleClick = useCallback(
    (event: any) => {
      if (!event.target || !props.closeOnClickOutside) {
        return;
      }

      const checkId = event.target.id === "ReactSimpleImageViewer";
      const checkClass = event.target.classList.contains(
        "react-simple-image-viewer__slide"
      );

      if (checkId || checkClass) {
        event.stopPropagation();
        props.onClose?.();
      }
    },
    [props.onClose]
  );

  const handleKeyDown = useCallback(
    (event: any) => {
      if (event.key === "Escape") {
        props.onClose?.();
      }

      if (["ArrowLeft", "h"].includes(event.key)) {
        changeImage(-1);
      }

      if (["ArrowRight", "l"].includes(event.key)) {
        changeImage(1);
      }
    },
    [props.onClose, changeImage]
  );

  const handleWheel = useCallback(
    (event: any) => {
      if (event.wheelDeltaY > 0) {
        changeImage(-1);
      } else {
        changeImage(1);
      }
    },
    [changeImage]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    if (!props.disableScroll) {
      document.addEventListener("wheel", handleWheel);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      if (!props.disableScroll) {
        document.removeEventListener("wheel", handleWheel);
      }
    };
  }, [handleKeyDown, handleWheel]);

  return (
    <div
      id="ReactSimpleImageViewer"
      className="fixed inset-0 z-10 flex items-center px-12 bg-black"
      style={props.backgroundStyle}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
    >
      <div
        className="absolute top-5 right-5 text-black text-3xl font-bold cursor-pointer hover:opacity-100 opacity-70"
        onClick={() => props.onClose?.()}
      >
        <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center">
          &times;
        </div>
      </div>

      {props.src.length > 1 && (
        <div
          className="absolute left-0 h-4/5 text-black cursor-pointer text-3xl leading-60 font-bold flex items-center opacity-70 hover:opacity-100 user-select-none"
          onClick={() => changeImage(-1)}
        >
          <div className="bg-white border border-gray-200 py-2 px-3 h-24 flex items-center">
            &#10094;
          </div>
        </div>
      )}

      {props.src.length > 1 && (
        <div
          className="absolute right-0 h-4/5 text-black cursor-pointer text-3xl leading-60 font-bold flex items-center opacity-70 hover:opacity-100 user-select-none"
          onClick={() => changeImage(1)}
        >
          <div className="bg-white border border-gray-200 py-2 px-3 h-24 flex items-center">
            &#10095;
          </div>
        </div>
      )}

      <div className="m-auto p-0 w-11/12 h-full text-center">
        <div className="h-full flex items-center justify-center">
          <img
            src={props.src[currentIndex]}
            alt=""
            className="max-h-full max-w-full user-select-none"
          />
        </div>
      </div>
    </div>
  );
};

export default ReactSimpleImageViewer;
