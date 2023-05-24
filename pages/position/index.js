export default function positionPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-[500px] w-[500px] border border-black relative">
        <div className="absolute top-[40%] left-0 h-[100px] w-[100px] bg-black z-20"></div>
        <div className="h-[50px] w-[50px] absolute top-[30%] left-0 bg-green-600 z-10"></div>
      </div>
    </div>
  );
}
