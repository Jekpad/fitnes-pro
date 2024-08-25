"use client"
import { useState } from "react";
import CourseItem from "../components/CourseItem/course";
import Header from "../components/Header/Header";
import ModalSelect from "../components/ModalSelect/ModalSelect";

function Profile() {
  const courses = [
    { name: "Йога", length: 25, time: '20-50 мин/день', progress: 40, difficulty: '3'},
    { name: "Стретчинг", length: 25, time: '20-50 мин/день', progress: 0, difficulty: '3'},    
    { name: "Зумба", length: 25, time: '20-50 мин/день', progress: 100, difficulty: '3'},
  ];
  const status = (progress: any) => {
    if (progress > 0 && progress < 100) {
      return 'Продолжить'
    } else if (progress == 100) {
      return 'Начать заново'
    } else {
      return 'Начать тренировки'
    }
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);


  return (
    <>
    <Header />
      <div className="flex flex-col items-center bg-[#fafafa] w-full h-[100%]">
        <div className="w-5/6 mt-[50px]">
          <p className="text-[40px] text-start">Профиль</p>
        </div>
        <div className="flex p-10 shadow-lg w-5/6 bg-white rounded-2xl mt-4">
          <img src="" alt="Картинка" width="197px" height="100px" />
          <div>
            <div className="text-[32px]">Даша</div>
            <p className="text-[18px]">Логин: Даша</p>
            <p className="text-[18px]">Пароль: лалала</p>
            <button
              type="button"
              className="text-[15px] text-black border bg-[#bcec30] border-none focus:outline-none hover:bg-[#bcec30]-100 focus:ring-4 focus:ring-gray-100 font-thin rounded-full px-5 py-2.5 me-2 mb-2"
            >
              Изменить пароль
            </button>
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-thin rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600"
            >
              Выйти
            </button>
          </div>
        </div>
        <div className="w-5/6 mt-8">
          <h2 className="text-[32px] mb-4">Мои курсы</h2>
          <div className="flex justify-between">
            {courses.map((course, index) => (
              <div onClick={handleOpenModal}>
                <CourseItem key={index} course={course} status={status(course.progress)}/>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ModalSelect isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

export default Profile;
