import { all, call } from "redux-saga/effects";
import { userSagas } from './user/userSaga';
import { cartSagas } from "./cart/cartSagas";
import { shopSagas } from "./shop/shopSagas";

export default function* rootSaga() {
  yield all([
    call(shopSagas),
    call(userSagas),
    call(cartSagas),
  ])
}