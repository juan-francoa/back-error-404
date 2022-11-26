let shows = [
    {
        hotelId:"6372a909663656aaafccfea4",
        name:"Virus in live",
        description:"It's an Argentine band from the New Wave current of the '80s.",
        photo:"https://media.ambito.com/p/6ec3c46b6d11925d817053ad2aab5c13/adjuntos/239/imagenes/040/175/0040175070/virusjpg.jpg",
        price:10,
        date: new Date (2022-11-11),
        userId:"636e63981471b35a5c064d4c"
    },
    {
        hotelId:"6372a909663656aaafccfea3",
        name:"El Oficial Gordillo",
        description:"Miguel Martín presents his new show Gordillo Amigo. A show full of humor for the whole family.",
        photo:"https://storage.lacapitalmdp.com/2019/04/GORDILLO-1-1024x683.jpg",
        price:12,
        date:new Date (2022-11-13),
        userId:"636e63981471b35a5c064d4b" 
    },
    {
        hotelId:"6372a909663656aaafccfea5",
        name:"Gloria Trevi Isla Divina Tour",
        description:"It's the ninth international tour of the singer Gloria Trevi to promote her new record material Isla Divina.",
        photo:"https://www.mdzol.com/u/fotografias/m/2022/4/11/f768x1-1205159_1205286_11.jpg",
        price:70,
        date:new Date (2022-11-11),
        userId:"636e63981471b35a5c064d4b" 
    },
    {
        hotelId:"6372a909663656aaafccfea5",
        name:"Billy Joel",
        description:"It's an American singer, songwriter, and pianist. Billy has recorded many popular hits and scored over 40 hits since 1973.",
        photo:"https://www.billboard.com/wp-content/uploads/media/billy-joel-msg-aug-28-2019-billboard-1548.jpg",
        price:579,
        date:new Date (2022-11-23),
        userId:"636e63981471b35a5c064d4b" 
    },
    {
        hotelId:"6372a909663656aaafccfea9",
        name:"Siamiss djs",
        description:"Started djing in 2000 and been residents of the Pop Bar at Razzmatazz clubs for 10 years",
        photo:"https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/259406/325863_790505.png",
        price:20,
        date:new Date (2022-11-8),
        userId:"636e63981471b35a5c064d4d" 
    },
    {
        hotelId:"6372a909663656aaafccfea9",
        name:"The Phantom Of The Opera",
        description:"America",
        photo:"https://cnnespanol.cnn.com/wp-content/uploads/2022/01/fantasma-opera.png",
        price:150,
        date:new Date (2022-11-19),
        userId:"636e63981471b35a5c064d4d" 
    },
]

require("dotenv").config()
require("../../config/database")
const Show = require("../Show")

shows.forEach(e =>
    Show.create({
        hotelId: e.hotelId,
        name: e.name,
        description: e.description,
        photo: e.photo,
        price: e.price,
        date: e.date,
        userId: e.userId
    })
)