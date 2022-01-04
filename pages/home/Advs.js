import React from "react";
import { useForm } from "react-hook-form";
import styles from "../../styles/Adv.module.css";
import axios from "axios";
import { RiAdvertisementFill } from "react-icons/ri";

export default function Advs() {
  const { register, handleSubmit } = useForm();
  // function onSubmit(data) {
  //   console.log(data);
  //   console.log("hell0");
  // }
  async function onSubmit(values) {
    let config = {
      method: "post",
      url: `https://safe---house.herokuapp.com/api/v1/house`,
      data: values,
    };

    try {
      const response = await axios(config);
      console.log(response);
      if (response.status == 200) {
        reset();
        toast(
          "success",
          "Thank you for contacting us, we will be in touch soon."
        );
      }
    } catch (err) {}
  }

  return (
    <>
      <div className={styles.form}>
        <div className={styles.title}>
          Post your Advertisment <RiAdvertisementFill />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.input_box}>
            <span>location</span>
            <input
              {...register("location", { required: true })}
              placeholder="location"
              className={styles.input}
            />
          </div>
          <div className={styles.input_box}>
            <span>Description</span>
            <input
              {...register("Description", { required: true })}
              placeholder="Description"
              className={styles.input}
            />
          </div>
          <div className={styles.input_box}>
            <span>Main imge</span>
            <input
              {...register("imgHero", { required: true })}
              placeholder="Main imge"
              className={styles.input}
            />
          </div>
          <div className={styles.input_box}>
            <span>imge 1</span>
            <input
              {...register("img1", { required: true })}
              placeholder="imge 1"
              className={styles.input}
            />
          </div>
          <div className={styles.input_box}>
            <span>imge 2</span>
            <input
              {...register("img2", { required: true })}
              placeholder="imge 2"
              className={styles.input}
            />
          </div>
          <div className={styles.input_box}>
            <span>Rent Duration</span>
            <input
              {...register("rentDuration", { required: true })}
              placeholder="Rent Duration"
              className={styles.input}
            />
          </div>
          <div className={styles.input_box}>
            <span>imge 3</span>
            <input
              {...register("img3", { required: true })}
              placeholder="imge 3"
              className={styles.input}
            />
          </div>
          <div className={styles.input_box}>
            <span>price</span>
            <input
              {...register("price", { required: true })}
              placeholder="price"
              className={styles.input}
            />
          </div>
          <div className={styles.input_box}>
            <span>state</span>
            <input
              {...register("state", { required: true })}
              placeholder="state"
              className={styles.input}
            />
          </div>
          <div className={styles.input_box}>
            <span> Your Name</span>
            <input
              {...register("ownerName", { required: true })}
              placeholder="Your Name"
              className={styles.input}
            />
          </div>
          <div className={styles.input_box}>
            <span>Phone Number</span>
            <input
              {...register("phoneNumber", { required: true })}
              placeholder="Phone Number"
              className={styles.input}
            />
          </div>
          <div>
            <input
              type="submit"
              className={styles.form_button}
              value={"post an AD"}
            />
          </div>
        </form>
      </div>
    </>
  );
}
