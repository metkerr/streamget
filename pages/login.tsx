import Image from "next/image";
import spotifyLogo from "../public/logo.png";

const Login = () => {
  return (
    <main className="flex min-h-screen min-w-screen">
      <div id="login-wrapper" className="m-auto text-center">
        <h1 className="text-[64px] font-semibold leading-[4.7rem]">
          Streamget
        </h1>
        <p className="text-xl font-medium">
          <span className="text-green-500">Spotify</span> widget for streaming
          apps
        </p>
        <button className="select-none flex m-auto gap-1 items-center bg-green-500 py-1.5 px-5 rounded mt-6 hover:bg-green-600 active:bg-green-700">
          <Image src={spotifyLogo} alt="spotify logo / login" width={17} />
          <span className="text-sm">Login</span>
        </button>
      </div>
    </main>
  );
};
export default Login;
