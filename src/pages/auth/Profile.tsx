const Profile = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-base-200">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://via.placeholder.com/150" alt="User Avatar" />
              </div>
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">John Doe</h2>
            <p>Software Engineer</p>
            <p>San Francisco, CA</p>
            <div className="card-actions">
              <button className="btn btn-primary">Follow</button>
              <button className="btn btn-ghost">Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
