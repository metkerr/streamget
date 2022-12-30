import { GetServerSideProps } from "next";
import WidgetPreview from "../components/widget_preview";

export const getServerSideProps: GetServerSideProps = async (context) => {
  let widgetSize;
  if (context.query.size === "Small") {
    widgetSize = { title: 3.75, artists: 2.25, cover: 165 };
  } else if (context.query.size === "Medium") {
    widgetSize = { title: 5.32, artists: 3.72, cover: 300 };
  } else {
    widgetSize = { title: 6.9, artists: 5.8, cover: 425 }; //large
  }
  return {
    props: {
      widgetSize,
      ...context.query,
    },
  };
};

interface WidgetProps {
  title: string;
  artists: string;
  cover: string;
  timestamp: string;
  widgetSize: { title: number; artists: number; cover: number };
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
  widgetSize,
  fontFamily,
  fontColor,
  outline,
  outlineColor,
}: WidgetProps) => {
  return (
    <>
      <WidgetPreview
        isNotPreview
        showTitle={title == "true"}
        showArtists={artists == "true"}
        showTimestamp={timestamp == "true"}
        showAlbumCover={cover == "true"}
        textOutline={outline == "true"}
        textOutlineStyles={JSON.parse(outlineColor)}
        widgetFont={fontFamily}
        widgetFontColor={fontColor}
        widgetSize={widgetSize}
      />
    </>
  );
};
export default Widget;
