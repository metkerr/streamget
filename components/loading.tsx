import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface LoadingProps {
  large?: boolean;
}

const Loading = ({ large = false }: LoadingProps) => {
  return (
    <span className="m-auto">
      <AiOutlineLoading3Quarters
        className="animate-spin"
        size={large ? 28 : 18}
      />
    </span>
  );
};
export default Loading;
