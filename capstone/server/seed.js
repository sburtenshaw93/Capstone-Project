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
            ),
            (
                'Sensei Trail',
                'https://www.alltrails.com/trail/us/utah/sensei-trail-to-fox-canyon',
                'https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMzI2ODQ4ODkvYmVkOTZiNjJhZjEzYWM3YjQ5Nzc3YjM3YWMwMmFlMWYuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ0LCJoZWlnaHQiOjYyNCwiZml0IjoiY292ZXIifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0='
            ),
            (
                'Lake Mountain Southern Approach',
                'https://www.alltrails.com/trail/us/utah/lake-mountain-southern-approach',
                'https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMjYyMzMxMzkvYjkyZGIwMzEzYTAxOGRlZmYwMTU3YjYxZjlmNDUxNzguanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ0LCJoZWlnaHQiOjYyNCwiZml0IjoiY292ZXIifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0='
            );
         `).then(() => {
            console.log('db reset succeeded')
            res.sendStatus(200)
         }).catch(err => console.log('error seeding DB', err))
    }
}
