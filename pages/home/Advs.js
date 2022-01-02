import React from "react";
import { useForm } from "react-hook-form";
import styles from "../../styles/form.module.css";
import axios from "axios";

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
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhhbmluIiwiaWF0IjoxNjQxMTU0MDMzfQ.BdFiaDxPA1ez__S5u4gfV__rUbj6-Hp1S5bZL_FT9jM",
      },
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
      <div className={styles.container}>
        <div className={styles.title}>Add an AD</div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.input_box}>
            <span>location</span>
            <input
              {...register("location", { required: true })}
              placeholder="location"
            />
          </div>
          <div className={styles.input_box}>
            <span>Description</span>
            <input
              {...register("Description", { required: true })}
              placeholder="Description"
            />
          </div>
          <div className={styles.input_box}>
            <span>Main imge</span>
            <input
              {...register("imgHero", { required: true })}
              placeholder="Main imge"
            />
          </div>
          <div className={styles.input_box}>
            <span>imge 1</span>
            <input
              {...register("img1", { required: true })}
              placeholder="imge 1"
            />
          </div>
          <div className={styles.input_box}>
            <span>imge 2</span>
            <input
              {...register("img2", { required: true })}
              placeholder="imge 2"
            />
          </div>
          <div className={styles.input_box}>
            <span>Rent Duration</span>
            <input
              {...register("rentDuration", { required: true })}
              placeholder="Rent Duration"
            />
          </div>
          <div className={styles.input_box}>
            <span>imge 3</span>
            <input
              {...register("img3", { required: true })}
              placeholder="imge 3"
            />
          </div>
          <div className={styles.input_box}>
            <span>price</span>
            <input
              {...register("price", { required: true })}
              placeholder="price"
            />
          </div>
          <div className={styles.input_box}>
            <span>state</span>
            <input
              {...register("state", { required: true })}
              placeholder="state"
            />
          </div>
          <div className={styles.input_box}>
            <span> Your Name</span>
            <input
              {...register("ownerName", { required: true })}
              placeholder="Your Name"
            />
          </div>
          <div className={styles.input_box}>
            <span>Phone Number</span>
            <input
              {...register("phoneNumber", { required: true })}
              placeholder="Phone Number"
            />
          </div>
          <div className={styles.button}>
            <input type="submit" value={"post an AD"} />
          </div>
        </form>
      </div>
    </>
  );
}
