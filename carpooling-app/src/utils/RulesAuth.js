// class RulesAuth {
//   static name = { required: "Name is required" };
//   static phone = { required: "Phone is required" };
//   static terms = { required: true };
//   static gender = { required: "Gender is required" };

//   static email = {
//     required: {
//       value: true,
//       message: "Email is required",
//     },
//     pattern: {
//       value: /^[^ ]+@[^ ]+\.[a-z]{2,3}$/,
//       message: "Please enter a valid email",
//     },
//   };
//   static password = {
//     required: {
//       value: true,
//       message: "Password is required",
//     },
//     pattern: {
//       value:
//         /^(?=.*[A-Za-z0-9@$!%*#?&\u0600-\u06FF])[A-Za-z0-9@$!%*#?&\u0600-\u06FF]{8,}$/,
//       message:
//         "Please enter a password with at least 8 characters, including numbers and symbols",
//     },
//   };
//   static confirmPassword = {
//     required: {
//       value: true,
//       message: "Confirm Password is required",
//     },
//     validate: (value) => value === pwd || "Password does not match",
//   };
// }
