<a href="https://s.id/standwithpalestine"><img alt="I stand with Palestine" src="https://cdn.jsdelivr.net/gh/Safouene1/support-palestine-banner@master/banner-project.svg" width="100%" /></a>

# Dua & Dhikr

A free RESTful API server that provides Duas and Dhikr following the Sunnah of the Prophet Muhammad (peace be upon him)

## بسم الله الرحمن الرحيم

[Bahasa Indonesia](./README.id.md)

## Requirements

- Node.js `>= 20.x`
- npm

## Getting Started

1. Clone this repository

   ```bash
   git clone https://github.com/fitrahive/dua-dhikr.git
   ```

2. Move to the repository directory

   ```bash
   cd dua-dhikr
   ```

3. Install dependencies

   ```bash
   npm ci
   ```

4. Run locally

   - Development mode

     ```bash
     npm run dev
     ```

   - Production mode

     1. Build first

        ```bash
        npm run build
        ```

     2. Start app

        ```bash
        npm run start
        ```

### One-click Deployment

The fastest way to use it privately on PaaS available

<a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ffitrahive%2Fdua-dhikr%2Ftree%2Fmain">
  <img alt="Deploy with Vercel" src="https://vercel.com/button" height="32" />
</a>
<a href="https://app.koyeb.com/deploy?type=git&repository=github.com/fitrahive/dua-dhikr&branch=main&name=dua-dhikr">
  <img alt="Deploy with Koyeb" src="https://www.koyeb.com/static/images/deploy/button.svg" height="32" />
</a>
<a href="https://render.com/deploy">
  <img alt="Deploy with Render" src="https://render.com/images/deploy-to-render-button.svg" height="32" />
</a>

## Basic Usage

Base URL : [`http://localhost:3000`](https://dua-dhikr.vercel.app)

| Endpoint                                                                       | Description                                                | Method |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------- | ------ |
| [`/languages`](https://dua-dhikr.vercel.app/languages)                         | Retrieve a list of supported languages                     | `GET`  |
| [`/categories`](https://dua-dhikr.vercel.app/categories)                       | Retrieve a list of dua & dhikr categories                  | `GET`  |
| [`/categories/:slug`](https://dua-dhikr.vercel.app/categories/daily-dua)       | Retrieve a list of dua & dhikr based on a category         | `GET`  |
| [`/categories/:slug/:id`](https://dua-dhikr.vercel.app/categories/daily-dua/1) | Retrieve details of a dua & dhikr based on category and id | `GET`  |

> [!IMPORTANT]
> To retrieve data in supported language, use the `Accept-Language` header. By default, it will use `id` (Indonesian).

### Showcase

List of awesome projects (اللّٰهُمَّ بَارِكْ) powered by this API

- [**Kaaba**](https://github.com/sooluh/kaaba)<br>
  Authentic sunnah dua & dhikr app (web based) by [@sooluh](https://github.com/sooluh)

### Ready to use!

List of server APIs ready to use publicly

- [https://dua-dhikr.vercel.app](https://dua-dhikr.vercel.app/categories)
- [https://dua-dhikr.onrender.com](https://dua-dhikr.onrender.com/categories)

## Contribute

Complete or add Duas and Dhikr data according to the authentic Sunnah that you know, ensure the data is authentic!

> [!WARNING]
> Fear Allah! Your contributions will be accounted for in the Hereafter!

1. Fork this repository
2. Open `data/dua-dhikr` and select an available category
3. Open the JSON file in the desired language, or add a new one with the `ISO 639` code
4. Make changes carefully!
5. Commit the change using the command `npm run commit`.
6. Submit a pull-request
7. Wait for us to perform the merge

#### Columns description

- `title` contains the title of the Dua/Dhikr.
- `arabic` contains the Dua/Dhikr in Arabic script.
- `latin` contains the transliteration from Arabic script to Latin characters.
- `translation` contains the translation in the desired language.
- `notes` contains notes (e.g., Recite 3x).
- `fawaid` contains the benefits or virtues of this Dua/Dhikr.
- `source` contains the reference to the authentic Hadith used.

## License

This project is licensed under [MIT License](./LICENSE).<br>

## جزاكما الله خيرا كثيرا
