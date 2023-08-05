# Dua & Dhikr

A free RESTful API server that provides Duas and Dhikr following the Sunnah of the Prophet Muhammad (peace be upon him)

## بسم الله الرحمن الرحيم

## Requirements

- Node.js `>= 16.20.1`
- Yarn `>= 1.22.0`

## Getting Started

1. Clone this repository anywhere

   ```bash
   git clone https://github.com/fitrahive/dua-dhikr.git
   ```

2. Change current directory to this repository folder

   ```bash
   cd dua-dhikr
   ```

3. Install dependencies

   ```bash
   yarn install
   ```

4. Run locally

   - Development mode

     ```bash
     yarn dev
     ```

   - Production mode

     1. Build first

        ```bash
        yarn build
        ```

     2. Start app

        ```bash
        yarn start
        ```

### One-click Deployment

The fastest way to use it privately on PaaS available

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ffitrahive%2Fdua-dhikr%2Ftree%2Fmain)
[![Deploy with Cyclic](https://ik.imagekit.io/sooluh/cyclic.svg)](https://app.cyclic.sh/#/join/sooluh)

## Basic Usage

Base URL : [`http://localhost:5000`](https://dua-dhikr.vercel.app)

| Endpoint                                                              | Description                                                                    | Method |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------ |
| [`/:lang`](https://dua-dhikr.vercel.app/id)                           | Obtaining a list of Duas & Dhikr in a specific language                        | `GET`  |
| [`/:lang/:category`](https://dua-dhikr.vercel.app/id/daily-dua)       | Getting a table of contents based on language and category                     | `GET`  |
| [`/:lang/:category/:id`](https://dua-dhikr.vercel.app/id/daily-dua/1) | Retrieving details of a Dua/Dhikr based on language, category, and specific ID | `GET`  |

### Showcase

List of awesome projects powered by this API

- **Submit your showcase!**

### Ready to use!

List of server APIs ready to use publicly

- [https://dua-dhikr.vercel.app](https://dua-dhikr.vercel.app/id)

## Contribute

Complete or add Duas and Dhikr data according to the authentic Sunnah that you know, ensure the data is authentic!

> **Warning!**<br>
> Fear Allah! Your contributions will be accounted for in the Hereafter!

1. Clone this repository
2. Go to the `data/` directory and navigate to the existing language or add one, making sure to use ISO 639 code
3. Open the JSON file in the desired category
4. Make change carefully!
5. Commit the change using the command `yarn commit`.
6. Create a pull request
7. Wait for the owner to merge

### Note

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
