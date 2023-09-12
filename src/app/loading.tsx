import Image from "next/image";
type LoadingProps = {};

export default function Loading({}: LoadingProps) {
  return (
    <div className=" flex justify-center">
      <Image
        className="h-96"
        src="spinner.svg"
        alt="loading..."
        width={170}
        height={170}
      />
    </div>
  );
}
