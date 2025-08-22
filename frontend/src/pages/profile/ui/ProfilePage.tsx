import React from 'react';

export const ProfilePage: React.FC = () => {
  return (
    <div className="profile-page">
      <h2>User Profile</h2>
      <p>This is the profile page with main layout.</p>
      <div className="content">
        <h3>Profile Information</h3>
        <div className="profile-info">
          <p><strong>Name:</strong> Doil</p>
          <p><strong>Role:</strong> Developer</p>
          <p><strong>Joined:</strong> 2024</p>
        </div>
        <h3>Settings</h3>
        <div className="settings">
          <p>User preferences and settings will be displayed here.</p>
        </div>
      </div>
    </div>
  );
};