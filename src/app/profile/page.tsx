function Profile() {
  return (
    <>
      <div className="flex px-100 flex-col bg-[#fafafa;] w-[1440px] h-[1559px]">
      <div className="top-[145px]">ШАПКА</div>
        <div className="flex items-start">
          <p className="text-[40px] text-start">Профиль</p>
        </div>
        <div className="flex p-10 shadow-lg w-5/6 bg-[white] rounded-2xl">
          <img src="" alt="Картинка" width="197px" height="100px" />
          <div>
            <div className="text-[32px]">Даша</div>
            <p className="text-[18px]">Логин: Даша</p>
            <p className="text-[18px]">Пароль: лалала</p>
            <button
              type="button"
              className="text-black border bg-[#bcec30] border-none focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full px-5 py-2.5 me-2 mb-2 dark:hover:border-gray-600 dark:focus:ring-gray-700 text-[18px]">
              Изменить пароль
            </button>
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              Выйти
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
