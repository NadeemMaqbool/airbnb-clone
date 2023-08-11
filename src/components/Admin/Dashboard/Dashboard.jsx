import "./Dashboard.css"
import people from "../../../assets/people.png"
import {FaUsers} from "react-icons/fa"
import {FaArrowTrendUp} from "react-icons/fa6"
import {FaArrowTrendDown} from "react-icons/fa6"
import {FaHotel} from "react-icons/fa6"
import {FaHandHoldingDollar} from "react-icons/fa6"

const Dashboard = () => {
  return (
    <div className="dynamic-content">
      <div className="container-card">
        <div className="card">
          <div className="title">
            <FaUsers size={50} className="custom-icons"/>
          </div>
          <div className="card-desc">
            <span className="text-eng">Active Users </span>
            <div className="numbers">
              <span className="user-numbers">1200890</span>
              <div className="user-trends">
                <i className="new-numbers">
                  8
                </i>
                <i className="user-trend green">
                  <FaArrowTrendUp size={20}/>
                </i>
              </div>
            </div>
            <span className="last-updated">
              23 Nov 2023
            </span>
          </div>
        </div>

        <div className="card">
          <div className="title">
            <FaHotel size={50} className="custom-icons-hotel"/>
          </div>
          <div className="card-desc">
            <span className="text-eng"> Active Properties </span>
            <div className="numbers">
              <span className="user-numbers">3000</span>
              <div className="user-trends">
                <i className="new-numbers">
                  10
                </i>
                <i className="user-trend red">
                  <FaArrowTrendDown size={20}/>
                </i>
              </div>
            </div>
            <span className="last-updated">
              23 Nov 2023
            </span>
          </div>
        </div>

        <div className="card">
          <div className="title">
            <FaHandHoldingDollar size={50} className="custom-icons-rev"/>
          </div>
          <div className="card-desc">
            <span className="text-eng"> Revenue April 23 </span>
            <div className="numbers">
              <span className="user-numbers">$ 3000</span>
              <div className="user-trends">
                <i className="user-trend red">
                  <FaArrowTrendDown size={20}/>
                </i>
              </div>
            </div>
            <span className="last-updated">
              23 Nov 2023
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard