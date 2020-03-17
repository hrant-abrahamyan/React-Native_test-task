const isFieldValid = ({valid, pristine, aggressive}) =>
  valid || (pristine && !aggressive);

export default isFieldValid;
