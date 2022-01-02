import React from "react";
import  {useForm} from "react-hook-form";

export default function Advs() {
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    console.log(data);
    console.log("hell0");
  }
  return (
    <>
      <div>
        {/* <from onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            name="location"
           {...register("location",{required:true})}
            placeholder="location"
            
          />



          {/* <label>Description</label>
          <input
            type="text"
            name="Description"
            {...register("Description", { required: true })}
          />
          <label>imgHero</label>
          <input
            type="text"
            name="imgHero"
            {...register("imgHero", { required: true })}
          />
          <label>img1</label>
          <input
            type="text"
            name="img1"
            {...register("img1", { required: true })}
          />
          <label>img2</label>
          <input
            type="text"
            name="img2"
            {...register("img2", { required: true })}
          />
          <label>rentDuration</label>
          <input
            type="text"
            name="rentDuration"
            {...register("rentDuration", { required: true })}
          />
          <label>accomdationType</label>
          <input
            type="text"
            name="accomdationType"
            {...register("accomdationType", { required: true })}
          />
          <label>price</label>
          <input
            type="text"
            name="price"
            {...register("price", { required: true })}
          />
          <label>state</label>
          <input
            type="text"
            name="state"
            {...register("state", { required: true })}
          />
          <label>ownerName</label>
          <input
            type="text"
            name="ownerName"
            {...register("ownerName", { required: true })}
          />
          <label>phoneNumber</label>
          <input
            type="text"
            name="phoneNumber"
            {...register("phoneNumber", { required: true })} */}
          {/* /> */}
          {/* <input type="submit" />
        </from> */} 
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('test', { required: true })} />

      {/* {errors.email && <span>This email is required</span>} */}

      <input type="submit" />
    </form>
      </div>
    </>
  );
}