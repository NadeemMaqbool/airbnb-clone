import "./Skeleton.css"

const Skeleton = () => {
  return (
    <div className="container-skeleton">
        <div className="skeleton">
            <div className="img-box">

            </div>
            <div className="content-box">
                <div className="title-major"></div>
                <div className="title-minor"></div>
                <div className="title-minor mb-30"></div>
                <div className="sub-title">
                    <div className="amenity"></div>
                    <div className="price"></div>
                </div>
            </div>
        </div>      
    </div>
)}
export default Skeleton