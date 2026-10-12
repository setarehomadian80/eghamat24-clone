# 🏨 Eghamat24 Clone

<div align="center">

<img src="./public/readme/cover.png" width="900"/>

<br/>

### A modern Frontend clone of Eghamat24 accommodation platform

Built with Next.js, React, TypeScript and Tailwind CSS

</div>


---

# 📸 Project Gallery

<div align="center">

<table>

<tr>
<td>
<img src="./public/readme/Screenshot%20(97).png" width="250"/>
</td>

<td>
<img src="./public/readme/Screenshot%20(98).png" width="250"/>
</td>

<td>
<img src="./public/readme/Screenshot%20(99).png" width="250"/>
</td>

<td>
<img src="./public/readme/Screenshot%20(100).png" width="250"/>
</td>
</tr>


<tr>
<td>
<img src="./public/readme/Screenshot%20(101).png" width="250"/>
</td>

<td>
<img src="./public/readme/Screenshot%20(102).png" width="250"/>
</td>

<td>
<img src="./public/readme/Screenshot%20(103).png" width="250"/>
</td>

<td>
<img src="./public/readme/Screenshot%20(104).png" width="250"/>
</td>
</tr>


<tr>
<td>
<img src="./public/readme/Screenshot%20(105).png" width="250"/>
</td>

<td>
<img src="./public/readme/Screenshot%20(106).png" width="250"/>
</td>

<td>
<img src="./public/readme/Screenshot%20(112).png" width="250"/>
</td>

<td>
<img src="./public/readme/Screenshot%20(113).png" width="250"/>
</td>
<td>
</td>

<td>
</td>
</tr>


</table>


<br/>


## 🖥️ Desktop Preview


<table>

<tr>

<td>
<img src="./public/readme/Screenshot%20(108).png" width="500"/>
</td>

<td>
<img src="./public/readme/Screenshot%20(107).png" width="500"/>
</td>

</tr>

</table>


<br/>


<img src="./public/readme/Screenshot%20(109).png" width="700"/>


</div>

# 🏨 اقامت ۲۴ | Eghamat24 Clone


## معرفی پروژه

این پروژه یک نسخه فرانت‌اند از وب‌سایت اقامت ۲۴ است که با هدف تمرین ساخت یک محصول واقعی، طراحی رابط کاربری، مدیریت داده‌ها و پیاده‌سازی منطق‌های سمت کاربر توسعه داده شده است.

تمرکز اصلی این پروژه روی ساخت یک تجربه کاربری نزدیک به یک وب‌سایت رزرو اقامتگاه، طراحی واکنش‌گرا و ایجاد ساختار قابل توسعه بوده است.


---

## ✨ امکانات پیاده‌سازی شده

- طراحی کامل راست‌چین برای زبان فارسی
- سازگاری با موبایل، تبلت و دسکتاپ
- صفحه اصلی شامل بنر و اسلایدر
- نمایش هتل‌ها، اقامتگاه‌ها و تورها
- صفحه جزئیات اقامتگاه
- نمایش گالری تصاویر
- جستجوی شهر و نوع سرویس
- فیلتر کردن هتل‌ها
- مرتب‌سازی نتایج
- طراحی کامپوننت‌های قابل استفاده مجدد


---

## 🛠 تکنولوژی‌ها

```text
Next.js
React
TypeScript
Tailwind CSS
Material UI
Shadcn UI
Framer Motion
Swiper
Lucide React
React Multi Date Picker
```


---

# 🧠 بخش‌هایی که دارای منطق هستند

در این پروژه برخی قسمت‌ها فقط طراحی ظاهری نیستند و منطق واقعی سمت کاربر برای آن‌ها پیاده‌سازی شده است.


## 🔍 سیستم جستجو

مسیر:

```text
components/SearchBoxMainPage
```

شامل:

- انتخاب نوع سرویس
- انتخاب شهر
- انتخاب تاریخ
- مدیریت وضعیت انتخاب‌ها


---

## 🏨 فیلتر هتل‌ها

مسیر:

```text
components/PropertyFilterSidebar
```

قابلیت‌ها:

- فیلتر بر اساس تعداد ستاره
- فیلتر محدوده قیمت
- فیلتر منطقه
- نمایش تعداد نتایج فیلتر شده


---

## ↕️ مرتب‌سازی

امکان مرتب‌سازی لیست‌ها بر اساس:

- ارزان‌ترین
- گران‌ترین
- بالاترین امتیاز


---

## 📄 صفحات جزئیات

مسیر:

```text
app/details/[slug]
```

صفحات جزئیات با استفاده از شناسه متنی هر هتل یا اقامتگاه ساخته شده‌اند.

هر صفحه اطلاعات مربوط به همان آیتم را از داده‌های موجود دریافت می‌کند.


---

## 🖼 گالری تصاویر

مسیر:

```text
components/HotelGallery
```

شامل:

- نمایش تصویر اصلی
- نمایش تصاویر کوچک
- تغییر تصویر انتخاب شده
- نمایش تصاویر مرتبط با هر اقامتگاه


---

# 📂 مدیریت داده‌ها

به دلیل نداشتن سرور و بک‌اند واقعی، اطلاعات پروژه به صورت فایل‌های محلی نگهداری شده‌اند.


مسیر:

```text
data
```

شامل:

```text
hotels.json
accommodation.json
cities.json
tours.json
```


---

# ⚠️ درباره اطلاعات پروژه

تمام اطلاعات استفاده شده در این پروژه ساختگی هستند و فقط برای اهداف نمایشی و آزمایش رابط کاربری استفاده شده‌اند.

اطلاعات زیر واقعی نیستند:

- نام هتل‌ها
- قیمت‌ها
- امتیازها
- تعداد نظرات
- امکانات
- تصاویر


این پروژه به هیچ سیستم رزرو واقعی، پرداخت آنلاین یا دیتابیس متصل نیست.


---

# 🚧 محدودیت‌های پروژه

این پروژه یک نمونه نمایشی از بخش فرانت‌اند است.


موارد زیر در پروژه وجود ندارند:

- بک‌اند واقعی
- دیتابیس
- سیستم ورود کاربران
- پرداخت آنلاین
- رزرو واقعی


همچنین تمام بخش‌های سایت دارای منطق کامل نیستند.

بخش‌هایی که منطق واقعی دارند:

- جستجو
- فیلتر
- مرتب‌سازی
- صفحات جزئیات
- گالری تصاویر
- منوی واکنش‌گرا


---

# 🎯 هدف ساخت پروژه

هدف از ساخت این پروژه:

- تمرین عمیق‌تر Next.js و React
- تقویت TypeScript
- تجربه ساخت یک محصول نزدیک به پروژه‌های واقعی
- تمرین مدیریت داده‌ها
- ساخت کامپوننت‌های قابل توسعه
- آماده‌سازی نمونه کار برای موقعیت‌های فرانت‌اند


---

# 👩‍💻 توسعه‌دهنده

**Setare Homadian**

Frontend Developer


GitHub:

https://github.com/setarehomadian80
