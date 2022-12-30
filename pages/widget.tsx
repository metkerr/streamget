import { GetServerSideProps } from "next";
import WidgetPreview from "../components/widget_preview";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ...context.query,
    },
  };
};

interface WidgetProps {
  title: string;
  artists: string;
  cover: string;
  timestamp: string;
  fontFamily: string;
  fontColor: string;
  outline: string;
  outlineColor: string;
}

const Widget = ({
  title,
  artists,
  cover,
  timestamp,
  fontFamily,
  fontColor,
  outline,
  outlineColor,
}: WidgetProps) => {
  const widgetSize = { title: 4, artists: 3, cover: 250 };

  const textOutlineStyles = {
    textShadow: `-4px -4px ${outlineColor}, -4px -2px ${outlineColor}, -4px 1px ${outlineColor},
  -4px 2px ${outlineColor}, -4px 4px ${outlineColor}, -2px -4px ${outlineColor}, -2px -2px ${outlineColor},
  -2px 0px ${outlineColor}, -2px 2px ${outlineColor}, -2px 4px ${outlineColor}, 0px -4px ${outlineColor},
  0px -2px ${outlineColor}, 0px 0px ${outlineColor}, 0px 2px ${outlineColor}, 0px 4px ${outlineColor},
  2px -4px ${outlineColor}, 2px -2px ${outlineColor}, 2px 0px ${outlineColor}, 2px 2px ${outlineColor},
  2px 4px ${outlineColor}, 4px -4px ${outlineColor}, 4px -2px ${outlineColor}, 4px 0px ${outlineColor},
  4px 2px ${outlineColor}, 4px 4px ${outlineColor}`,
  };

  return (
    <>
      <WidgetPreview
        isNotPreview
        showTitle={title == "true"}
        showArtists={artists == "true"}
        showTimestamp={timestamp == "true"}
        showAlbumCover={cover == "true"}
        textOutline={outline == "true"}
        textOutlineStyles={textOutlineStyles}
        widgetFont={fontFamily}
        widgetFontColor={fontColor}
        widgetSize={widgetSize}
      />
    </>
  );
};
export default Widget;
