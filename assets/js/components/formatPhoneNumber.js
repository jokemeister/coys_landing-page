function formatPhoneNumber(phoneInput, insert) {
  const countryCode = '+380';

  // add fixed size of phone number
    let phoneNumber = phoneInput.value.slice(0, 16);
  // add fixed size of phone number

  // making country code read-only
    if (phoneNumber.slice(0, 4) !== '+380') phoneNumber = countryCode;
    if (insert === null) return phoneInput.value = phoneNumber;
  // /making country code read-only

  // adding extra spaces due to design
    if (phoneNumber.length == 6) phoneNumber += ' ';
    if (phoneNumber.length == 10) phoneNumber += ' ';
    if (phoneNumber.length == 13) phoneNumber += ' ';
  // adding extra spaces due to design

  return phoneInput.value = phoneNumber;
}

export default formatPhoneNumber;