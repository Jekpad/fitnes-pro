import Card from "../Card/Card";

export default function Main() {
  return (
    <div className="mt-[60px] flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-[10px]">
        <h1 className="text-6xl font-medium leading-[60px]">
          Начните заниматься спортом и улучшите качество жизни
        </h1>
        <div className="flex gap-[10px] bg-[#BCEC30] px-[16px] py-[20px] text-[32px] font-normal leading-[35px]">
          Измени своё тело за полгода!
        </div>
      </div>
      <div className="mt-[50px] flex flex-wrap justify-start gap-[40px]">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="rounded-[46px] bg-[#BCEC30] px-[26px] py-[16px]">
        Наверх ↑
      </div>
    </div>
  );
}
