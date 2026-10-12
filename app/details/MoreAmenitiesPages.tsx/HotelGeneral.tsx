import React from 'react'

export default function HotelGeneral() {
  return (
    <div className='p-5'>
        <h1 className='mb-10 font-bold text-[18px]'>عمومی هتل</h1>
        <strong 
        className='text-gray-600'
        >امکاناتی که ارائه میشود</strong>
        <ul className='grid grid-cols-2 md:grid-cols-3 gap-6 text-[12px] my-5 text-gray-600'>
            <li>روم سرویس</li>
            <li>لابی</li>
            <li>آسانسور</li>
            <li>سیستم اعلام حریق</li>
            <li>پذیرش 24 ساعته</li>
            <li>کافی شاپ</li>
            <li>اینترنت در لابی</li>
            <li>خدمات خانه داری</li>
            <li>لاندری</li>
            <li>کافی نت</li>
            <li>خدمات باربری</li>
            <li>صبحانه</li>
            <li>سرویس بهداشتی فرنگی در لابی</li>
            <li>سرویس بهداشتی ایران در لابی</li>
            <li>نمازخانه</li>
            <li>سیستم تهویه مطبوع</li>
            <li>تلفن در لابی</li>
            <li>پله اضطراری</li>
        </ul>
        <strong className='text-gray-600'>امکاناتی که ارائه نمیشود</strong>
        <ul className='grid grid-cols-2 gap-6 text-[12px] my-5 text-gray-600 *:line-through'>
            <li>پارکینگ</li>
            <li>فضای سبز</li>
            <li>تلویزیون در لابی</li>
            <li>مینی بار با هزینه</li>
            <li>سرویس بهداشتی فرنگی در طبقات</li>
            <li>خودپرداز</li>
        </ul>

    </div>
  )
}
