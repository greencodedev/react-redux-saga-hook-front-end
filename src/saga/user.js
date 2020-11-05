import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  GET_HOME_DATA,
  getHomeDataRequested,
  getHomeDataFailed,
  getHomeDataSuccess,
  GET_SLIDER_DATA,
  getSliderDataRequested,
  getSliderDataFailed,
  getSliderDataSuccess,
  GET_DESTINATION_DATA,
  getDestinationDataRequested,
  getDestinationDataFailed,
  getDestinationDataSuccess,
  LOGIN,
  loginRequested,
  loginFailed,
  loginSuccess,
  UPLOAD_FILE,
  uploadFileRequested,
  uploadFileFailed,
  uploadFileSuccess,
  REGISTER,
  registerRequested,
  registerFailed,
  registerSuccess,
  GET_VOUCHER_DETAILS,
  getVoucherDetailsRequested,
  getVoucherDetailsFailed,
  getVoucherDetailsSuccess,
  GET_NEW_BAR,
  getNewBarSuccess,
  GET_DEST_PACKAGES,
  getdestPackagesRequested,
  getdestPackagesFailed,
  getdestPackagesSuccess,
  BOOK_PACKAGES,
  bookPackagesRequested,
  bookPackagesFailed,
  bookPackagesSuccess,
  GET_INVOICES,
  getInvoicesRequested,
  getInvoicesFailed,
  getInvoicesSuccess,
  GET_RAFFLES,
  getRafflesRequested,
  getRafflesFailed,
  getRafflesSuccess,

  OLD_PROMOS,
  getOldPromoRequested,
  getOldPromoFailed,
  getOldPromoSuccess,

  NEW_PROMOS,
  getNewPromoRequested,
  getNewPromoFailed,
  getNewPromoSuccess,

  GET_DEST_VOUCHERS,
  getDestVouchersRequested,
  getDestVouchersFailed,
  getDestVouchersSuccess,

  GET_ORDER_HISTORY,
  getOrderHistoryRequested,
  getOrderHistoryFailed,
  getOrderHistorySuccess,

  EDIT_PROFILE,
  editProfileRequested,
  editProfileFailed,
  editProfileSuccess,

  CHANGE_PASSWORD,
  changePasswordRequested,
  changePasswordFailed,
  changePasswordSuccess,

  GET_NOTIFICATIONS,
  getNotificationsRequested,
  getNotificationsFailed,
  getNotificationsSuccess,

  GET_PROFILE_DETAILS,
  getProfileDetailsRequested,
  getProfileDetailsFailed,
  getProfileDetailsSuccess,

  GET_RAFFLES_STATS,
  getRaffleStatsRequested,
  getRaffleStatsFailed,
  getRaffleStatsSuccess,

  GET_RAFFLES_INVOICES,
  getRaffleByInvoiceRequested,
  getRaffleByInvoiceFailed,
  getRaffleByInvoiceSuccess,

  GET_LOCATION,
  getLocationRequested,
  getLocationFailed,
  getLocationSuccess
} from "../actions/user-action-type";
import httpClient from "./http-client";


function* getHomeDataHandler({ payload: data }) {
  yield put(
    getHomeDataRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, false);
  if (result.status === 400) {
    yield put(
      getHomeDataFailed({
        status: "failed",
      })
    );
  } else {
    yield put(
      getHomeDataSuccess({
        status: "success",
        homeData: result,
      })
    );
  }
}


function* getSliderDataHandler({ payload: data }) {
  yield put(
    getSliderDataRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, false);
  if (result.status === 400) {
    yield put(
      getSliderDataFailed({
        status: "failed",
      })
    );
  } else {
    yield put(
      getSliderDataSuccess({
        status: "success",
        sliderData: result,
      })
    );
  }
}


function* getDestinationDataHandler({ payload: data }) {
  yield put(
    getDestinationDataRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, false);
  if (result.status === 400) {
    yield put(
      getDestinationDataFailed({
        status: "failed",
      })
    );
  } else {
    yield put(
      getDestinationDataSuccess({
        status: "success",
        destinationData: result,
      })
    );
  }
}


function* loginHandler({ payload: data }) {
  yield put(
    loginRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, false);
  if (result.status === 400) {
    yield put(
      loginFailed({
        status: "failed",
      })
    );
  } else {
    yield put(
      loginSuccess({
        status: "success",
        token: result.token,
      })
    );
  }
}


function* uploadDataHandler({ payload: data }) {
  yield put(
    uploadFileRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, true);
  if (result.login_required === 1) {
    var currentLocation = window.location.origin;
    window.location.href = currentLocation + '/login'
  }  else {
    yield put(
      uploadFileSuccess({
        status: "success",
        uploadData: result,
      })
    );
  }
}

function* registerHandler({ payload: data }) {
  yield put(
    registerRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, false);
  if (result.login_required === 1) {
    var currentLocation = window.location.origin;
    window.location.href = currentLocation + '/login'
  }  else {
    yield put(
      registerSuccess({
        status: "success",
        token: result.token,
      })
    );
  }
}

function* getVoucherDetailsHandler({ payload: data }) {
  yield put(
    getVoucherDetailsRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, false);
  console.log("result =>", result);
  if (result.login_required === 1) {
    var currentLocation = window.location.origin;
    // window.location.href = currentLocation + '/login'

  }  else {
    yield put(
      getVoucherDetailsSuccess({
        status: "success",
        voucherData: result
      })
    );
  }
}

function* getNewBarHandler({ payload: data }) {
 
    yield put(
      getNewBarSuccess({
        status: "success",
        isNewBar: data
      })
    );
}




function* getDestPackagesHandler({ payload: data }) {
  yield put(
    getdestPackagesRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, false);
  console.log(result, 'destination data')
  if (result.login_required === 1) {
    var currentLocation = window.location.origin;
    window.location.href = currentLocation + '/login'
  }  else {
    yield put(
      getdestPackagesSuccess({
        status: "success",
        destPackagesData: result.data
      })
    );
  }
}


function* bookPackageHandler({ payload: data }) {
  yield put(
    bookPackagesRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, true);
  if (result.login_required === 1) {
    var currentLocation = window.location.origin;
    window.location.href = currentLocation + '/login'
  }  else {
    yield put(
      bookPackagesSuccess({
        status: "success",
        bookingData: result.data
      })
    );
  }
}


function* getInvoicesHandler({ payload: data }) {
  yield put(
    getInvoicesRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, false);
  if (result.login_required === 1) {
    var currentLocation = window.location.origin;
    window.location.href = currentLocation + '/login'
  } else {
    yield put(
      getInvoicesSuccess({
        status: "success",
        invoicesData: result
      })
    );
  }
}


function* getRafflesHandler({ payload: data }) {
  yield put(
    getRafflesRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, false);
  if (result.status === 400) {
    yield put(
      getRafflesFailed({
        status: "failed",
      })
    );
  } else {
    yield put(
      getRafflesSuccess({
        status: "success",
        rafflesData: result
      })
    );
  }
}

function* oldPromoHandler({ payload: data }) {
  yield put(
    getOldPromoRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
  };
  const { result } = yield call(httpClient, payload, true, true);
  console.log(result, 'result data')
  if (result.login_required === 1) {
    // var currentLocation = window.location.origin;
    // window.location.href = currentLocation + '/login'
  
  } else {
    yield put(
      getOldPromoSuccess({
        status: "success",
        oldPromosData: result
      })
    );
  }
}

function* newPromoHandler({ payload: data }) {
  yield put(
    getNewPromoRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, true);
  console.log(result, 'result data')

  if (result.login_required === 1) {
    // var currentLocation = window.location.origin;
    // window.location.href = currentLocation + '/login'

  } else {
    yield put(
      getNewPromoSuccess({
        status: "success",
        newPromosData: result
      })
    );
  }
}


function* destVoucherHandler({ payload: data }) {
  yield put(
    getDestVouchersRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, true);
  console.log(result, 'vouchers data')

  if (result.login_required === 1) {
    var currentLocation = window.location.origin;
    window.location.href = currentLocation + '/login'

  } else {
    yield put(
      getDestVouchersSuccess({
        status: "success",
        destinationVoucherData: result
      })
    );
  }
}

function* locationHandler({ payload: data }) {
  yield put(
    getLocationRequested({
      status: "requested",
    })
  );
  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, true);

  if (result.login_required === 1) {
    var currentLocation = window.location.origin;
    window.location.href = currentLocation + '/login'

  } else {
    yield put(
      getLocationSuccess({
        status: "success",
        locationData: result
      })
    );
  }
}

function* orderHistoryHandler({ payload: data }) {
  yield put(
    getOrderHistoryRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, true);
  console.log(result, 'result data')

  if (result.login_required === 1) {
    var currentLocation = window.location.origin;
    window.location.href = currentLocation + '/login'

  } else {
    yield put(
      getOrderHistorySuccess({
        status: "success",
        orderHistoryData: result.data
      })
    );
  }
}



function* editProfileHandler({ payload: data }) {
  yield put(
    editProfileRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, true);
  console.log(result, 'result data')

  if (result.login_required === 1) {
    var currentLocation = window.location.origin;
    window.location.href = currentLocation + '/login'

  } else {
    yield put(
      editProfileSuccess({
        status: "success",
        // destinationVoucherData: result
      })
    );
  }
}



function* changePasswordHandler({ payload: data }) {
  yield put(
    changePasswordRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, true);
  console.log(result, 'result data')

  if (result.login_required === 1) {
    var currentLocation = window.location.origin;
    window.location.href = currentLocation + '/login'

  } else {
    yield put(
      changePasswordSuccess({
        status: "success",
        // destinationVoucherData: result
      })
    );
  }
}



function* getNotificationHandler({ payload: data }) {
  yield put(
    getNotificationsRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, true);
  console.log(result, 'result data')

  if (result.login_required === 1) {
    var currentLocation = window.location.origin;
    window.location.href = currentLocation + '/login'

  } else {
    yield put(
      getNotificationsSuccess({
        status: "success",
        notificationData: result
      })
    );
  }
}

function* profileDetailHandler({ payload: data }) {
  yield put(
    getProfileDetailsRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, true);
  console.log(result, 'result data')

  if (result.login_required === 1) {
    var currentLocation = window.location.origin;
    window.location.href = currentLocation + '/login'

  } else {
    yield put(
      getProfileDetailsSuccess({
        status: "success",
        userData: result.data
      })
    );
  }
}

function* getRaffleStatHandler({ payload: data }) {
  yield put(
    getRaffleStatsRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, true);
  console.log(result, 'result data')

  if (result.login_required === 1) {
    var currentLocation = window.location.origin;
    window.location.href = currentLocation + '/login'

  } else {
    yield put(
      getRaffleStatsSuccess({
        status: "success",
        raffleStatData: result
      })
    );
  }
}

function* getRaffleInvoiceHandler({ payload: data }) {
  yield put(
    getRaffleByInvoiceRequested({
      status: "requested",
    })
  );

  const payload = {
    data: data,
    method: "post",
    url: 'api/',
    // url: 'client/v1/client/filter'
  };

  const { result } = yield call(httpClient, payload, true, true);
  console.log(result, 'result data')

  if (result.login_required === 1) {
    var currentLocation = window.location.origin;
    window.location.href = currentLocation + '/login'

  } else {
    yield put(
      getRaffleByInvoiceSuccess({
        status: "success",
        raffleDataByInvoice: result.data
      })
    );
  }
}
function* User() {

  yield all([
    takeLatest(GET_HOME_DATA, getHomeDataHandler),
    takeLatest(GET_SLIDER_DATA, getSliderDataHandler),
    takeLatest(GET_DESTINATION_DATA, getDestinationDataHandler),
    takeLatest(LOGIN, loginHandler),
    takeLatest(UPLOAD_FILE, uploadDataHandler),
    takeLatest(REGISTER, registerHandler),
    takeLatest(GET_VOUCHER_DETAILS, getVoucherDetailsHandler),
    takeLatest(GET_NEW_BAR, getNewBarHandler),
    takeLatest(GET_DEST_PACKAGES, getDestPackagesHandler),
    takeLatest(BOOK_PACKAGES, bookPackageHandler),
    takeLatest(GET_INVOICES, getInvoicesHandler),
    takeLatest(GET_RAFFLES, getRafflesHandler),
    takeLatest(OLD_PROMOS, oldPromoHandler),
    takeLatest(NEW_PROMOS, newPromoHandler),
    takeLatest(GET_DEST_VOUCHERS, destVoucherHandler),
    takeLatest(GET_LOCATION, locationHandler),

    takeLatest(GET_ORDER_HISTORY, orderHistoryHandler),
    takeLatest(EDIT_PROFILE, editProfileHandler),
    takeLatest(CHANGE_PASSWORD, changePasswordHandler),
    takeLatest(GET_NOTIFICATIONS, getNotificationHandler),
    takeLatest(GET_PROFILE_DETAILS, profileDetailHandler),
    takeLatest(GET_RAFFLES_STATS, getRaffleStatHandler),
    takeLatest(GET_RAFFLES_INVOICES, getRaffleInvoiceHandler),


  ]);
}

export default User;
