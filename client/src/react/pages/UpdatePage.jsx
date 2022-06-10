import React, { useEffect, useState, useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link} from "react-router-dom";
import { getPost, updatePost, /*unmountPost*/ } from "../../redux/action-creators";
import * as Yup from "yup";

export default function UpdatePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const uniqueId = useId();
  const initialValues = {
    title: "",
    description: "",
    image: null,
  };
  const postId = useSelector((state) => state.post);
  const [post, setPost] = useState(initialValues);

  useEffect(() => {
    if (id) {
      dispatch(getPost(id));
      setPost({
        title: postId.title ? postId.title : "",
        description: postId.description ? postId.description : "",
        image: postId.image ? postId.image : null,
      });
    }
  }, [dispatch, postId.title, postId.description, id]);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-zinc-800 p-10 shadow-md shadow-black">
        <header className="flex justify-between items-center py-4 text-white">
          <h3 className="text-xl">Update post</h3>
          <Link to={"/"} className="text-gray-400 text-sm hover:text-gray-300">
            Go Back
          </Link>
        </header>

        <Formik
          initialValues={post}
          validationSchema={Yup.object({
            title: Yup.string().required("Title is required"),
            description: Yup.string().required("Description is required"),
          })}
          onSubmit={(values, actions) => {
            console.log(values);
            dispatch(updatePost(id, values));
            navigate("/");
          }}
          enableReinitialize={true}
        >
          {({ handleSubmit,setFieldValue }) => (
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
                onChange={(e) => setFieldValue("image", postId.image?.file)}
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:bg-green-400"
              >
                Update
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
