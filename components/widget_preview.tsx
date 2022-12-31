import coverAlbum from "../public/albumcover.png";
import clsx from "clsx";
import Image from "next/image";
import valorant from "../public/valorant.png";
import overwatch2 from "../public/overwatch2.png";
import lol from "../public/lol.png";
import genshin from "../public/genshin.png";
import {
  Roboto,
  Montserrat,
  Montaga,
  Oswald,
  Raleway,
  Kanit,
  Balsamiq_Sans,
  Bebas_Neue,
  Lobster,
} from "@next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["500", "700"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});
const montaga = Montaga({
  subsets: ["latin"],
  weight: ["400"],
});
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});
const balsamiq = Balsamiq_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});
const lobster = Lobster({
  subsets: ["latin"],
  weight: ["400"],
});

interface WidgetProps {
  gamePreview?: string;
  widgetFont?: string;
  widgetFontColor?: string;
  textOutline?: boolean;
  textOutlineStyles?: {};
  showTitle?: boolean;
  showArtists?: boolean;
  showAlbumCover?: boolean;
  showTimestamp?: boolean;
  widgetSize?: { title: number; artists: number; cover: number };
  isNotPreview?: boolean;
}

const WidgetPreview = ({
  gamePreview,
  widgetFont,
  widgetFontColor,
  textOutline = false,
  textOutlineStyles,
  showTitle = true,
  showArtists = true,
  showAlbumCover = true,
  widgetSize,
  showTimestamp,
  isNotPreview,
}: WidgetProps) => {
  const getPreviewImage = () => {
    switch (gamePreview) {
      case "Valorant":
        return valorant;
      case "Overwatch":
        return overwatch2;
      case "League of Legends":
        return lol;
      default:
        return genshin;
    }
  };

  const getStyles = (style: string) => {
    if (style === "title") {
      if (textOutline) {
        return { fontSize: `${widgetSize?.title}rem`, ...textOutlineStyles };
      } else {
        return { fontSize: `${widgetSize?.title}rem` };
      }
    } else {
      if (textOutline) {
        return {
          fontSize: `${widgetSize?.artists}rem`,
          color: widgetFontColor || "#c5c5c5",
          ...textOutlineStyles,
        };
      } else {
        return {
          fontSize: `${widgetSize?.artists}rem`,
          color: widgetFontColor || "#c5c5c5",
        };
      }
    }
  };

  return (
    <div
      id="image-preview-wrapper"
      className={`${
        !isNotPreview &&
        "w-[22.5rem] h-80 border border-slate-800 overflow-clip mb-4 relative"
      }`}
    >
      {!isNotPreview && (
        <Image
          src={getPreviewImage()}
          alt="preview background image"
          priority
        />
      )}
      <div
        id="widget-preview"
        className={`${
          !isNotPreview ? "absolute right-5 bottom-16 gap-3" : "gap-12"
        } text-sm flex items-center`}
      >
        <div
          style={{
            color: (widgetFontColor && widgetFontColor) || undefined,
          }}
          className="shrink-0"
        >
          {showAlbumCover && (
            <Image
              src={coverAlbum}
              width={widgetSize?.cover}
              height={widgetSize?.cover}
              alt="album cover"
            />
          )}
          {showTimestamp && (
            <p
              className={`text-[11px] scale-75 block text-center ${
                !isNotPreview ? "-mb-[1.075rem]" : "-mb-[5rem]"
              } `}
              style={getStyles("timestamp") || {}}
            >
              2:15/3:25
            </p>
          )}
        </div>
        <div
          id="preview-title"
          className={clsx({
            [`${roboto.className}`]: widgetFont === "Roboto",
            [`${montserrat.className}`]: widgetFont === "Montserrat",
            [`${montaga.className}`]: widgetFont === "Montaga",
            [`${oswald.className}`]: widgetFont === "Oswald",
            [`${raleway.className}`]: widgetFont === "Raleway",
            [`${kanit.className}`]: widgetFont === "Kanit",
            [`${balsamiq.className}`]: widgetFont === "Balsamiq",
            [`${bebas.className}`]: widgetFont === "Bebas Neue",
            [`${lobster.className}`]: widgetFont === "Lobster",
          })}
          style={{
            color: (widgetFontColor && widgetFontColor) || undefined,
          }}
        >
          {showTitle && (
            <p
              className={`truncate ${isNotPreview && "w-[55rem]"}`}
              style={getStyles("title") || {}}
            >
              Someone Else's Dream
            </p>
          )}
          {showArtists && (
            <p
              className={`text-[11px] truncate ${isNotPreview && "w-[55rem]"}`}
              style={getStyles("artists") || {}}
            >
              Absofacto
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default WidgetPreview;
