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
  return (
    <div
      id="image-preview-wrapper"
      className="w-[22.5rem] h-80 border border-slate-800 overflow-clip mb-4 relative"
    >
      <Image src={getPreviewImage()} alt="preview background image" priority />
      <div
        id="widget-preview"
        className="absolute right-5 bottom-16 text-sm flex gap-3 items-center"
      >
        {showAlbumCover && (
          <Image src={coverAlbum} width={50} height={50} alt="album cover" />
        )}
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
            <p style={(textOutline && textOutlineStyles) || {}}>
              Someone Else's Dream
            </p>
          )}
          {showArtists && (
            <p
              className="text-[11px] opacity-60"
              style={(textOutline && textOutlineStyles) || {}}
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
