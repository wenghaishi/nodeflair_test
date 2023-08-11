import { RevolvingDot } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="bg-white rounded-lg w-full hidden h-[97.7vh] lg:flex text-4xl items-center justify-center text-center sticky top-2">
      <RevolvingDot
        height="400"
        width="400"
        radius="60"
        color="#4fa94d"
        secondaryColor=""
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
export default Loading;
