let hotels = [
    {
        name:"Ayenda 1250 Perlatto",
        photo:["https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/231564691.jpg?k=00f1e50a46cca70963db01334ce5cb1dffbcb09f8ada59bc47d7cece322d7c72&o=&hp=1", "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/231564793.jpg?k=e19bfd93ee5606885f0f803f45a8ced9903c9060fe01c8e9404abce354d174d1&o=&hp=1", "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/231565084.jpg?k=ee01f9bbc5a32b5f3a7f3b97d193dbb9e0777e3aaa6d0bcfc6c772c4a43ead66&o=&hp=1"],
        capacity:50,
        cityId:"636eef8b7378476e793e8f03",
        userId:"636e63981471b35a5c064d4d"   
    },
    {
        name:"Amérian Cordoba Park Hotel",
        photo:["https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/30733066.jpg?k=ed2093ef061632253d76da66991cd9e9149ac47e22a01c5d915a20da59394aa6&o=&hp=1", "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/83350699.jpg?k=02adbbdc44ce1b83a3062bc10de15a73884f467a3808bbd285e402f6d093507c&o=&hp=1", "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/8459204.jpg?k=491980225b534bbd1de2cac195e642fb0bdf5964e758c3c1316f71b1068a1387&o=&hp=1"],
        capacity:92,
        cityId:"636eef8b7378476e793e8f06",
        userId:"636e63981471b35a5c064d4b" 
    },
    {
        name:"Ariston Hotel",
        photo:["https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/10481646.jpg?k=bd4d6b3d172c81922fdb183baf93ccbb732a3210d2abcfddcd6cc10074a6d776&o=&hp=1", "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/85903417.jpg?k=c3e723de387916ec59e68d1e98ac969dc8854c833b7b2933c40fc172f91279f8&o=&hp=1", "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/10481624.jpg?k=3300fb8863d68cc53aa06fa044105d6e243598b846cdd2786c9696ff2c076e33&o=&hp=1"],
        capacity:160,
        cityId: "636eef8b7378476e793e8f05",
        userId:"636e63981471b35a5c064d4c" 
    },
    {
        name:"Royalton New York",
        photo:["https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/205408681.jpg?k=bfdeb2f418112b7ad30a539e03193030612743db57d5c17b86fc60741ff08aa8&o=&hp=1", "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/15272904.jpg?k=c68fc8946a033ebed35bcb5180e45e7f708b17bd34bce9533a8ad395404577a8&o=&hp=1", "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/205411461.jpg?k=7a8b7e666e1302a2564548914ca2eb1aad154cd63f7cab24828e4cf20a56a6da&o=&hp=1"],
        capacity:336,
        cityId: "636eef8b7378476e793e8f06",
        userId:"636e63981471b35a5c064d4b"
    },
    {
        name:"Renaissance Cancun Resort & Marina",
        photo:["https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/385485291.jpg?k=121cd45bfb42eb02f2f508403e8c9c5f0c61660ebbae48196d0869f10b572e6f&o=&hp=1", "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/203874045.jpg?k=c198a20100d69ecd550465c2bdbd76060523f42a3d0a052855fc679cf29a910a&o=&hp=1", "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/201525947.jpg?k=d7582fe2f91a7214937b0531ed6dabfa3c72ec6c76738a4beb07a0068096b513&o=&hp=1"],
        capacity:360,
        cityId: "636eef8b7378476e793e8f07",
        userId:"636e63981471b35a5c064d4d"
    },
    {
        name:"Hotel Amancay",
        photo:["https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/15349907.jpg?k=da32c00dfbec5efed6575095bd3839283931db5f378597309c8ede4c04d6ac4f&o=&hp=1", "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/317856189.jpg?k=c7249e1a2f66206d12fd9d415908b61b4b0187f895e5b8a094c80c777c07d95f&o=&hp=1", "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/317856201.jpg?k=77c3e02c09628910f6af9d876cba6f7e32b5f34d411afa0a8cdc074a0c50d630&o=&hp=1"],
        capacity:150,
        cityId: "636eef8b7378476e793e8f08",
        userId:"636e63981471b35a5c064d4b"
    },
    {
        name:"Leonardo Royal Hotel Amsterdam",
        photo:["https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/195571737.jpg?k=9d03bc8d56dad1026387d87752821f5e73855c941d3f6760489d387326f0de6c&o=&hp=1", "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/195571943.jpg?k=ce6a5bd510b48f5f0a2d13e2fed323a4f3a61836bcc5e8a32cf508e60674e3b9&o=&hp=1", "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/195569283.jpg?k=10c9a62731c7198d6151644a5a1dc2eaf6fdc10621d4e7aabbf4e44e718e31c0&o=&hp=1"],
        capacity:1400000,
        cityId: "636eef8b7378476e793e8f09",
        userId:"636e63981471b35a5c064d4c"
    },
    {
        name:"Hotel Market",
        photo:["https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/214640588.jpg?k=077f488af958cccf6219ea5091d4cf132968e365d7ca75b654b3599a25bfd244&o=&hp=1", "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/24736314.jpg?k=ef1ce8055bd7e9f0183583057f6a2b81bbc1f6ddceda2adea9b46c70cda6fb02&o=&hp=1", "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/214640361.jpg?k=4775441beed995a3067a2b631c89390c985e794380ad2baeb97929aa2fd0a397&o=&hp=1"],
        capacity:132,
        cityId: "636eef8b7378476e793e8f0a",
        userId:"636e63981471b35a5c064d4d"
    },
    {
        name:"Generator London",
        photo:["https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/91731070.jpg?k=e7d544da557e4a2d9c5246bd1fd44e42924cf824c3de1ee008d3bf451cfd2aae&o=&hp=1", "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/91727806.jpg?k=78073a1be8301cef0be9d2c2be54e20efb40f8b35712c7768ea33f45e1863061&o=&hp=1", "url3https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/91727818.jpg?k=b1d4ec2060b460be9cb830b7695f4abc4d9f055b20b2f0474d67f32014c89816&o=&hp=1"],
        capacity:300,
        cityId: "636eef8b7378476e793e8f0b",
        userId:"636e63981471b35a5c064d4e"
    },
    {
        name:"Mantra Parramatta",
        photo:["https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/297920621.jpg?k=340d734e1a98ad44a7479a6379bef310e8c7b90fdd99e391c76b0be4d2f994fa&o=&hp=1", "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/128004410.jpg?k=022629ed3a452f7a12a75ea5f0fec5bb5e3242850c7951e0335b0a5c0d4b744b&o=&hp=1", "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/297920630.jpg?k=c7d6e83ec85d93fc970fabdc00908568ddba4d241f71f1927a5c8e834fab1271&o=&hp=1"],
        capacity:230,
        cityId: "636eef8b7378476e793e8f0c",
        userId:"636e63981471b35a5c064d4c"
    },
    {
        name:"Austin's Saint Lazare Hotel",
        photo:["https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/88602141.jpg?k=29c218c92715b64a1a5e2a9f9446abb2d539359e6eb1c4a0f576b776941d37bc&o=&hp=1", "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/44682910.jpg?k=5ab09b4ea51fb03f98499838ac51c04221503c65893748bea844fce1eb98f419&o=&hp=1", "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/88602133.jpg?k=8be74a64a74cdff6994adb4a572e311f498c2b9220175767d17472b3e42c2b66&o=&hp=1"],
        capacity:115,
        cityId: "636eef8b7378476e793e8f0d",
        userId:"636e63981471b35a5c064d4e"
    },
    {
        name:"Hotel Giolli Nazionale",
        photo:["https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/28358732.jpg?k=2b08978b9388b9a9700810ad2ae0485088cfac512699c3960d1d524a477452f7&o=&hp=1", "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/277565954.jpg?k=3c9c49b170aa94ba4876b876e5c6bb8b240492ae5b106201a98956272c3d2e88&o=&hp=1", "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/38816784.jpg?k=5921c65efa8b49c0e3cf53670ea5501901f6a2a3c9ad73c6c0335445a8c74775&o=&hp=1"],
        capacity:126,
        cityId: "636eef8b7378476e793e8f0e",
        userId:"636e63981471b35a5c064d4b"
    },
]

require("dotenv").config()
require("../../config/database")
const Hotel = require("../Hotel")

hotels.forEach(e =>
    Hotel.create({
        name: e.name,
        photo: e.photo,
        capacity: e.capacity,
        cityId: e.cityId,
        userId: e.userId
    })
)