import { putInCash, putOutCash, selectProduct, totalCash } from './controller';

const vendingMachine = () => {
  let isCardPush = false;

  return (
    <div>
      <title>자판기</title>
      <row>
        <ul>
          <li onClick={selectProduct({ name: '물', isCard: isCardPush })}>물</li>
          <li onClick={selectProduct({ name: '콜라', isCard: isCardPush })}>콜라</li>
          <li onClick={selectProduct({ name: '커피', isCard: isCardPush })}>커피</li>
        </ul>
      </row>
      <button onClick={putOutCash}>반환 버튼</button>
      <button>카드 투입구</button>
      <div onClick={putInCash}>현금 투입구</div>
      <div>상품나오는곳</div>
      <div>잔돈나오는곳</div>
    </div>
  );
};
