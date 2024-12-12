import css from "./Modal.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import RedButton from "../RedButton/RedButton";

export default function Modal({ setModal }) {
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, "Too short name")
      .max(50, "Too long name")
      .required("First name is required"),
    lastName: Yup.string()
      .min(2, "Too short last name")
      .max(50, "Too long last name")
      .required("Last name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Only digits are allowed")
      .min(10, "Phone number is too short")
      .max(15, "Phone number is too long")
      .required("Phone number is required"),
  });
  function handleClose(e) {
    if (e.target === e.currentTarget) {
      setModal(false);
    }
  }

  return (
    <div className={css.backgr} onClick={handleClose}>
      <div className={css.modal}>
        <h1 className={css.modalTitle}>Contact Us</h1>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            comment: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log("Submitted values:", values);
            alert("Form submitted!");
            resetForm();
          }}
        >
          {() => (
            <Form className={css.form}>
              <div className={css.inputNameBox}>
                <div className={css.formGroup}>
                  <label htmlFor="firstName" className={css.label}>
                    First Name
                  </label>
                  <Field
                    name="firstName"
                    type="text"
                    placeholder="Enter first name"
                    className={css.inputName}
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className={css.error}
                  />
                </div>

                <div className={css.formGroup}>
                  <label htmlFor="lastName" className={css.label}>
                    Last Name
                  </label>
                  <Field
                    name="lastName"
                    type="text"
                    placeholder="Enter last name"
                    className={css.inputName}
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className={css.error}
                  />
                </div>
              </div>

              <div className={css.formGroup}>
                <label htmlFor="email" className={css.label}>
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  className={css.input}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={css.error}
                />
              </div>

              <div className={css.formGroup}>
                <label htmlFor="phone" className={css.label}>
                  Phone Number
                </label>
                <Field
                  name="phone"
                  type="tel"
                  placeholder="Enter phone number"
                  className={css.input}
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className={css.error}
                />
              </div>

              <div className={css.formGroup}>
                <label htmlFor="comment" className={css.label}>
                  Comment
                </label>
                <Field
                  name="comment"
                  as="textarea"
                  placeholder="Enter your comment"
                  className={css.textarea}
                />
              </div>

              <RedButton
                onClick={() => setModal(false)}
                text="Submit"
              ></RedButton>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
