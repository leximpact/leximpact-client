import request from "../../components/common/utils/request";
// import { loadingComplete, loadingError, loadingStart } from "./loading";

const fetchMetadataCasTypes = () => (dispatch, getState) => {
  const { token } = getState();
  // dispatch(loadingStart());
  return request
    .post("/metadata/description_cas_types")
    .then((payload) => {
      // dispatch(loadingComplete());
      for (const casType of payload) {
        casType.name = 'Foyer fiscal type';
        for (const declarant of casType.declarants) {
          declarant.gender = Math.random() < 0.49 ? 'male' : 'female';
        }
      }
      dispatch({ payload, token, type: "onInitializeCasTypes" });
    })
    .catch((err) => { // eslint-disable-line no-unused-vars
      // dispatch(loadingError(err));
      // eslint-disable-next-line no-console
      console.log("Can’t access  response. Blocked by browser?");
    });
};

export default fetchMetadataCasTypes;
