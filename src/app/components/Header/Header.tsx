export default function Header() {
  return (
    <>
      <div className="flex flex-row">
        <div className="ml-[140px] mt-[50px]">
          <img
            className=""
            src="/logo.png"
            alt="course_picture"
            width="220px"
            height="35px"
          />
          <p className="mt-[15px] w-[327px] text-lg text-[#7d7d7d]">
            Онлайн-тренировки для занятий дома
          </p>
        </div>
        <div className="ml-[730px] mt-[50px]">
          <div className="btn-green h-[52px] w-[103px] px-4 py-2 text-center text-2xl font-semibold">
            Войти
          </div>
        </div>
      </div>
    </>
  );
}
