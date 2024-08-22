import ContentWrapper from "@/app/components/ContentWrapper";
import Header from "@/app/components/Header/Header";
import ProgressBar from "@/app/components/ProgressBar";

function WorkoutNameId() {
  const workoutName = "Йога";
  const breadcrumbs = ["Красота и здоровье", "Йога на каждый день", "2 день"];
  const exercisesText = "Упражнения тренировки 2";
  const exercises: string[][] = [
    ["Наклоны вперед ", "Наклоны назад", "Поднятие ног, согнутых в коленях"],
    ["Наклоны вперед ", "Наклоны назад ", "Поднятие ног, согнутых в коленях"],
    ["Наклоны вперед ", "Наклоны назад ", "Поднятие ног, согнутых в коленях"],
  ];

  return (
    <ContentWrapper>
      <Header />
      <h1 className="text-[60px] font-medium leading-[60px]">{workoutName}</h1>
      <ul className="mt-6 flex flex-row gap-2">
        {breadcrumbs.map((breadcrumb, i) => (
          <li
            key={i}
            className="cursor-pointer text-[32px] underline after:cursor-default after:ps-2 after:no-underline after:content-['/'] last:after:content-[]"
          >
            {breadcrumb}
          </li>
        ))}
      </ul>
      <iframe
        className="mt-10 h-[639px] w-full rounded-[30px]"
        width="720"
        height="405"
        src="https://rutube.ru/play/embed/b257aa9771b72bb2e14e1a3e15be4137/"
        frameBorder="0"
        allow="clipboard-write; autoplay"
      ></iframe>
      <section className="mt-10 rounded-[30px] bg-color-component-background p-10 shadow-sm">
        <h2 className="text-[32px] leading-[32px]">{exercisesText}</h2>
        <div className="mt-5 grid grid-cols-3 gap-[60px]">
          {exercises.map((exercisesBlock, index) => (
            <div key={index} className="flex flex-col gap-5">
              {exercisesBlock.map((exercise, i) => (
                <ProgressBar
                  key={i}
                  text={exercise}
                  progress={Math.round(Math.random() * 100)}
                />
              ))}
            </div>
          ))}
        </div>
        <button className="mt-10 rounded-[46px] bg-color-acсent px-6 py-4 text-xl font-normal hover:bg-color-acent-hover">
          Заполнить свой прогресс
        </button>
      </section>
    </ContentWrapper>
  );
}

export default WorkoutNameId;
