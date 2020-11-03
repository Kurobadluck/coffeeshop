
var initialState = [
    {
        id : 1,
        name: 'Coldrew',
        image : './public/images/menu-1.jpg',
        description : 'một món làm từ cà phê nguyên chất',
        price : 45000
    },
    {
        id : 2,
        name: 'Espresso',
        image : './public/images/menu-2.jpg',
        description : '',
        price : 45000
    },
    {
        id : 3,
        name: 'Bạc Sĩu',
        image : '',
        description : '',
        price : 45000
    },
    {
        id : 4,
        name: 'Cà Phê Đá',
        image : '',
        description : '',
        price : 45000
    },
];

const bestsellers = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default bestsellers;