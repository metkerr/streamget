import { useState } from "react";
import { Checkbox, ColorPicker, Option } from "./input";
import WidgetPreview from "./widget_preview";

interface HomepageProps {
  artists?: [{ name: string }];
  name?: string;
  duration_ms?: number;
  progress_ms?: number;
  timestamp?: number;
  images?: [];
}

const Homepage = (props: HomepageProps) => {
  const { artists, name, duration_ms, progress_ms, timestamp, images } = props;
  const [gamePreview, setGamePreview] = useState("Valorant");
  const [widgetFont, setWidgetFont] = useState("Poppins");
  const [widgetFontColor, setWidgetFontColor] = useState("");
  const [textOutline, setTextOutline] = useState(false);
  const [outlineColor, setOutlineColor] = useState("#000");
  const [textOutlineStyles, setTextOutlineStyles] = useState({
    textShadow: `-1px -1px #000, -1px -1px #000, -1px 0px #000,
    -1px 1px #000, -1px 1px #000, -1px -1px #000, -1px -1px #000,
    -1px 0px #000, -1px 1px #000, -1px 1px #000, 0px -1px #000,
    0px -1px #000, 0px 0px #000, 0px 1px #000, 0px 1px #000,
    1px -1px #000, 1px -1px #000, 1px 0px #000, 1px 1px #000,
    1px 1px #000, 1px -1px #000, 1px -1px #000, 1px 0px #000,
    1px 1px #000, 1px 1px #000`,
  });
  const [showTitle, setShowTitle] = useState(true);
  const [showArtists, setShowArtists] = useState(true);
  const [showAlbumCover, setShowAlbumCover] = useState(true);
  const [showTimestamp, setShowTimestamp] = useState(false);
  const [widgetSize, setWidgetSize] = useState({
    title: 0.8125,
    artists: 0.6875,
    cover: 50,
  });
  const [copy, setCopy] = useState("Copy");

  const handleRestylingOutline = (color: string = "#000000") => {
    setOutlineColor(color);
    setTextOutlineStyles({
      textShadow: `-1px -1px ${color}, -1px -1px ${color}, -1px 0px ${color},
      -1px 1px ${color}, -1px 1px ${color}, -1px -1px ${color}, -1px -1px ${color},
      -1px 0px ${color}, -1px 1px ${color}, -1px 1px ${color}, 0px -1px ${color},
      0px -1px ${color}, 0px 0px ${color}, 0px 1px ${color}, 0px 1px ${color},
      1px -1px ${color}, 1px -1px ${color}, 1px 0px ${color}, 1px 1px ${color},
      1px 1px ${color}, 1px -1px ${color}, 1px -1px ${color}, 1px 0px ${color},
      1px 1px ${color}, 1px 1px ${color}`,
    });
  };

  const handleWidgetSize = (size: string = "Medium") => {
    if (size === "Small") {
      setWidgetSize({ title: 0.625, artists: 0.4375, cover: 35 });
    } else if (size === "Medium") {
      setWidgetSize({ title: 0.8125, artists: 0.6875, cover: 50 });
    } else {
      setWidgetSize({ title: 1.25, artists: 1, cover: 75 }); //large
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `http://localhost:3000/widget?sTitle=${showTitle}&sArtists=${showArtists}&sCover=${showAlbumCover}&sTimestamp=${showTimestamp}&fontFamily=${widgetFont}&fontColor=${encodeURIComponent(
        widgetFontColor
      )}&sOutline=${textOutline}&outlineColor=${encodeURIComponent(
        outlineColor
      )}`
    );
    setCopy("Copied!");

    setTimeout(() => {
      setCopy("Copy");
    }, 2000); //reset copy button after 2s
  };

  return (
    <div id="homepage-container" className="flex">
      <section className="grow basis-1/2 mr-10">
        <div className="setup mb-8 mt-14">
          <h1 className="text-xl font-semibold mb-4">Setup</h1>
          <div className="setup-list">
            <div id="setup-checkboxes" className="flex gap-12">
              <div className="flex flex-col">
                <Checkbox
                  id="song_title"
                  name="Song Title"
                  getValue={(value: boolean) => setShowTitle(value)}
                  defaultChecked={true}
                />
                <Checkbox
                  id="artists"
                  name="Artists"
                  getValue={(value: boolean) => setShowArtists(value)}
                  defaultChecked={true}
                />
                <Checkbox
                  id="album_cover"
                  name="Album Cover"
                  getValue={(value: boolean) => setShowAlbumCover(value)}
                  defaultChecked={true}
                />
              </div>
              <div className="flex flex-col">
                <Checkbox
                  id="timestamp"
                  name="Timestamp"
                  getValue={(value: boolean) => setShowTimestamp(value)}
                />
                <div className="flex gap-2 items-center">
                  <span className="text-sm">Size</span>
                  <Option
                    labels={["Medium", "Small", "Large"]}
                    getValue={(value: string) => handleWidgetSize(value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="styles-opt">
          <h1 className="text-xl font-semibold mb-4">Styles</h1>
          <div className="styles-list">
            <div id="styles-checkboxes" className="flex gap-24">
              <div className="flex flex-col text-sm gap-3.5">
                <h2 className="text-base font-semibold mb-1">Fonts:</h2>
                <div className="flex gap-10 items-center">
                  <span>Font-family</span>
                  <Option
                    labels={[
                      "Poppins",
                      "Roboto",
                      "Montserrat",
                      "Montaga",
                      "Oswald",
                      "Raleway",
                      "Kanit",
                      "Balsamiq",
                      "Bebas Neue",
                      "Lobster",
                    ]}
                    getValue={(value: string) => setWidgetFont(value)}
                  />
                </div>
                <div className="flex gap-10 items-center">
                  <ColorPicker
                    id="font_color"
                    label="Font Color"
                    getValue={(value: string) => setWidgetFontColor(value)}
                  />
                </div>
              </div>
              <div className="flex flex-col text-sm gap-3.5">
                <h2 className="text-base font-semibold mb-2">Outlines:</h2>
                <div className="flex gap-10 items-center w-full relative">
                  <span>Outline</span>
                  <Checkbox
                    id="outline"
                    name="Outline"
                    className="text-sm -top-2.5 left-3"
                    styles={{ marginBottom: 0 }}
                    hideLabel
                    getValue={(value: boolean) => setTextOutline(value)}
                  />
                </div>
                <div className="flex gap-10 items-center w-full">
                  <ColorPicker
                    id="outline_color"
                    label="Outline Color"
                    defaultColor="#000000"
                    getValue={(value: string) => handleRestylingOutline(value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="basis-1/2 border-l border-slate-800 py-4 xl:pl-44 px-24">
        <div id="preview-section-container">
          <Option
            labels={[
              "Valorant",
              "Overwatch",
              "Genshin Impact",
              "League of Legends",
            ]}
            className="mb-5"
            getValue={(value: any) => setGamePreview(value)}
          />
          <WidgetPreview
            gamePreview={gamePreview}
            widgetFont={widgetFont}
            widgetFontColor={widgetFontColor}
            textOutline={textOutline}
            textOutlineStyles={textOutlineStyles}
            showTitle={showTitle}
            showArtists={showArtists}
            showAlbumCover={showAlbumCover}
            widgetSize={widgetSize}
            showTimestamp={showTimestamp}
            artists={artists}
            name={name}
            progress_ms={progress_ms}
            duration_ms={duration_ms}
            timestamp={timestamp}
            albumImages={images}
          />
          <div
            id="copy-result-container"
            className="text-sm flex gap-2 max-w-[358px]"
          >
            <div
              id="url-preview"
              className="border rounded py-1.5 px-2 truncate"
            >
              {`https://streamget.app/widget?sTitle=${showTitle}&sArtists=${showArtists}&sCover=${showAlbumCover}&sTimestamp=${showTimestamp}&fontFamily=${widgetFont}&fontColor=${widgetFontColor}&sOutline=${textOutline}&outlineColor=${outlineColor}`}
            </div>
            <button
              className="px-3 bg-green-500 rounded hover:bg-green-600 active:bg-green-700"
              onClick={handleCopy}
            >
              {copy}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Homepage;
