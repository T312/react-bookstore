import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState,
    formState: { isSubmitSuccessful },
    reset,
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      url: "",
      status: "To Learn",
    },
  });

  const onSubmit = async (data) => {};
  const notify = () => {
    toast.success("🦄 Learn now!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
    }
  }, [formState, reset]);

  const closeModal = () => {};
  return (
    <form
      className={"wrapper__modal active "}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="project_wrap">
        <div className="shadow close_btn"></div>
        <div className="project">
          <div className="header__modal">
            <div className="title__modal">What do you want to learn?</div>
            <span className="icon close_btn">
              <img onClick={closeModal} className="i" />
            </span>
          </div>
          <div className="container__post__modal">
            <div className="body">
              <div className="project_name_wrap">
                <p className="label_title">Title</p>
                <input
                  type="text"
                  className="input_text"
                  placeholder="Title"
                  required
                  {...register("title", { required: true })}
                />
              </div>
              <div className="project_name_wrap">
                <p className="label_title">Description</p>
                <textarea
                  type="text"
                  className="input_text"
                  placeholder="Description"
                  {...register("description", { required: true })}
                />
              </div>
              <div className="project_name_wrap">
                <p className="label_title">Link to learn</p>
                <input
                  type="text"
                  className="input_text"
                  placeholder="Link here"
                  {...register("url", { required: true })}
                />
              </div>
            </div>
            <div className="footer__modal">
              <div className="btn_wrap">
                <button
                  className="cancel_btn close_btn"
                  type="button"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button className="create_btn" type="submit">
                  Start now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
