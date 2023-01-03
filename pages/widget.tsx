import WidgetPreview from "../components/widget_preview";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import getCurrentSong from "../lib/getCurrentSong";

interface SongDataState {
  progress_ms: number;
  timestamp: number;
  duration_ms: number;
  name: string;
  artists: [{ name: string }];
  images: [];
}

const Widget = () => {
  const [songData, setSongData] = useState<SongDataState>();
  const widgetSize = { title: 4, artists: 3, cover: 250 };
  const router = useRouter();
  const { data: session } = useSession();

  const {
    sTitle,
    sArtists,
    sCover,
    sTimestamp,
    fontFamily,
    fontColor,
    sOutline,
    outlineColor,
  } = router.query;

  const textOutlineStyles = {
    textShadow: `-4px -4px ${outlineColor}, -4px -2px ${outlineColor}, -4px 1px ${outlineColor},
  -4px 2px ${outlineColor}, -4px 4px ${outlineColor}, -2px -4px ${outlineColor}, -2px -2px ${outlineColor},
  -2px 0px ${outlineColor}, -2px 2px ${outlineColor}, -2px 4px ${outlineColor}, 0px -4px ${outlineColor},
  0px -2px ${outlineColor}, 0px 0px ${outlineColor}, 0px 2px ${outlineColor}, 0px 4px ${outlineColor},
  2px -4px ${outlineColor}, 2px -2px ${outlineColor}, 2px 0px ${outlineColor}, 2px 2px ${outlineColor},
  2px 4px ${outlineColor}, 4px -4px ${outlineColor}, 4px -2px ${outlineColor}, 4px 0px ${outlineColor},
  4px 2px ${outlineColor}, 4px 4px ${outlineColor}`,
  };

  useEffect(() => {
    //@ts-ignore
    if (session?.error === "RefreshAccessTokenError") signIn();

    //@ts-ignore
    const accessToken: string = session?.accessToken || "";
    const getSong = async () => {
      if (!accessToken) return null;
      const res = await getCurrentSong(accessToken);

      if (res.status === 204 || res.status > 400) return null;

      const data = await res.json();
      setSongData({
        progress_ms: data.progress_ms,
        timestamp: data.timestamp,
        duration_ms: data.item.duration_ms,
        name: data.item.name,
        artists: data.item.artists,
        images: data.item.album.images,
      });
    };

    getSong().catch(console.error);
  }, [session]);

  return (
    <>
      {console.log(songData)}
      {console.log(session)}
      <WidgetPreview
        isNotPreview
        showTitle={sTitle == "true"}
        showArtists={sArtists == "true"}
        showTimestamp={sTimestamp == "true"}
        showAlbumCover={sCover == "true"}
        textOutline={sOutline == "true"}
        textOutlineStyles={textOutlineStyles}
        widgetFont={fontFamily as string | undefined}
        widgetFontColor={fontColor as string | undefined}
        widgetSize={widgetSize}
        progress_ms={songData?.progress_ms}
        duration_ms={songData?.duration_ms}
        timestamp={songData?.timestamp}
        name={songData?.name}
        artists={songData?.artists}
        albumImages={songData?.images}
      />
    </>
  );
};
export default Widget;
