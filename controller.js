import { coffee, coke, water, MachineCashAmount, totalCash } from './model';

// 1. 사용자가 사용가능한 결제수단
// a. 현금 : 100원 / 500원 / 1,000원 / 5,000원 / 10,000원권 사용가능
// b. 카드 : 카드결제 가능
// 2. 구매 가능한 음료수
// a. 콜라 : 1,100원
// b. 물 : 600원
// c. 커피 : 700원

// 자판기가 돈을 받는 함수
export const putInCash = (cash) => {
  // 돈은 실체가 있는 물체이니 문자열로 가정
  // 자판기에 들어갈 수 있는 최대 돈은 50,000원이라 가정
  if (typeof cash === 'string' && totalCash < 50000) {
    switch (cash) {
      case cash === '100원':
        if (totalCash + 100 <= 50000) totalCash += 100;
        else return '100원 반환';
        break;
      case cash === '500원':
        if (totalCash + 500 <= 50000) totalCash += 500;
        else return '500원 반환';
        break;
      case cash === '1000원':
        if (totalCash + 1000 <= 50000) totalCash += 1000;
        else return '1000원 반환';
        break;
      case cash === '5,000원':
        if (totalCash + 5000 <= 50000) totalCash += 5000;
        else return '5000원 반환';
        break;
      case cash === '10,000원':
        if (totalCash + 10000 <= 50000) totalCash += 10000;
        else return '10000원 반환';
        break;
      default:
        break;
    }
  } else if (typeof cash !== 'string') {
    return '고장';
  } else {
    return '더이상 돈을 넣을 수 없습니다.';
  }
};

// 자판기에 반환버튼을 눌렀을떄 발생하는 함수
export const putOutCash = () => {
  let outCash = totalCash;
  totalCash = 0;
  while (outCash === 0) {
    if (outCash - 10000 > 0 && MachineCashAmount['10,000원'] > 0) {
      outCash -= 10000;
      MachineCashAmount['10,000원'] -= 1;
      return '10,000원';
    } else if (outCash - 5000 > 0 && MachineCashAmount['5,000원'] > 0) {
      outCash -= 5000;
      MachineCashAmount['5,000원'] -= 1;
      return '5,000원';
    } else if (outCash - 1000 > 0 && MachineCashAmount['1,000원'] > 0) {
      outCash -= 1000;
      MachineCashAmount['1,000원'] -= 1;
      return '1,000원';
    } else if (outCash - 500 > 0 && MachineCashAmount['500원'] > 0) {
      outCash -= 500;
      MachineCashAmount['500원'] -= 1;
      return '500원';
    } else if (outCash - 100 > 0 && MachineCashAmount['100원'] > 0) {
      outCash -= 100;
      MachineCashAmount['100원'] -= 1;
      return '100원';
    } else {
      outCash = 0;
      return '관리자에게 문의 바랍니다.';
    }
  }
};

// 상품 선택
export const selectProduct = ({ name = '', isCard = false }) => {
  if (!isCard) {
    switch (name) {
      case name === '물':
        if (water.amount > 0 && totalCash >= water.price) {
          totalCash -= water.price;
          return '물';
        } else if (water.amount <= 0) return '죄송합니다 제품이 없으니 다른 상품을 선택해주세요.';
        return '금액이 부족합니다.';
      case name === '콜라':
        if (coke.amount > 0 && totalCash >= coke.price) {
          totalCash -= coke.price;
          return '콜라';
        } else if (coke.amount <= 0) return '죄송합니다 제품이 없으니 다른 상품을 선택해주세요.';
        return '금액이 부족합니다.';
      case name === '커피':
        if (coffee.amount > 0 && totalCash >= coffee.price) {
          totalCash -= coffee.price;
          return '커피';
        } else if (coffee.amount <= 0) return '죄송합니다 제품이 없으니 다른 상품을 선택해주세요.';
        return '금액이 부족합니다.';
      default:
        break;
    }
  } else {
    if (totalCash > 0) {
      return '현금을 반환 후 카드 결제를 부탁드립니다.';
    } else {
      switch (name) {
        case name === '물':
          if (water.amount > 0 && handlePayCard(water.price)) {
            water.amount -= 1;
            return water.name;
          } else {
            return '잔액이 부족합니다.';
          }
        case name === '콜라':
          if (coke.amount > 0 && handlePayCard(coke.price)) {
            coke.amount -= 1;
            return coke.name;
          } else {
            return '잔액이 부족합니다.';
          }
        case name === '커피':
          if (coffee.amount > 0 && handlePayCard(coffee.price)) {
            coffee.amount -= 1;
            return coffee.name;
          } else {
            return '잔액이 부족합니다.';
          }
        default:
          break;
      }
    }
  }
};

// 카드 결제 함수
const handlePayCard = async ({ pay = 0 }) => {
  // 네트워크 통신으로 카드 결제 승인 함수를 만들어 주었습니다.
  let result = false;

  // await API 통신

  return true;
};
