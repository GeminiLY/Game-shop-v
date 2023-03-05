import React, { useState, useEffect } from 'react';
import './Admin.css';
import axios from "axios";


const AdminReview = () => {
    const [reviewData, setReviewData] = useState([]);


  useEffect(() => {
    fetchAllReviewData();
  }, []);
 
  const fetchAllReviewData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/review/get");
      const rev = response.data.map((rev) => ({
        id: rev.id,
        rate: rev.rating,
        feedb: rev.feedback,
        hidden: rev.hidden,
        reported: rev.reported,
        creat: rev.created_at,
        update: rev.updated_at,
        prod_id: rev.prod_id,
        user_id: rev.user_id,
      }));
      setReviewData(rev);
    } catch (r) {
      console.log(r);
    }
  };
    return (
      <div class="adminProducts">
        <div class="container-fluid">
            <div class="table-responsive">
                <table class="table table-bordeless">
                    <thead>
                    
                        <tr class="bg-light">
                            <th width="5%">#</th>
                            <th width="20%">Rate</th>
                            <th width="10%">Feedback</th>
                            <th width="10%">Hidden</th>
                            <th width="20%">Repported</th>
                            <th width="20%">Creation date</th>
                            <th width="20%">Last Update</th>
                            <th width="20%">User</th>
                        </tr>
                    </thead>
                    <tbody>
                    {reviewData.map((r) => (
                        <tr>
                            <td>{r.id}</td>
                            <td>{r.rate}/5</td>
                            <td>{r.feedb}</td>
                            <td>{r.hidden === true ? "true": "false"}</td>
                            <td>{r.reported === true ? "true": "false"}</td>
                            <td>{r.creat}</td>
                            <td>{r.update}</td>
                            <td>{r.user_id}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    );
};
    
export default AdminReview