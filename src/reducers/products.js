
var initialState = [
    {
        id : 1,
        name: 'Capuccino',
        image : require("../assets/images/menu-1.jpg"),
        description : 'Cappuccino là một cách pha chế cà phê của Ý. Một cà phê cappuccino bao gồm ba phần đều nhau: cà phê espresso pha với một lượng nước gấp đôi (espresso lungo), sữa nóng và sữa sủi bọt.',
        price : 45000
    },
    {
        id : 2,
        name: 'Cà phê Latte',
        image : "../images/menu-2.jpg",
        description : 'Cà phê latte là một thức uống có nguồn gốc từ Ý bao gồm chủ yếu là cà phê và sữa được đánh lên, đồ uống này được tiêu thụ thường xuyên cả ở nhà và tại quán bar.',
        price : 45000
    },
    {
        id : 3,
        name: 'Bạc Xỉu',
        image : "../assets/images/menu-2.jpg",
        description : 'Bạc xỉu là từ mà người Sài Gòn gọi tắt của cụm từ "bạc tẩy xỉu phé" (là tiếng Quan Thoại phổ biến trong cộng đồng người Hoa ở Sài Gòn lúc bấy giờ) để chỉ món sữa nóng thêm một chút cà phê.',
        price : 45000
    },
    {
        id : 4,
        name: 'Cà Phê Phin',
        image : "../assets/images/menu-2.jpg",
        description : '',
        price : 45000
    },
    {
        id : 5,
        name: 'Cà Phê Sữa',
        image : "../assets/images/menu-2.jpg",
        description : '',
        price : 45000
    },
    {
        id : 6,
        name: 'Espresso',
        image : "../assets/images/menu-2.jpg",
        description : '',
        price : 45000
    },
    {
        id : 7,
        name: 'Cà Phê Đá',
        image : "../assets/images/menu-2.jpg",
        description : '',
        price : 45000
    },
    {
        id : 8,
        name: 'Cà Phê Sữa',
        image : "../assets/images/menu-2.jpg",
        description : '',
        price : 45000
    },
    {
        id : 9,
        name: 'Coldbrew',
        image : "../assets/images/menu-2.jpg",
        description : '',
        price : 45000
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default products;