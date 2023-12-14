import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className='flexCenter flex-col'>
      <div className='padding-container max-container w-full b-24'>
        <Image 
          src='/svg/camp.svg'
          alt='camp'
          width={50}
          height={50}
        />
        <p className='uppercase regular-18 -mt-1 mb-3 text-green-50'>
          МЫ ЗДЕСЬ ДЛЯ ВАС
        </p>
        <div className='flex flex-wrap justify-between items-center gap-5 lg:gap-10'>
          <h2 className='bold-40 lg:bold-64 xl:max-w-[480px]'>
            Направим вас на легкий путь
          </h2>
          <p className='regular-16 text-gray-30 xl:max-w-[520px]'>
            Только с приложением hilink вы больше не будете теряться и теряться снова, ведь мы уже поддерживаем офлайн-карты, 
            когда в поле нет подключения к интернету. 
            Пригласите своих друзей, родственников и друзей весело провести время в пустыне, 
            пройти через долину и достичь вершины горы.
          </p>
        </div>
      </div>

      <div className='flexCenter max-container relative w-full'>
        <Image
          className='w-full object-cover 2xl:rounded-5xl'
          src='/images/boat.png'
          alt='boat'
          width={1440}
          height={580}
        />

        <div className='absolute p-8 l-5 pr-7 bg-white flex gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20'>
          <Image 
            className='h-full w-auto'
            src='/svg/meter.svg'
            alt='meter'
            width={16}
            height={158}
          />
          <div className='flexBetween flex-col'>
            <div className='flex w-full flex-col'>
              <div className='flexBetween w-full'>
                <p className='regular-16 text-gray-20 mr-6'>
                 До место назначения
                </p>
                <p className='bold-16 text-green-50'>
                  48 мин
                </p>
              </div>
              <p className='bold-20 mt-2'>
                Aguas Calientes
              </p>
            </div>
            <div className='flex w-full flex-col'>
              <div className='flexBetween w-full'>
                <p className='regular-16 text-gray-20 mr-6'>
                 Начало пути
                </p>
              </div>
              <p className='bold-20 mt-2'>
                Wonorejo Pasuruan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide