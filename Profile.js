// src/components/Profile.js
import React from 'react';

const Profile = () => {
  return (
    <div>
      <h2>Profile Page</h2>
      <form>
        <div className="form-group">
          <label>Current Weight</label>
          <input type="text" className="form-control" placeholder="Enter current weight" />
        </div>
        <div className="form-group">
          <label>Height</label>
          <input type="text" className="form-control" placeholder="Enter height" />
        </div>
        <div className="form-group">
          <label>Training Level</label>
          <select className="form-control">
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>
        <div className="form-group">
          <label>Workout Days per Week</label>
          <input type="number" className="form-control" placeholder="Enter workout days" />
        </div>
        <button type="submit" className="btn btn-primary">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
