const Sequelize = require("sequelize");
require('dotenv').config()

const {CONNECTION_STRING } = process.env;

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
            DROP TABLE if exists trails;
            CREATE TABLE trails (
                ID SERIAL PRIMARY KEY,
                name TEXT,
                link TEXT,
                image TEXT
            );
            DROP TABLE if exists running;
            CREATE TABLE running (
                ID SERIAL PRIMARY KEY,
                name TEXT,
                link TEXT,
                image TEXT
            );
            DROP TABLE if exists camping;
            CREATE TABLE camping (
                ID SERIAL PRIMARY KEY,
                name TEXT,
                link TEXT,
                image TEXT
            );
            DROP TABLE if exists lakes;
            CREATE TABLE lakes (
                ID SERIAL PRIMARY KEY,
                name TEXT,
                link TEXT,
                image TEXT
            );
            DROP TABLE if exists wishList;
            CREATE TABLE wishList (
                ID SERIAL PRIMARY KEY,
                name TEXT,
                completed BOOLEAN
            );
            DROP TABLE IF EXISTS createUser;
            CREATE TABLE IF NOT EXISTS createUser (
                ID SERIAL PRIMARY KEY,
                username TEXT,
                password TEXT,
                phoneNumber TEXT,
                zipcode TEXT
            );

            INSERT INTO trails (name, link, image)
            VALUES (
                'SilverLake',
                'https://www.alltrails.com/trail/us/utah/silver-lake-trail?search=true',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAb4cUPO17lBJ_RQEOYMZu3kssVAzQUtbXhvdjPoWQFg&usqp=CAU&ec=48665701'
            ),
            (
                'Timpanogos Cave',
                'https://www.alltrails.com/parks/us/utah/timpanogos-cave-national-monument?search=true',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmKYvjVI6YMeVkWvSCCT4ORSwk2qHmzJIFr9WJk986VA&usqp=CAU&ec=48665701'
            ),
            (
                'Stewart Falls',
                'https://www.alltrails.com/explore?b_tl_lat=40.47201756254776&b_tl_lng=-111.72342387285164&b_br_lat=40.30021147912697&b_br_lng=-111.48584452714852">Stewart Falls',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSjfnqB_34WbMkBnNG7RLwd_4nnAL-_3IcranIvMwU_w&usqp=CAU&ec=48665701'
            );

            INSERT INTO running (name, link, image)
            VALUES (
                'Salt Lake Marathon April 22nd',
                'https://saltlakecitymarathon.com/race-info-maps/schedule/',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdkJSDvxsQiG0AJGW8uCPT514cAdAgjFW-mVHvgJfWA&usqp=CAU&ec=48665701'
            ),
            (
                'Utah Valley Marathon June 3rd',
                'https://www.utahvalleymarathon.com',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2FJxuGDpqfqPTJq0pQSiaBFmClgzLnavI0yfpDRAPyQ&usqp=CAU&ec=48665701'
            ),
            (
                'Timp Half Marathon June 24th',
                'https://runtasticevents.com/races/timp-half/',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzPpaiSwewNpwKDIrBQFLFB3tz7QpoBd-dAocGX102sg&usqp=CAU&ec=48665701'
            );

            INSERT INTO camping (name, link, image)
            VALUES (
                'Moab', 
                'https://www.recreation.gov/search?q=Moab%20&start=0',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxfvam5J_qJgda8dKsCDmuOOIsCHpwHFCLnrGXZfpHtg&usqp=CAU&ec=48665701'
            ),
            (
                'Bryce Canyon',
                'https://www.recreation.gov/camping/gateways/2599',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5LKkN_Qm-KvjYGRsUxoJd8yZOV5aLyZR0A_ViLFl9mA&usqp=CAU&ec=48665701'
            ),
            (
                'Timpanogos Campground',
                'https://www.recreation.gov/camping/campgrounds/234188',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi6rXxl-GpPIXDIZOpzdAxA3dix_zUGgJBP5PemKUslw&usqp=CAU&ec=48665701'
            );

            INSERT INTO lakes (name, link, image)
            VALUES (
                'Silver Lake',
                'https://www.google.com/maps/dir//Silver+Lake,+Utah/@40.6041735,-111.5889376,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x8752719c1cea5faf:0xb2dd8d320eb70ed!2m2!1d-111.5889376!2d40.6041735!3e0',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYE8txfV_phXD5WX1gcAMs_JP7t5q3Oe6ksImsilm5Q&usqp=CAU&ec=48665701'
            ),
            (
                'Tibble Fork',
                'https://www.google.com/maps/dir//Tibble+Fork+Reservoir,+Utah/@40.4823404,-111.6440872,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x875277e871142ce5:0x17d4525eb61ae2cc!2m2!1d-111.6440872!2d40.4823404!3e0',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5SWvoXMd7KG6kAvDRHFug_P5piE4GGuEj7lrI3cnPjQ&usqp=CAU&ec=48665701'
            ),
            (
                'Deer Creek',
                'https://www.google.com/maps/dir//Deer+Creek+Reservoir,+Utah/@40.44528,-111.4961523,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x874d8b1599076d0f:0xf0cff7c6fe750e11!2m2!1d-111.4961523!2d40.44528!3e0',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtRAjfxxOxPNv05kS1RvW34m9HmL9WGBtDLoaQtyI9cg&usqp=CAU&ec=48665701'
            );

         `).then(() => {
            console.log('db reset succeeded')
            res.sendStatus(200)
         }).catch(err => console.log('error seeding DB', err))
    }
}
