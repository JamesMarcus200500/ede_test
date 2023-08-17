export const supportedPlatforms = [
  {
    id: 1,
    label: "Window",
    iconPath: "/images/window.png",
  },
  {
    id: 2,
    label: "OSX",
    iconPath: "/images/osx.png",
  },
  {
    id: 3,
    label: "chromebook",
    iconPath: "/images/chromebook.png",
  },
  {
    id: 4,
    label: "iPad",
    iconPath: "/images/osx.png",
  },
  {
    id: 5,
    label: "Android",
    iconPath: "/images/android.png",
  },
  {
    id: 6,
    label: "iOS",
    iconPath: "/images/osx.png",
  },
];

// export function firebaseError(errmsg) {
//   switch (errmsg) {
//     case 'Firebase: Error (auth/code-expired).':
//       return "Phone number is not valid!"

//     case 'Firebase: Error (auth/argument-error).':
//       return "You are already loggedIn or Phone number invalid"

//     case 'window.confirmationResult is undefined':
//       return "seems you are adding wrong otp or expires otp"

//     case 'Firebase: Error (auth/code-expired).':
//       return "Auth Code is expired"

//     default: return "try to fix right error message from firebase"
//   }
// }

export function firebaseError(errmsg) {
  switch (errmsg) {
    case "Firebase: Error (auth/code-expired).":
      return "Token is expired";

    case "Firebase: Error (auth/invalid-verification-code).":
      return "Invalid Token";

    case "Firebase: Error (auth/argument-error).":
      return "auth argument error";

    case "window.confirmationResult is undefined":
      return "Invalid verification code.";

    case "Phone number is not valid":
      return "Invalid Phone number";

    case "Firebase: Invalid format. (auth/invalid-phone-number).":
      return "Invalid Phone number format";

    case "Firebase: Error (auth/too-many-requests).":
      return "Too many request :(";

    default:
      return "Opps Something went wrong";
  }
}

export function ErrTest(param) {
  if (param == "window.confirmationResult is undefined") {
    return "it works";
  } else {
    return "check param";
  }
}
