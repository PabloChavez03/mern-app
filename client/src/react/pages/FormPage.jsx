import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/action-creators";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function FormPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        validationSchema={Yup.object({
          title: Yup.string().required("Title is required"),
          description: Yup.string().required("Description is required"),
        })}
        onSubmit={(values, actions) => {
          console.log(values);
          dispatch(createPost(values));
          navigate("/");
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              name="title"
              className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
              placeholder="title"
            />
            <ErrorMessage
              component={"p"}
              className="text-red-400 text-sm"
              name="title"
            />
            <Field
              name="description"
              className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
              placeholder="description"
            />
            <ErrorMessage
              component={"p"}
              className="text-red-400 text-sm"
              name="description"
            />
            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
