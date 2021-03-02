import Images from '../res/image';

const expenseType = [
   { code: 'eating', title: 'Ăn sáng/ trưa/ chiều', icon: Images.ic_food },
   { code: 'snacks', title: 'Ăn vặt', icon: Images.ic_food1 },
   { code: 'clothes', title: 'Quần áo', icon: Images.ic_clothes },
   { code: 'fruit', title: 'Trái cây', icon: Images.ic_fruit },
   { code: 'market', title: 'Đi chợ', icon: Images.ic_market },
   { code: 'shopping', title: 'Shopping', icon: Images.ic_shopping },
   { code: 'health', title: 'Sức khỏe', icon: Images.ic_health },
   { code: 'travel', title: 'Du lịch', icon: Images.ic_travel },
   { code: 'beer', title: 'Rượu bia', icon: Images.ic_food2 },
   { code: 'gift', title: 'Quà', icon: Images.ic_gift },
   { code: 'book', title: 'Sách vở', icon: Images.ic_book },
   { code: 'phoneBuy', title: 'Mua điện thoại', icon: Images.ic_phone1 },
   { code: 'phoneFee', title: 'Tiền điện thoại', icon: Images.ic_phone },
   { code: 'phoneFix', title: 'Sửa điện thoại', icon: Images.ic_phone_broken },
   { code: 'bus', title: 'Xe bus', icon: Images.ic_bus },
   { code: 'buyVehicle', title: 'Mua xe', icon: Images.ic_car },
   { code: 'fixVehicle', title: 'Sửa xe', icon: Images.ic_car1 },
   { code: 'parking', title: 'Gửi xe', icon: Images.ic_parking },
   { code: 'taxi', title: 'Taxi', icon: Images.ic_taxi },
   { code: 'acident', title: 'Tai nạn', icon: Images.ic_car_broken },
   { code: 'helmet', title: 'Mũ bảo hiểm', icon: Images.ic_helmet },
   { code: 'gasoline', title: 'Đổ xăng', icon: Images.ic_gas },
   { code: 'oil', title: 'Thay nhớt', icon: Images.ic_oil },
   { code: 'birth', title: 'Sinh con', icon: Images.ic_baby2 },
   { code: 'toy', title: 'Đồ chơi', icon: Images.ic_toy },
   { code: 'baby', title: 'Đồ dùng cho con', icon: Images.ic_baby1 },
   { code: 'recreative', title: 'Giải trí', icon: Images.ic_game },
   { code: 'onlineShopping', title: 'Mua hàng online', icon: Images.ic_shopping1 },
   { code: 'office', title: 'Văn phòng phẩm', icon: Images.ic_business },
   { code: 'cosmetics', title: 'Mỹ phẩm', icon: Images.ic_beauty },
   { code: 'jewelry', title: 'Trang sức', icon: Images.ic_watch },
   { code: 'pet', title: 'Thú cưng', icon: Images.ic_pet },
   { code: 'tuition', title: 'Tiền học phí', icon: Images.ic_student },
   { code: 'electric', title: 'Tiền điện', icon: Images.ic_electric },
   { code: 'water', title: 'Tiền nước', icon: Images.ic_water },
   { code: 'internet', title: 'Tiền internet', icon: Images.ic_wifi },
   { code: 'tv', title: 'Tiền truyền hình', icon: Images.ic_tv },
   { code: 'house', title: 'Tiền nhà', icon: Images.ic_home },
   { code: 'party', title: 'Đám tiệc', icon: Images.ic_home },
   { code: 'otherExpense', title: 'Khác', icon: Images.ic_other },
];

const incomeType = [
   { code: 'salary', title: 'Tiền lương', icon: Images.ic_salary },
   { code: 'bonus', title: 'Tiền Thưởng', icon: Images.ic_bonus },
   { code: 'sale', title: 'Bán hàng', icon: Images.ic_sale },
   { code: 'lease', title: 'Cho thuê', icon: Images.ic_money },
   { code: 'bingo', title: 'Trúng số', icon: Images.ic_ticket },
   { code: 'return', title: 'Hoàn trả', icon: Images.ic_money1 },
   { code: 'otherIncome', title: 'Khác', icon: Images.ic_other },
];

export { expenseType, incomeType };
