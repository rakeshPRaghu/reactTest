import { useEffect, useState } from "react";

function EmailFetch() {
  const [userData, setUserData] = useState();
  const fetchEmail = async () => {
    let userIdList = [1, 3, 10];
    let userList = [];
    for (let i = 0; i < userIdList.length; i++) {
      const response = await fetch(
        `https://reqres.in/api/users/${userIdList[i]}`
      );
      const userDataResponse = await response.json();
      userList.push(userDataResponse?.data);
    }
    setUserData(userList);
  };
  useEffect(() => {
    fetchEmail();
  }, []);
  console.log(userData);
  return (
    <>
      <div className="emailList">
        {userData
          ? userData?.map((data) => {
              return <span key={data.email}> email : {data.email}</span>;
            })
          : "loading..."}
      </div>
    </>
  );
}

export default EmailFetch;
