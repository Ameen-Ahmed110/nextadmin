import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
const SingleUserPage = () => {
  // const user =  fetchUser(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={"/noavatar.png"} alt="" fill />
        </div>
      {/* {user.username} */} username
      </div>
      <div className={styles.formContainer}>
        <form action='' className={styles.form}>
          <input type="hidden" name="id" value="id" />
          <label>Username</label>
          <input type="text" name="username" placeholder="username" />
          <label>Email</label>
          <input type="email" name="email" placeholder="email" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="userphone" />
          <label>Address</label>
          <textarea type="text" name="address" placeholder="useraddress" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected="userisAdmin">
              Yes
            </option>
            <option value={false} selected="userisAdmin">
              No
            </option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected= "userisActive" >
              Yes
            </option>
            <option value={false} selected="!userisActive">
              No
            </option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
