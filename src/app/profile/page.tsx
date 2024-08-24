function Profile() {
  return (
    <>
      <div className="flex px-100 flex-col bg-#3f1919 w-1440px">
        <div className="flex items-start">
          <p className="text-2xl text-start">Профиль</p>
        </div>
        <div className="flex p-10 shadow-lg w-5/6">
          <img src="" alt="Картинка" width="197px" height="100px" />
          <div>
            <div>Даша</div>
            <p>Логин: Даша</p>
            <p>Пароль: лалала</p>
            <button
              type="button"
              className="text-gray-900 border bg-green-100 border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
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
