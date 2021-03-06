import React, { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/action-creators";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export default function FormPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const uniqueId = useId();

  return (
    <div className="flex items-center justify-center">
      <div className="bg-zinc-800 p-10 shadow-md shadow-black">
        <header className="flex justify-between items-center py-4 text-white">
          <h3 className="text-xl">Create post</h3>
          <Link to={"/"} className="text-gray-400 text-sm hover:text-gray-300">
            Go Back
          </Link>
        </header>

        <Formik
          initialValues={{ title: "", description: "", image: null }}
          validationSchema={Yup.object({
            title: Yup.string().required("Title is required"),
            description: Yup.string().required("Description is required"),
          })}
          onSubmit={(values, actions) => {
            console.log(values);
            dispatch(createPost(values));
            actions.setSubmitting(false);
            navigate("/");
          }}
          enableReinitialize={true}
        >
          {({ handleSubmit, setFieldValue, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <label
                htmlFor={`${uniqueId}-title`}
                className="text-sm block font-bold text-gray-400"
              >
                Title
              </label>
              <Field
                name="title"
                id={`${uniqueId}-title`}
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
                placeholder="title"
              />
              <ErrorMessage
                component={"p"}
                className="text-red-400 text-sm"
                name="title"
              />
              <label
                htmlFor={`${uniqueId}-description`}
                className="text-sm block font-bold text-gray-400"
              >
                Description
              </label>
              <Field
                component="textarea"
                name="description"
                id={`${uniqueId}-description`}
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
                placeholder="description"
              />
              <ErrorMessage
                component={"p"}
                className="text-red-400 text-sm"
                name="description"
              />
              <label
                htmlFor={`${uniqueId}-image`}
                className="text-sm block font-bold text-gray-400"
              >
                Image
              </label>
              <input
                type="file"
                name="image"
                id={`${uniqueId}-image`}
                className="px-4 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
                onChange={(e) => setFieldValue("image", e.target.files['0'])}
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:bg-indigo-400"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <AiOutlineLoading3Quarters className="animate-spin h-5 w-5"/>
                ) : ("Save")}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
