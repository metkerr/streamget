import { useState } from "react";
import { Checkbox, ColorPicker, Option } from "./input";
import Image from "next/image";
import valorant from "../public/valorant.png";
import overwatch2 from "../public/overwatch2.png";
import lol from "../public/lol.png";
import genshin from "../public/genshin.png";

const Homepage = () => {
  const [gamePreview, setGamePreview] = useState("Valorant");

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
    <div id="homepage-container" className="flex">
      <section className="grow basis-1/2 mr-10">
        <div className="setup mb-8 mt-14">
          <h1 className="text-xl font-semibold mb-4">Setup</h1>
          <div className="setup-list">
            <div id="setup-checkboxes" className="flex gap-12">
              <div className="flex flex-col">
                <Checkbox id="song_title" name="Song Title" />
                <Checkbox id="artist" name="Artist" />
                <Checkbox id="album_cover" name="Album Cover" />
              </div>
              <div className="flex flex-col">
                <Checkbox id="next_music" name="Next Music" />
                <Checkbox id="previous_music" name="Previous Music" />
                <Checkbox id="timestamp" name="Timestamp" />
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
                      "Montega",
                      "Oswald",
                      "Raleway",
                      "Kanit",
                      "Balsamic",
                      "Bebas Neue",
                      "Lobster",
                    ]}
                  />
                </div>
                <div className="flex gap-10 items-center">
                  <ColorPicker id="font_color" label="Font Color" />
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
                  />
                </div>
                <div className="flex gap-10 items-center w-full">
                  <ColorPicker id="outline_color" label="Outline Color" />
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
          <div
            id="image-preview-wrapper"
            className="w-[22.5rem] h-80 border border-slate-800 overflow-clip mb-4"
          >
            <Image
              src={getPreviewImage()}
              alt="preview background image"
              priority
            />
          </div>
          <div
            id="copy-result-container"
            className="text-sm flex gap-2 max-w-[358px]"
          >
            <div
              id="url-preview"
              className="border rounded py-1.5 px-2 truncate select-none"
            >
              https://streamget.io/widget?title=true&timestamp...
            </div>
            <button className="px-3 bg-green-500 rounded">Copy</button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Homepage;
