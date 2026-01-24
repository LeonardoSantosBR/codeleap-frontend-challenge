import { TailSpin } from "react-loader-spinner";

export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-300/55">
      <TailSpin
        height="80"
        width="80"
        color="blue"
        ariaLabel="loading"
      />
    </div>
  );
}