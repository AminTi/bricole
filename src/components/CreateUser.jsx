// import React from "react";
// import FormControl from "@material-ui/core/FormControl";
// import { makeStyles } from "@material-ui/core/styles";
// import { TextField } from "@material-ui/core";
// import { InputLabel } from "@material-ui/core";
// import { Container } from "@material-ui/core";
// import { Grid } from "@material-ui/core";
// import { Button } from "@material-ui/core";
// import { Box } from "@material-ui/core";
// import { useForm } from "react-hook-form";
// /
// const useStyles = makeStyles((theme) => ({
//   container: {
//     height: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   label: {
//     padding: "5px 5px",
//   },
//   TextField: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   error: {
//     color: "red",
//   },
//   btnBox: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "10px 10px",
//   },
// }));

// export default function CreateUser() {
//   const classes = useStyles();
//   const { register, handleSubmit, errors } = useForm();
//   const userKit = new UserKit();

//   const onSubmit = (a, e) => {
//     const firstname = a.firstname;
//     const lastname = a.lastname;
//     const company = a.company;
//     const email = a.email;
//     const adress = a.adress;
//     const mobile = a.mobile;
//     const postcode = a.post;
//     const password = a.password;

//     userKit.registerUsers(
//       firstname,
//       lastname,
//       company,
//       email,
//       adress,
//       mobile,
//       postcode,
//       password
//     );
//     console.log(firstname);
//     console.log(lastname);
//     console.log(company);
//     console.log(email);
//     console.log(adress);
//     console.log(mobile);
//     console.log(postcode);
//     console.log(password);

//     e.target.reset();
//   };
//   return (
//     <Container className={classes.container} maxWidth="sm">
//       <Grid
//         container
//         direction="column"
//         justify="space-between"
//         alignItems="stretch"
//       >
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <Box>
//             <TextField
//               className={classes.TextField}
//               type="text"
//               placeholder="FirstName"
//               name="firstname"
//               inputRef={register({ required: true, minLength: 2 })}
//             />
//             {errors.firstname && (
//               <div className={classes.error}> Firstname is required </div>
//             )}
//           </Box>
//           <Box>
//             <TextField
//               className={classes.TextField}
//               type="text"
//               placeholder="LastName"
//               name="lastname"
//               inputRef={register({ required: true, minLength: 2 })}
//             />
//             {errors.lastname && (
//               <div className={classes.error}> Lastname is required </div>
//             )}
//           </Box>
//           <Box>
//             <TextField
//               className={classes.TextField}
//               type="text"
//               placeholder="Company"
//               name="company"
//               inputRef={register({ required: true, minLength: 2 })}
//             />
//             {errors.company && (
//               <div className={classes.error}> Company name is required </div>
//             )}
//           </Box>

//           <Box>
//             <TextField
//               className={classes.TextField}
//               type="text"
//               placeholder="Email"
//               name="email"
//               inputRef={register({
//                 required: true,
//                 pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i },
//               })}
//             />
//             {errors.email && (
//               <div className={classes.error}> Invalid Email </div>
//             )}
//           </Box>

//           <Box>
//             <TextField
//               className={classes.TextField}
//               type="text"
//               placeholder="Adress"
//               name="adress"
//               inputRef={register({ required: true, minLength: 2 })}
//             />
//             {errors.adress && (
//               <div className={classes.error}> The adress is required </div>
//             )}
//           </Box>
//           <Box>
//             <TextField
//               className={classes.TextField}
//               type="text"
//               placeholder="Mobile"
//               name="mobile"
//               inputRef={register({
//                 required: true,
//                 pattern: { value: /^\d\d\d\d\d\d\d\d\d\d$/ },
//               })}
//             />
//             {errors.mobile && (
//               <div className={classes.error}>
//                 {" "}
//                 The Mobile number is required{" "}
//               </div>
//             )}
//           </Box>
//           <Box>
//             <TextField
//               className={classes.TextField}
//               type="number"
//               placeholder="Code Postal"
//               name="post"
//               inputRef={register({ required: true, minLength: 2 })}
//             />
//             {errors.post && (
//               <div className={classes.error}> The Post number is required </div>
//             )}
//           </Box>
//           <Box>
//             <TextField
//               className={classes.TextField}
//               type="password"
//               placeholder="Password"
//               name="password"
//               inputRef={register({ required: true, minLength: 8 })}
//             />
//             {errors.password && (
//               <div className={classes.error}>
//                 {" "}
//                 Password is required (8 Caracters)
//               </div>
//             )}
//           </Box>
//           <Box className={classes.btnBox}>
//             <Button type="submit" variant="contained" color="primary">
//               Send
//             </Button>
//           </Box>
//         </form>
//       </Grid>
//     </Container>
//   );
// }
