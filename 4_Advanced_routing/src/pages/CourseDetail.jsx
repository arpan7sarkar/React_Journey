import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const params = useParams();//using it we can access params from the url
  console.log(params.courseId);
  return (
    <div>
      <h2 style={{ fontSize: "80px" }}>{params.courseId} Course Details</h2>
    </div>
  );
};

export default CourseDetail;
