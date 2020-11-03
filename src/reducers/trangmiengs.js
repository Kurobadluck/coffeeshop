
var initialState = [
    {
        id : 1,
        name: 'Bánh Kem',
        image : './public/images/menu-1.jpg',
        description : 'một món làm từ cà phê nguyên chất',
        price : 45000
    },
    {
        id : 2,
        name: 'Bánh Kem',
        image : '',
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
    {
        id : 5,
        name: 'Cà Phê Sữa',
        image : '',
        description : '',
        price : 45000
    },
    {
        id : 6,
        name: 'Coldbrew',
        image : '',
        description : '',
        price : 45000
    },
    {
        id : 7,
        name: 'Cà Phê Đá',
        image : '',
        description : '',
        price : 45000
    },
    {
        id : 8,
        name: 'Cà Phê Sữa',
        image : '',
        description : '',
        price : 45000
    },
    {
        id : 9,
        name: 'Coldbrew',
        image : '',
        description : '',
        price : 45000
    }
];

const trangmiengs = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default trangmiengs;